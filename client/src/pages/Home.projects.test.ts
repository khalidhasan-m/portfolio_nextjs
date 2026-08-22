import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const homeSource = readFileSync(fileURLToPath(new URL("./Home.tsx", import.meta.url)), "utf8");

describe("portfolio project links", () => {
  it("shows ScopeSprint’s verified GitHub Pages deployment", () => {
    const scopeSprintCaseStudy = homeSource.match(/index: "03", name: "ScopeSprint"[\s\S]*?code: "https:\/\/github\.com\/khalidhasan-m\/scope-sprint"/);

    expect(scopeSprintCaseStudy?.[0]).toContain('live: "https://khalidhasan-m.github.io/scope-sprint/"');
  });
});
