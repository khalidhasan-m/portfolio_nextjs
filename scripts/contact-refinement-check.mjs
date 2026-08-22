import { chromium } from "playwright";

const successResponse = JSON.stringify([{ result: { data: { json: { accepted: true, notified: true } } } }]);

async function setupPage(context) {
  const page = await context.newPage();
  let releaseSubmission;
  const submissionGate = new Promise((resolve) => { releaseSubmission = resolve; });
  await page.route("**/api/trpc/contact.submit**", async (route) => {
    await submissionGate;
    await route.fulfill({ status: 200, contentType: "application/json", body: successResponse });
  });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  return { page, releaseSubmission };
}

async function fillValidInquiry(page) {
  await page.locator('input[name="name"]').fill("Refinement Check");
  await page.locator('input[name="email"]').fill("refinement-check@example.com");
  await page.locator('textarea[name="message"]').fill("This controlled check validates inline guidance, the privacy reassurance, and the polished loading state.");
}

const browser = await chromium.launch({ executablePath: "/usr/bin/chromium", headless: true, args: ["--no-sandbox", "--disable-gpu"] });

const standardContext = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const { page: standardPage, releaseSubmission: releaseStandard } = await setupPage(standardContext);
await standardPage.locator('input[name="name"]').fill("A");
await standardPage.locator('input[name="name"]').blur();
await standardPage.locator('input[name="email"]').fill("not-an-email");
await standardPage.locator('input[name="email"]').blur();
await standardPage.locator('textarea[name="message"]').fill("Too short");
await standardPage.locator('textarea[name="message"]').blur();
const inline = await standardPage.evaluate(() => ({
  errors: Array.from(document.querySelectorAll(".field-error")).map((node) => node.textContent?.trim()),
  invalidFields: document.querySelectorAll(".contact-field.is-invalid").length,
  privacy: document.querySelector(".contact-privacy")?.textContent?.trim(),
}));
await fillValidInquiry(standardPage);
await standardPage.locator(".contact-submit").click();
await standardPage.waitForSelector(".submit-spinner", { timeout: 5_000 });
const loading = await standardPage.evaluate(() => ({
  busy: document.querySelector(".contact-submit")?.getAttribute("aria-busy"),
  spinnerAnimation: getComputedStyle(document.querySelector(".submit-spinner")).animationName,
}));
releaseStandard();
await standardPage.waitForSelector(".contact-success", { timeout: 5_000 });

const reducedContext = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1280, height: 900 } });
const { page: reducedPage, releaseSubmission: releaseReduced } = await setupPage(reducedContext);
await fillValidInquiry(reducedPage);
await reducedPage.locator(".contact-submit").click();
await reducedPage.waitForSelector(".submit-spinner", { timeout: 5_000 });
const reduced = await reducedPage.evaluate(() => ({
  prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  spinnerAnimation: getComputedStyle(document.querySelector(".submit-spinner")).animationName,
}));
releaseReduced();
await reducedPage.waitForSelector(".contact-success", { timeout: 5_000 });

await browser.close();

const expectedErrors = ["Please enter at least two characters.", "Enter a valid email address.", "Share at least 20 characters so Khalid has useful context."];
if (inline.invalidFields !== 3 || expectedErrors.some((message) => !inline.errors.includes(message)) || !inline.privacy?.includes("details stay private") || loading.busy !== "true" || loading.spinnerAnimation !== "submit-spin" || !reduced.prefersReducedMotion || reduced.spinnerAnimation !== "none") {
  throw new Error(`Contact refinement check failed: ${JSON.stringify({ inline, loading, reduced })}`);
}

console.log(JSON.stringify({ inline, loading, reduced }));
