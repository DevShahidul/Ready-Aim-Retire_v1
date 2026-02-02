import { test, expect } from '@playwright/test';

test('homepage with scroll', async ({ page }) => {
  await page.setViewportSize({ width: 1400, height: 900 });
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  // Wait for initial animations
  await page.waitForTimeout(1500);

  // Scroll through the page to trigger ScrollTrigger animations
  await page.evaluate(async () => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    const scrollStep = 500;
    const totalHeight = document.body.scrollHeight;

    for (let y = 0; y < totalHeight; y += scrollStep) {
      window.scrollTo(0, y);
      await delay(200);
    }

    // Scroll back to top
    window.scrollTo(0, 0);
    await delay(500);
  });

  // Take full page screenshot after scrolling
  await page.screenshot({
    path: 'tests/screenshots/homepage-scrolled.png',
    fullPage: true
  });
});
