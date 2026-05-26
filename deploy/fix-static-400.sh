#!/usr/bin/env bash
# Fix Next.js ChunkLoadError / 400 on hgptot.com (CSS/JS not loading)
# Serves /_next/static/ from disk in every vhost that proxies to this app (port 3004).
# Run on server as root: bash /www/wwwroot/hgptot.com/deploy/fix-static-400.sh

set -euo pipefail

APP_DIR="/www/wwwroot/hgptot.com"
VHOST_DIR="/www/server/panel/vhost/nginx"

echo "==> Ensure static files exist"
cd "$APP_DIR"
cp -r public .next/standalone/public 2>/dev/null || true
cp -r .next/static .next/standalone/.next/static

CSS_FILES=$(find .next/static/css -name "*.css" 2>/dev/null | wc -l | tr -d " ")
if [ "${CSS_FILES:-0}" -lt 1 ]; then
  echo "ERROR: no CSS under .next/static/css after build — build may have failed"
  exit 1
fi
echo "==> Found $CSS_FILES CSS file(s) in .next/static/css"

echo "==> Patch nginx vhosts (serve /_next/static/ from disk; remove duplicate proxy blocks)"
python3 <<'PY'
import re
from pathlib import Path

app_dir = Path("/www/wwwroot/hgptot.com")
vhost_dir = Path("/www/server/panel/vhost/nginx")

block = """    # Next.js static assets (serve from disk, bypass Node proxy)
    location /_next/static/ {
        alias /www/wwwroot/hgptot.com/.next/static/;
        access_log off;
        expires 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

"""


def strip_next_static_locations(s: str) -> str:
    out = []
    i = 0
    while i < len(s):
        m = re.search(r"^\s*location\s+/_next/static", s[i:], re.MULTILINE)
        if not m:
            out.append(s[i:])
            break
        start = i + m.start()
        out.append(s[i:start])
        brace = s.find("{", start)
        if brace == -1:
            out.append(s[start:])
            break
        depth = 0
        j = brace
        while j < len(s):
            if s[j] == "{":
                depth += 1
            elif s[j] == "}":
                depth -= 1
                if depth == 0:
                    j += 1
                    while j < len(s) and s[j] in " \t\r\n":
                        j += 1
                    i = j
                    break
            j += 1
        else:
            out.append(s[start:])
            break
    return "".join(out)


def patch_one(text):
    text = strip_next_static_locations(text)
    if "alias /www/wwwroot/hgptot.com/.next/static/" in text:
        return text, "unchanged"
    m = re.search(r"^\s*location\s+/\s*\{", text, re.MULTILINE)
    if not m:
        return text, "skip_no_location_slash"
    insert_at = m.start()
    return text[:insert_at] + block + text[insert_at:], "inserted"


def should_patch_file(path: Path) -> bool:
    try:
        text = path.read_text()
    except OSError:
        return False
    if "3004" not in text:
        return False
    if "hgptot" not in text.lower():
        return False
    return True


patched = 0
considered = 0
for path in sorted(vhost_dir.glob("*.conf")):
    if not should_patch_file(path):
        continue
    considered += 1
    text = path.read_text()
    new_text, status = patch_one(text)
    if new_text != text:
        path.write_text(new_text)
        patched += 1
        print(f"nginx: updated {path.name} ({status})")
    else:
        print(f"nginx: {path.name} ({status})")

if considered == 0:
    print("nginx: WARNING — no vhost .conf matched (3004 + hgptot). Check aaPanel node proxy file names.")
PY

echo "==> Reload nginx"
/www/server/nginx/sbin/nginx -t
/www/server/nginx/sbin/nginx -s reload

echo "==> Restart Node app"
if [ -f /www/server/nodejs/vhost/scripts/hgptot.sh ]; then
  bash /www/server/nodejs/vhost/scripts/hgptot.sh restart 2>/dev/null || bash /www/server/nodejs/vhost/scripts/hgptot.sh
fi

echo "==> Smoke test (first layout CSS on disk)"
FIRST_CSS=$(ls "$APP_DIR/.next/static/css/"*.css 2>/dev/null | head -1)
if [ -n "$FIRST_CSS" ]; then
  REL="_next/static/css/$(basename "$FIRST_CSS")"
  echo "Testing https://hgptot.com/$REL"
  curl -sI "https://hgptot.com/$REL" | head -3 || true
fi

echo "==> If still 404: purge CDN cache, or whitelist /_next/static/* in aaPanel WAF"
