import { chromium } from "playwright";

const responseBody = JSON.stringify([{ result: { data: { json: { accepted: true, notified: true } } } }]);

async function completeInquiry(page) {
  await page.route("**/api/trpc/contact.submit**", (route) => route.fulfill({ status: 200, contentType: "application/json", body: responseBody }));
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.locator('input[name="name"]').fill("Success State Check");
  await page.locator('input[name="email"]').fill("success-check@example.com");
  await page.locator('textarea[name="message"]').fill("This controlled browser check validates the portfolio form success state without storing another inquiry.");
  await page.locator(".contact-submit").click();
  await page.waitForSelector(".contact-success", { timeout: 10_000 });
}

const browser = await chromium.launch({ executablePath: "/usr/bin/chromium", headless: true, args: ["--no-sandbox", "--disable-gpu"] });

const standardContext = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const standardPage = await standardContext.newPage();
await completeInquiry(standardPage);
const standard = await standardPage.evaluate(() => ({
  successVisible: Boolean(document.querySelector(".contact-success")),
  checkAnimation: getComputedStyle(document.querySelector(".success-mark path")).animationName,
}));
await standardPage.locator(".success-reset").click();
await standardPage.waitForSelector("form.contact-form", { timeout: 5_000 });
const reset = await standardPage.evaluate(() => ({
  successRemoved: !document.querySelector(".contact-success"),
  nameEmpty: document.querySelector('input[name="name"]').value === "",
  emailEmpty: document.querySelector('input[name="email"]').value === "",
  messageEmpty: document.querySelector('textarea[name="message"]').value === "",
}));

const reducedContext = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1280, height: 900 } });
const reducedPage = await reducedContext.newPage();
await completeInquiry(reducedPage);
const reduced = await reducedPage.evaluate(() => ({
  prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  checkAnimation: getComputedStyle(document.querySelector(".success-mark path")).animationName,
  strokeOffset: getComputedStyle(document.querySelector(".success-mark path")).strokeDashoffset,
}));

await browser.close();

if (!standard.successVisible || standard.checkAnimation !== "success-draw" || !reset.successRemoved || !reset.nameEmpty || !reset.emailEmpty || !reset.messageEmpty || !reduced.prefersReducedMotion || reduced.checkAnimation !== "none" || reduced.strokeOffset !== "0px") {
  throw new Error(`Contact success check failed: ${JSON.stringify({ standard, reset, reduced })}`);
}

console.log(JSON.stringify({ standard, reset, reduced }));
