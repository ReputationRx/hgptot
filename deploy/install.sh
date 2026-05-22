#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/www/wwwroot/hgptot.com"
REPO="https://github.com/ReputationRx/hgptot.git"
PORT=3004

echo "==> Preparing app directory"
mkdir -p "$APP_DIR"
cd "$APP_DIR"

if [ -d .git ]; then
  git pull origin main
else
  git clone "$REPO" .
fi

echo "==> Installing dependencies"
npm ci || npm install

echo "==> Building Next.js (standalone)"
npm run build

echo "==> Copying standalone assets"
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static

echo "==> Starting with PM2"
pm2 delete hgptot 2>/dev/null || true
pm2 start ecosystem.config.cjs
pm2 save

echo "==> Done. App should listen on 127.0.0.1:${PORT}"
