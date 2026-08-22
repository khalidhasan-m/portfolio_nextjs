import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { caseStudies } from "@/content/caseStudies";

const homeSource = readFileSync(fileURLToPath(new URL("./Home.tsx", import.meta.url)), "utf8");
const contactSource = readFileSync(fileURLToPath(new URL("./ContactForm.tsx", import.meta.url)), "utf8");
const documentHead = readFileSync(fileURLToPath(new URL("../../index.html", import.meta.url)), "utf8");

describe("portfolio project links", () => {
  it("shows ScopeSprint’s verified GitHub Pages deployment", () => {
    const scopeSprintCaseStudy = homeSource.match(/index: "03", name: "ScopeSprint"[\s\S]*?code: "https:\/\/github\.com\/khalidhasan-m\/scope-sprint"/);

    expect(scopeSprintCaseStudy?.[0]).toContain('live: "https://khalidhasan-m.github.io/scope-sprint/"');
  });

  it("keeps the documented case-study routes available for the strongest projects", () => {
    expect(caseStudies.map((caseStudy) => caseStudy.slug)).toEqual(["route-form", "signal-desk", "pawfect-match"]);
    expect(homeSource).toContain('caseStudy: "/work/route-form"');
    expect(homeSource).toContain('caseStudy: "/work/signal-desk"');
    expect(homeSource).toContain('caseStudy: "/work/pawfect-match"');
  });

  it("keeps the contact intake guidance and message counter available", () => {
    expect(contactSource).toContain("WHAT HAPPENS NEXT");
    expect(contactSource).toContain("5,000 characters");
  });

  it("includes social-sharing and crawl metadata without assuming a custom domain", () => {
    expect(documentHead).toContain('name="robots" content="index, follow"');
    expect(documentHead).toContain('property="og:title"');
    expect(documentHead).toContain('name="twitter:card" content="summary_large_image"');
    expect(documentHead).not.toContain('rel="canonical"');
  });
});
