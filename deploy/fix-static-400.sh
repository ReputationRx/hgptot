#!/usr/bin/env bash
# Fix Next.js ChunkLoadError / 400 on hgptot.com
# Root cause: WAF or nginx blocks /_next/static/chunks/app/ and /_next/static/css/
# Run on server as root: bash /www/wwwroot/hgptot.com/deploy/fix-static-400.sh

set -euo pipefail

APP_DIR="/www/wwwroot/hgptot.com"
NGINX_CONF="/www/server/panel/vhost/nginx/node_hgptot.conf"

echo "==> Ensure static files exist"
cd "$APP_DIR"
cp -r public .next/standalone/public 2>/dev/null || true
cp -r .next/static .next/standalone/.next/static

echo "==> Patch nginx: serve /_next/static/ from disk (replace proxy if present)"
python3 <<'PY'
import re
from pathlib import Path

path = Path("/www/server/panel/vhost/nginx/node_hgptot.conf")
text = path.read_text()

block = """    # Next.js static assets (serve from disk, bypass Node proxy)
    location /_next/static/ {
        alias /www/wwwroot/hgptot.com/.next/static/;
        access_log off;
        expires 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

"""

def strip_next_static_locations(s: str) -> str:
    """Remove any location /_next/static ... { ... } blocks (proxy or alias)."""
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

text = strip_next_static_locations(text)

if "alias /www/wwwroot/hgptot.com/.next/static/" not in text:
    m = re.search(r"^(\s*)location\s+/\s*\{", text, re.MULTILINE)
    if m:
        insert_at = m.start()
        text = text[:insert_at] + block + text[insert_at:]
        print("nginx: inserted static alias block before location /")
    else:
        raise SystemExit(
            "Could not find 'location / {' in nginx config — add the /_next/static/ alias block manually in aaPanel"
        )
else:
    print("nginx: static alias already present after cleanup")

path.write_text(text)
PY

echo "==> Reload nginx"
/www/server/nginx/sbin/nginx -t
/www/server/nginx/sbin/nginx -s reload

echo "==> Restart Node app"
if [ -f /www/server/nodejs/vhost/scripts/hgptot.sh ]; then
  bash /www/server/nodejs/vhost/scripts/hgptot.sh restart 2>/dev/null || bash /www/server/nodejs/vhost/scripts/hgptot.sh
fi

echo "==> Test URLs (expect HTTP/1.1 200 for all)"
curl -sI -H "Host: hgptot.com" "http://127.0.0.1/_next/static/chunks/app/layout-4e24f1384f2152c7.js" | head -1 || true
curl -sI -H "Host: hgptot.com" "http://127.0.0.1/_next/static/css/" 2>/dev/null | head -1 || true
LAYOUT=$(ls "$APP_DIR/.next/static/chunks/app/"layout-*.js 2>/dev/null | head -1)
if [ -n "$LAYOUT" ]; then
  HASH=$(basename "$LAYOUT")
  curl -sI -H "Host: hgptot.com" "http://127.0.0.1/_next/static/chunks/app/$HASH" | head -1
fi

echo "==> If still 400: aaPanel WAF is blocking /app/ in URLs."
echo "    Whitelist: /_next/static/* for hgptot.com in Security -> WAF -> Site rules"
