import { chromium } from "playwright";

const browser = await chromium.launch({
  executablePath: "/usr/bin/chromium",
  headless: true,
  args: ["--no-sandbox", "--disable-gpu"],
});

const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1280, height: 900 } });
const page = await context.newPage();
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForSelector(".project-card", { timeout: 15_000 });

const result = await page.evaluate(() => {
  const card = document.querySelector(".project-card");
  if (!card) throw new Error("Project card not found");
  const before = getComputedStyle(card).transform;
  card.dispatchEvent(new PointerEvent("pointermove", { bubbles: true, pointerType: "mouse", clientX: 280, clientY: 240 }));
  const after = getComputedStyle(card).transform;
  return {
    prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    before,
    after,
  };
});

await browser.close();

if (!result.prefersReducedMotion || result.before !== "none" || result.after !== "none") {
  throw new Error(`Reduced-motion check failed: ${JSON.stringify(result)}`);
}

console.log(JSON.stringify(result));
