# The Masterwork Index — Khalid Hasan Meskat

The Masterwork Index is the personal portfolio of **Khalid Hasan Meskat**, a frontend developer from Bangladesh. It presents selected interface work, full-stack product builds, interactive mini-projects, and a production contact path through an editorial, motion-led experience.

The active application is a **React 19 + Vite** frontend served by an **Express** backend. The repository is not a Next.js application. The former Next.js source has been archived outside the deployable project so it cannot affect framework detection or production builds.

## What is included

The portfolio includes a responsive editorial homepage, dark mode, an interactive craft-prism hero, featured and supporting project groups, detailed case-study routes, project evidence panels, a technology motion signal with reduced-motion fallback, keyboard-visible interaction states, a command navigator, and a contact form backed by tRPC and MySQL.

The work index currently presents six case studies: RouteForm, SignalDesk, ScopeSprint, PawfectMatch, Wanderlust, and SunCart. RouteForm, SignalDesk, and ScopeSprint are standalone repositories with public project links. Case-study content distinguishes verified implementation signals from real client outcomes; unsupported performance claims, testimonials, ratings, and results are intentionally not included.

## Technology

| Area | Current implementation |
|---|---|
| Frontend | React 19, TypeScript, Vite 7 |
| Styling | Tailwind CSS 4, layered portfolio CSS, responsive media queries |
| Routing | Wouter with lazy-loaded case-study routes |
| Backend | Express 4, tRPC 11 |
| Data | MySQL with Drizzle ORM |
| Contact flow | Validated tRPC mutation, durable inquiry storage, owner notification attempt, honeypot protection |
| Visuals | Static public portfolio assets, CSS motion, optional technology video with reduced-motion fallback |
| Testing | Vitest, TypeScript checks, Playwright browser checks |
| Deployment | Vercel with Vite output and an Express serverless API adapter |

## Repository layout

```text
client/
  index.html                  # document metadata and social-sharing tags
  public/
    assets/portfolio/          # deployment-owned logo, profile, evidence, and motion assets
    robots.txt                # crawler guidance
  src/
    App.tsx                   # homepage and /work/:slug routes
    pages/Home.tsx            # portfolio index and interactive sections
    pages/CaseStudy.tsx       # detailed case-study route
    pages/ContactForm.tsx     # production contact form
    content/caseStudies.ts    # verified case-study content and build signals
    content/insights.ts       # project-informed notes and implementation insights
    pages/*.css               # scoped visual layers and interaction refinements
server/
  app.ts                      # shared Express application factory
  routers.ts                  # tRPC procedures
  db.ts                       # Drizzle database helpers
  contact.ts                  # contact validation and notification formatting
  _core/                      # active OAuth, storage, Vite, notification, and server plumbing
api/
  [...path].ts                # Vercel-compatible Express function adapter
drizzle/
  schema.ts                   # users and contact inquiry tables
scripts/
  portfolio-upgrade-check.mjs # Playwright regression checks
vercel.json                   # Vite build, output, API routing, and SPA fallback
pnpm-workspace.yaml           # pnpm patch and native-build configuration
```

## Local development

Use Node.js 20 or newer and pnpm 10. Install dependencies, then start the development server from the repository root.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000`. The development entrypoint runs the Express server, serves the Vite application, and keeps the tRPC API available at `/api/trpc`.

## Validation commands

Run the same checks used before publishing a repository update.

```bash
pnpm check
pnpm test
pnpm build
node scripts/portfolio-upgrade-check.mjs
```

`pnpm build` creates the browser output in `dist/public` and bundles the production server into `dist/index.js`. The browser check covers project hierarchy, case-study routes, cursor and focus behavior, reduced-motion behavior, contact guidance, and rendered image loading. It expects Chromium to be available at `/usr/bin/chromium` in the development environment.

## Static assets

All required portfolio images and the technology motion asset are stored in `client/public/assets/portfolio/`. Vite copies this directory directly to `dist/public/assets/portfolio/`, so active visual references use stable root-relative URLs such as `/assets/portfolio/khalid-profile.jpg`.

Keep source originals outside the repository when possible and optimize derivatives before committing them. The active application must reference the public asset paths, not temporary upload URLs or server-dependent storage paths. Do not place secrets in the public directory.

## Database and contact form

The contact form writes validated inquiries to the `contact_inquiries` table through the public tRPC `contact.submit` procedure. The schema is defined in `drizzle/schema.ts`, database helpers are in `server/db.ts`, and validation is in `server/contact.ts`.

Set the database connection before running schema commands. The database migration workflow is:

```bash
pnpm db:push
```

Production environment values must be configured through the hosting provider’s secret manager. Never commit `.env` files or literal credentials.

## Vercel deployment

The repository includes an explicit `vercel.json` for the active Vite + Express architecture. It freezes the pnpm install, runs `pnpm build`, publishes `dist/public`, preserves `/api/*` for the Express function, preserves managed-storage compatibility, and sends other application paths to the SPA entrypoint.

In Vercel, set the project root to the repository root and redeploy the newest `main` commit. The production contact path requires `DATABASE_URL`, `JWT_SECRET`, `OAUTH_SERVER_URL`, `OWNER_OPEN_ID`, `BUILT_IN_FORGE_API_URL`, and `BUILT_IN_FORGE_API_KEY`. Configure client-facing OAuth values when those features are enabled: `VITE_APP_ID`, `VITE_FRONTEND_FORGE_API_URL`, `VITE_FRONTEND_FORGE_API_KEY`, and `VITE_OAUTH_PORTAL_URL`.

After deployment, verify both the homepage and a direct asset URL, for example:

```text
https://your-domain.example/assets/portfolio/khalid-profile.jpg
```

Then submit a controlled contact inquiry and confirm that the form displays the expected success or error state.

## Content and customization

| Change | File or directory |
|---|---|
| Homepage sections and project index | `client/src/pages/Home.tsx` |
| Detailed case-study content | `client/src/content/caseStudies.ts` |
| Project-informed notes | `client/src/content/insights.ts` |
| Case-study route presentation | `client/src/pages/CaseStudy.tsx` |
| Contact validation and UI | `client/src/pages/ContactForm.tsx` and `server/contact.ts` |
| Portfolio visual system | `client/src/index.css` and `client/src/pages/*.css` |
| Images and motion assets | `client/public/assets/portfolio/` |
| Database schema | `drizzle/schema.ts` |
| tRPC procedures | `server/routers.ts` |
| Hosting behavior | `vercel.json` |

## License

MIT. The portfolio content, identity, project evidence, and visual assets remain specific to Khalid Hasan Meskat and should not be reused without permission.

## References

[1]: https://vite.dev/guide/ "Vite documentation"
[2]: https://vercel.com/docs/frameworks/frontend/vite "Vercel Vite deployment documentation"
[3]: https://trpc.io/docs "tRPC documentation"
[4]: https://orm.drizzle.team/docs/overview "Drizzle ORM documentation"
