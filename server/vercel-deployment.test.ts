import { readFileSync } from "node:fs";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import vercelApi from "../api/[...path]";

const vercelConfig = JSON.parse(
  readFileSync(fileURLToPath(new URL("../vercel.json", import.meta.url)), "utf8"),
);
const adapterSource = readFileSync(
  fileURLToPath(new URL("../api/[...path].ts", import.meta.url)),
  "utf8",
);
const appSource = readFileSync(
  fileURLToPath(new URL("./app.ts", import.meta.url)),
  "utf8",
);
const workspaceSource = readFileSync(
  fileURLToPath(new URL("../pnpm-workspace.yaml", import.meta.url)),
  "utf8",
);

describe("Vercel deployment contract", () => {
  it("builds the active Vite frontend instead of attempting legacy Next.js detection", () => {
    expect(vercelConfig.framework).toBe("vite");
    expect(vercelConfig.buildCommand).toBe("pnpm build");
    expect(vercelConfig.outputDirectory).toBe("dist/public");
    expect(vercelConfig.installCommand).toContain("--frozen-lockfile");
    const rewriteSources = vercelConfig.rewrites.map((rewrite: { source: string }) => rewrite.source);
    expect(rewriteSources.some((source: string) => source.includes("api"))).toBe(true);
    expect(rewriteSources.some((source: string) => source.includes("manus-storage"))).toBe(true);
    expect(workspaceSource).toContain("onlyBuiltDependencies");
    expect(workspaceSource).toContain("@tailwindcss/oxide");
    expect(workspaceSource).toContain("esbuild");
  });

  it("keeps the production API in a catch-all Vercel function", () => {
    expect(adapterSource).toContain("createPortfolioApp");
    expect(adapterSource).toContain("export default app");
    expect(appSource).toContain('"/api/trpc"');
    expect(appSource).toContain("registerOAuthRoutes(app)");
  });

  it("serves an existing API route through the Vercel adapter without starting a long-lived listener", async () => {
    const server = createServer(vercelApi);
    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));

    try {
      const address = server.address();
      if (!address || typeof address === "string") throw new Error("Test server did not bind to a TCP port");

      const response = await fetch(
        `http://127.0.0.1:${address.port}/api/oauth/callback`,
      );
      expect(response.status).toBe(400);
      expect(await response.json()).toEqual({ error: "code and state are required" });
    } finally {
      await new Promise<void>((resolve, reject) =>
        server.close((error) => (error ? reject(error) : resolve())),
      );
    }
  });
});
