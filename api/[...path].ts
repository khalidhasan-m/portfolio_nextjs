import { createPortfolioApp } from "../server/app";

// Vercel maps all /api/* requests to this stateless Express application.
// The same routes power the production contact form, OAuth callback, and
// managed-storage proxy without starting a long-lived Node listener.
const app = createPortfolioApp();

export default app;
