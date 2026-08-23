# Vercel Deployment

The repository is configured for the active **Vite + Express** portfolio. The legacy Next.js source has been removed from the active tree. The root `vercel.json` pins the framework to Vite, runs `pnpm build`, publishes `dist/public`, keeps `/api/*` on the serverless Express adapter, and sends other deep links to the single-page application.

## Redeploy checklist

In Vercel, open the project connected to `khalidhasan-m/portfolio_nextjs`. Confirm that **Root Directory** is the repository root, the production branch is `main`, and the framework preset is allowed to use the committed Vite configuration. Redeploy the latest commit from the **Deployments** tab, or push a new commit when automatic deployments are enabled.

After deployment, open the production URL and verify the hero prism, logo, profile photo, project evidence panels, case-study routes, dark-mode toggle, and contact form. The public media files are served directly from committed paths under `/assets/portfolio/`; they do not depend on `/manus-storage/*` or Forge image credentials.

## Production environment variables

Set the following values in **Vercel → Project Settings → Environment Variables** for Production before testing the contact endpoint. Never commit secret values to the repository.

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | MySQL/TiDB connection used to persist contact inquiries. |
| `JWT_SECRET` | Session and authentication signing secret. |
| `OAUTH_SERVER_URL` | OAuth backend base URL. |
| `OWNER_OPEN_ID` | Owner identity used by the notification and auth flows. |
| `VITE_APP_ID` | Public OAuth application identifier. |
| `VITE_OAUTH_PORTAL_URL` | Frontend OAuth login portal URL. |

The built-in Manus/Forge variables may remain available when supplied by the hosting environment because the full-stack template supports optional integrations, but they are **not required to serve the portfolio’s images or video**. The active media references are root-relative paths such as `/assets/portfolio/masterwork-hero-prism.webp`.

## Post-deploy checks

1. Confirm the homepage loads without broken-image indicators.
2. Open `/work/route-form`, `/work/signal-desk`, and `/work/pawfect-match` and confirm their evidence images render.
3. Submit a controlled contact inquiry using the production form and confirm the success state appears.
4. Confirm the Vercel function responds at `/api/oauth/callback` and `/api/trpc/contactInquiry.submit` according to the application’s auth and validation rules.
5. If an old deployment still requests `/manus-storage/*`, redeploy the current `main` commit rather than restoring the retired managed-storage asset paths.
