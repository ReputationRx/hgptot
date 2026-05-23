#!/usr/bin/env bash
# Fix Next.js ChunkLoadError / 400 on hgptot.com
# Root cause: WAF or nginx blocks /_next/static/chunks/app/ and /_next/static/css/
# Run on server as root: bash /www/wwwroot/hgptot.com/deploy/fix-static-400.sh

set -euo pipefail

APP_DIR="/www/wwwroot/hgptot.com"
NGINX_CONF="/www/server/panel/vhost/nginx/node_hgptot.conf"
STATIC_BLOCK='    # Next.js static assets (serve from disk, bypass Node proxy)
    location /_next/static/ {
        alias /www/wwwroot/hgptot.com/.next/static/;
        access_log off;
        expires 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
'

echo "==> Ensure static files exist"
cd "$APP_DIR"
cp -r public .next/standalone/public 2>/dev/null || true
cp -r .next/static .next/standalone/.next/static

echo "==> Patch nginx if static location missing"
if ! grep -q "alias /www/wwwroot/hgptot.com/.next/static/" "$NGINX_CONF"; then
  # Insert before "location / {" proxy block
  python3 <<'PY'
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
needle = "    location / {"
if needle not in text:
    raise SystemExit("Could not find location / block in nginx config")
if "alias /www/wwwroot/hgptot.com/.next/static/" not in text:
    text = text.replace(needle, block + needle, 1)
    path.write_text(text)
    print("nginx config patched")
else:
    print("nginx static block already present")
PY
fi

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
