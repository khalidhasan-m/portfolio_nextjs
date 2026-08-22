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

const featuredCard = page.locator(".project-list-featured .project-card").first();
await featuredCard.scrollIntoViewIfNeeded();
const desktopBefore = await featuredCard.boundingBox();
await featuredCard.hover();
await page.waitForTimeout(280);
const desktopAfter = await featuredCard.boundingBox();
if (!desktopBefore || !desktopAfter || desktopAfter.y >= desktopBefore.y - 5) {
  throw new Error(`Featured desktop hover did not lift the card: before=${desktopBefore?.y}, after=${desktopAfter?.y}`);
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
const mobileCard = page.locator(".project-list-featured .project-card").first();
await mobileCard.scrollIntoViewIfNeeded();
const mobileBefore = await mobileCard.boundingBox();
await mobileCard.hover();
await page.waitForTimeout(280);
const mobileAfter = await mobileCard.boundingBox();
if (!mobileBefore || !mobileAfter || Math.abs(mobileAfter.y - mobileBefore.y) > 1) {
  throw new Error(`Featured mobile card should not lift: before=${mobileBefore?.y}, after=${mobileAfter?.y}`);
}

const reducedContext = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1280, height: 720 } });
const reducedPage = await reducedContext.newPage();
await reducedPage.goto(baseUrl, { waitUntil: "networkidle" });
const reducedCard = reducedPage.locator(".project-list-featured .project-card").first();
await reducedCard.scrollIntoViewIfNeeded();
const reducedBefore = await reducedCard.boundingBox();
await reducedCard.hover();
await reducedPage.waitForTimeout(280);
const reducedAfter = await reducedCard.boundingBox();
if (!reducedBefore || !reducedAfter || Math.abs(reducedAfter.y - reducedBefore.y) > 1) {
  throw new Error(`Featured reduced-motion card should not lift: before=${reducedBefore?.y}, after=${reducedAfter?.y}`);
}
await reducedContext.close();

await browser.close();
console.log("Portfolio upgrade browser checks passed.");
