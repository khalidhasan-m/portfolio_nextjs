import { chromium } from "playwright";

const browser = await chromium.launch({ executablePath: "/usr/bin/chromium", headless: true, args: ["--no-sandbox", "--disable-gpu"] });

const standardContext = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const standardPage = await standardContext.newPage();
await standardPage.goto("http://localhost:3000", { waitUntil: "networkidle" });
const nameField = standardPage.locator('input[name="name"]');
await nameField.hover();
await standardPage.waitForTimeout(220);
const hover = await nameField.evaluate((element) => ({ background: getComputedStyle(element).backgroundColor, border: getComputedStyle(element).borderColor }));
await nameField.focus();
const focus = await nameField.evaluate((element) => ({ visible: element.matches(":focus-visible"), outlineStyle: getComputedStyle(element).outlineStyle, outlineColor: getComputedStyle(element).outlineColor }));
await nameField.fill("A");
await nameField.blur();
await nameField.focus();
const invalidFocus = await nameField.evaluate((element) => ({ outlineColor: getComputedStyle(element).outlineColor, invalid: element.getAttribute("aria-invalid") }));

const reducedContext = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1280, height: 900 } });
const reducedPage = await reducedContext.newPage();
await reducedPage.goto("http://localhost:3000", { waitUntil: "networkidle" });
const reduced = await reducedPage.locator('input[name="name"]').evaluate((element) => ({ prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches, transitionDuration: getComputedStyle(element).transitionDuration }));

await browser.close();

if (hover.background !== "rgb(255, 240, 230)" || !focus.visible || focus.outlineStyle !== "solid" || focus.outlineColor !== "rgb(255, 77, 46)" || invalidFocus.outlineColor !== "rgb(138, 38, 32)" || invalidFocus.invalid !== "true" || !reduced.prefersReducedMotion || reduced.transitionDuration !== "0s") {
  throw new Error(`Contact field interaction check failed: ${JSON.stringify({ hover, focus, invalidFocus, reduced })}`);
}

console.log(JSON.stringify({ hover, focus, invalidFocus, reduced }));
