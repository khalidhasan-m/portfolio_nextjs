# Vercel Deployment

The repository is configured for the active **Vite + Express** portfolio, not the archived legacy Next.js source. The root `vercel.json` pins the framework to Vite, runs `pnpm build`, publishes `dist/public`, preserves `/api/*` for the serverless Express adapter, routes `/manus-storage/*` to `/api/manus-storage/*` (so portfolio images/video work), and routes all other non-API deep links to the single-page application.

## Redeploy

In Vercel, open the project connected to `khalidhasan-m/portfolio_nextjs`. Confirm **Root Directory** is the repository root, then redeploy the latest commit from the **Deployments** tab (or push to `main` if auto-deploy is on). The committed `vercel.json` takes precedence over any prior Next.js framework detection.

## Production environment variables

Set these in **Vercel → Project Settings → Environment Variables** for **Production**, then redeploy.

### Required for portfolio images / video (`/manus-storage/*`)

Hero, logo, profile, project evidence, and motion assets are loaded through the storage proxy. Without these, images return 500/502 on live:

- `BUILT_IN_FORGE_API_URL`
- `BUILT_IN_FORGE_API_KEY`

These come from the Manus / Forge storage backend that originally hosted the assets. If you no longer have them, host the files under `client/public/` and change the paths in `client/src/pages/Home.tsx` (and related content files) to static URLs such as `/images/hero.png`.

### Required for contact API / auth (when those features are enabled)

- `DATABASE_URL`
- `JWT_SECRET`
- `OAUTH_SERVER_URL`
- `OWNER_OPEN_ID`

### Optional client build vars (when those features are enabled)

- `VITE_APP_ID`
- `VITE_FRONTEND_FORGE_API_URL`
- `VITE_FRONTEND_FORGE_API_KEY`
- `VITE_OAUTH_PORTAL_URL`

Do not commit secret values to the repository.

## Verify images after deploy

1. Open https://portfolio-nextjs-plum-nine.vercel.app
2. Confirm hero prism, logo, profile photo, and project evidence images load (not broken icons).
3. Direct check: `/manus-storage/masterwork-hero-prism_8be4df2b.png` should redirect (307) to a signed storage URL, not 404.
