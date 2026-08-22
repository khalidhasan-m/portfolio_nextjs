# Vercel Deployment

The repository is configured for the active **Vite + Express** portfolio, not the archived legacy Next.js source. The root `vercel.json` pins the framework to Vite, runs `pnpm build`, publishes `dist/public`, preserves `/api/*` for the serverless Express adapter, and routes all non-API deep links to the single-page application.

## Redeploy

In Vercel, open the project that is connected to `khalidhasan-m/portfolio_nextjs`. Confirm that the **Root Directory** is the repository root, then redeploy commit `f4d61ec` from the **Deployments** tab. The committed `vercel.json` takes precedence over the prior incorrect Next.js detection, so no Next.js framework setting should be retained.

## Production environment variables

The production contact API requires these server-side variables: `DATABASE_URL`, `JWT_SECRET`, `OAUTH_SERVER_URL`, `OWNER_OPEN_ID`, `BUILT_IN_FORGE_API_URL`, and `BUILT_IN_FORGE_API_KEY`. The client build also requires `VITE_APP_ID`, `VITE_FRONTEND_FORGE_API_URL`, `VITE_FRONTEND_FORGE_API_KEY`, and `VITE_OAUTH_PORTAL_URL` when their respective features are enabled.

Set real production values in **Vercel → Project Settings → Environment Variables** for the Production environment, then redeploy. Do not commit secret values to the repository.
