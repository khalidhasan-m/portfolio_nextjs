import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { caseStudies } from "@/content/caseStudies";

const homeSource = readFileSync(fileURLToPath(new URL("./Home.tsx", import.meta.url)), "utf8");
const contactSource = readFileSync(fileURLToPath(new URL("./ContactForm.tsx", import.meta.url)), "utf8");
const documentHead = readFileSync(fileURLToPath(new URL("../../index.html", import.meta.url)), "utf8");
const caseStudySource = readFileSync(fileURLToPath(new URL("./CaseStudy.tsx", import.meta.url)), "utf8");
const publicAssetDir = fileURLToPath(new URL("../../public/assets/portfolio/", import.meta.url));
const expectedPublicAssets = [
  "khalid-masterwork-prism-logo.webp",
  "km-folded-prism-mark.webp",
  "khalid-profile.jpg",
  "masterwork-hero-prism.webp",
  "masterwork-expertise-orbit.webp",
  "masterwork-case-study-plane.webp",
  "route-form-evidence.webp",
  "signal-desk-evidence.webp",
  "scopesprint-evidence.webp",
  "pawfectmatch-evidence.webp",
  "wanderlust-evidence.webp",
  "suncart-evidence.webp",
  "masterwork-tech-motion-optimized.mp4",
  "khalid-hasan-meskat-resume.pdf",
];

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

  it("keeps the featured interaction and technology motion layer present", () => {
    expect(homeSource).toContain('data-testid="featured-cursor-label"');
    expect(homeSource).toContain("/assets/portfolio/masterwork-tech-motion-optimized.mp4");
    expect(homeSource).toContain("prefers-reduced-motion: reduce");
  });

  it("uses deployment-safe public media URLs for active portfolio assets", () => {
    expect(homeSource).toContain("/assets/portfolio/");
    expect(contactSource).toContain("/assets/portfolio/");
    expect(caseStudies.every((caseStudy) => caseStudy.evidence.startsWith("/assets/portfolio/"))).toBe(true);
    expect(expectedPublicAssets.every((asset) => existsSync(`${publicAssetDir}/${asset}`))).toBe(true);
    expect(homeSource).not.toContain("/manus-storage/");
    expect(contactSource).not.toContain("/manus-storage/");
    expect(caseStudySource).not.toContain("/manus-storage/");
    expect(homeSource).not.toContain("files.manuscdn.com");
    expect(contactSource).not.toContain("files.manuscdn.com");
    expect(caseStudySource).not.toContain("files.manuscdn.com");
  });

  it("labels implementation counts as verified build signals rather than client outcomes", () => {
    expect(caseStudies.every((caseStudy) => caseStudy.buildSignals.length === 3)).toBe(true);
    expect(caseStudies.find((caseStudy) => caseStudy.slug === "route-form")?.buildSignals.map((signal) => signal.value)).toEqual(["3", "1", "LIVE"]);
    expect(caseStudies.find((caseStudy) => caseStudy.slug === "signal-desk")?.buildSignals.map((signal) => signal.value)).toEqual(["3", "4", "1"]);
    expect(caseStudies.find((caseStudy) => caseStudy.slug === "pawfect-match")?.buildSignals.map((signal) => signal.value)).toEqual(["2", "3", "1"]);
    expect(caseStudySource).toContain("OUTCOME METRICS");
    expect(caseStudySource).toContain("Pending verified project or client data");
  });
});
