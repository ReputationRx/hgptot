#!/usr/bin/env bash
# Deploy HGPTOT to production (run from your Mac in the repo root)
# Usage: bash deploy/deploy-production.sh
set -euo pipefail

SERVER="root@64.176.218.196"
KEY="${HGPTOT_SSH_KEY:-$HOME/Downloads/slideindm_site_blog_backup/id_ed25519_slideindm}"
APP_DIR="/www/wwwroot/hgptot.com"
SSH_OPTS=(-i "$KEY" -o StrictHostKeyChecking=accept-new -o ConnectTimeout=20)

if [ ! -f "$KEY" ]; then
  echo "SSH key not found: $KEY"
  echo "Set HGPTOT_SSH_KEY to your private key path."
  exit 1
fi

echo "==> Pushing latest code (if git remote configured)"
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  if ! git diff --quiet || ! git diff --cached --quiet; then
    if [ "${DEPLOY_FORCE:-}" != "1" ]; then
      echo "Uncommitted changes detected. Commit and push first, or run: DEPLOY_FORCE=1 bash deploy/deploy-production.sh"
      exit 1
    fi
    echo "Warning: deploying with uncommitted local changes (DEPLOY_FORCE=1)."
  fi
  git push origin main || echo "(git push failed — ensure main is pushed before server pull)"
fi

echo "==> Deploying on server"
ssh "${SSH_OPTS[@]}" "$SERVER" bash -s <<REMOTE
set -euo pipefail
APP_DIR="$APP_DIR"
cd "\$APP_DIR"

if [ -d .git ]; then
  git fetch origin main
  git reset --hard origin/main
else
  echo "No git repo at \$APP_DIR — clone manually first."
  exit 1
fi

npm ci || npm install
npm run build
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static

if [ -f deploy/fix-static-400.sh ]; then
  bash deploy/fix-static-400.sh
fi

if command -v pm2 >/dev/null 2>&1; then
  # Free port 3004 so a stale next-server (aaPanel/nohup) cannot block the new build
  if command -v fuser >/dev/null 2>&1; then
    fuser -k 3004/tcp 2>/dev/null || true
  else
    pkill -f "next-server.*3004" 2>/dev/null || true
    pkill -f "standalone/server.js" 2>/dev/null || true
  fi
  sleep 1
  pm2 delete hgptot 2>/dev/null || true
  pm2 start ecosystem.config.cjs
  pm2 save
  if ! pm2 describe hgptot 2>/dev/null | grep -q "status.*online"; then
    echo "ERROR: hgptot did not start — check: pm2 logs hgptot"
    exit 1
  fi
elif [ -f /www/server/nodejs/vhost/scripts/hgptot.sh ]; then
  bash /www/server/nodejs/vhost/scripts/hgptot.sh restart
else
  pkill -f "standalone/server.js" 2>/dev/null || true
  cd .next/standalone && PORT=3004 HOSTNAME=127.0.0.1 nohup node server.js >/tmp/hgptot.log 2>&1 &
fi

echo "Deploy complete."
curl -sI -H "Host: hgptot.com" http://127.0.0.1:3004/ | head -1 || true
REMOTE

echo "==> Done. Check https://hgptot.com"
