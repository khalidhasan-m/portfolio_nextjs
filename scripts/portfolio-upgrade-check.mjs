import { chromium } from "playwright";

const baseUrl = process.env.PORTFOLIO_URL || "http://localhost:3000";
const browser = await chromium.launch({ headless: true, executablePath: "/usr/bin/chromium" });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

await page.goto(baseUrl, { waitUntil: "networkidle" });
await page.waitForSelector(".work-group-featured");

const featuredCount = await page.locator(".work-group-featured .project-card").count();
const supportingCount = await page.locator(".work-group-supporting .project-card").count();
const routeFormCaseStudyLink = await page.locator('a[href="/work/route-form"]').count();
if (featuredCount !== 3 || supportingCount !== 3 || routeFormCaseStudyLink < 1) {
  throw new Error(`Unexpected work hierarchy: featured=${featuredCount}, supporting=${supportingCount}, RouteForm links=${routeFormCaseStudyLink}`);
}

const message = "I need a clearer project path and would like to discuss the current state.";
await page.locator('textarea[name="message"]').fill(message);
const counter = await page.locator(".contact-char-count").textContent();
if (!counter?.includes(`${message.length} / 5,000 characters`)) {
  throw new Error(`Character counter did not update: ${counter}`);
}

await page.goto(`${baseUrl}/work/route-form`, { waitUntil: "networkidle" });
const caseStudyHeading = await page.locator("h1").textContent();
if (!caseStudyHeading?.includes("RouteForm")) throw new Error("RouteForm case study did not render.");
if (await page.locator(".case-study-evidence li").count() < 4) throw new Error("Case-study evidence plate is incomplete.");

await page.setViewportSize({ width: 390, height: 844 });
await page.goto(baseUrl, { waitUntil: "networkidle" });
const railBorder = await page.locator(".work-section").evaluate((element) => getComputedStyle(element).borderLeftWidth);
if (railBorder !== "3px") throw new Error(`Mobile editorial rail was not applied: ${railBorder}`);

await browser.close();
console.log("Portfolio upgrade browser checks passed.");
