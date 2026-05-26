# HGPTOT Website

Next.js + TailwindCSS marketing site for HGPTOT, built for local SEO around senior-focused Physical Therapy and Occupational Therapy in Queens, NY and Nassau County, NY.

## Stack

- Next.js App Router
- TypeScript
- TailwindCSS
- Static-friendly, aaPanel/NGINX-friendly deployment structure

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

The project uses `output: "standalone"` in [`next.config.mjs`](/Users/Waqar/HGPTOT/next.config.mjs), which makes it easier to deploy on aaPanel-managed Node.js setups or behind NGINX reverse proxy.

## Suggested aaPanel deployment

1. Create a site/domain in aaPanel that points to your HGPTOT domain.
2. Install Node.js Manager in aaPanel if it is not already installed.
3. Upload this project to the server, for example under `/www/wwwroot/hgptot`.
4. In aaPanel terminal or SSH:

```bash
cd /www/wwwroot/hgptot
npm install
npm run build
PORT=3000 npm run start
```

5. In aaPanel or NGINX, reverse proxy the public domain to `127.0.0.1:3000`.

### If CSS/JS show 404 after a deploy (`_next/static/...`)

Each build uses **new hashed filenames** for bundles. If **HTML is still cached** (browser, Cloudflare, or another CDN) from an older deploy, that HTML points at **old** chunk names that no longer exist on disk → 404.

**Fix for visitors:** hard refresh (Shift+Reload) or clear site data for `hgptot.com`.

**Fix on infra:** purge CDN cache for the site after every deploy. This repo sets `Cache-Control: max-age=0, must-revalidate` on HTML routes (see [`next.config.mjs`](next.config.mjs)) so browsers revalidate documents; you still need to purge **edge caches** if you use one.

**On the server:** serve `/_next/static/` from disk with the alias in [`deploy/fix-static-400.sh`](deploy/fix-static-400.sh) so nginx always reads the current build’s files from `/www/wwwroot/hgptot.com/.next/static/`.

Example NGINX location block:

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_cache_bypass $http_upgrade;
}
```

## Pre-launch checklist

- Replace placeholder domain in [`data/site.ts`](/Users/Waqar/HGPTOT/data/site.ts) with the real production URL.
- Replace placeholder phone number and email in [`data/site.ts`](/Users/Waqar/HGPTOT/data/site.ts).
- Connect the contact form to an email handler, CRM, or API before going live.
- Add final business address and hours if you want richer local schema and stronger local SEO signals.
- Add Google Business Profile, reviews, and local citations to support the on-page SEO foundation.
