import { test, expect } from '@playwright/test';

test('homepage detailed screenshots', async ({ page }) => {
  await page.setViewportSize({ width: 1400, height: 900 });
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1500);

  // Scroll through page to trigger animations
  await page.evaluate(async () => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    for (let y = 0; y < document.body.scrollHeight; y += 500) {
      window.scrollTo(0, y);
      await delay(150);
    }
    window.scrollTo(0, 0);
    await delay(300);
  });

  // Hero section
  await page.locator('.hero').screenshot({ path: 'tests/screenshots/hp-hero.png' });

  // OnTarget section
  await page.locator('.ontarget-section').screenshot({ path: 'tests/screenshots/hp-ontarget.png' });

  // Complete system section
  await page.locator('.complete-system-section').screenshot({ path: 'tests/screenshots/hp-complete.png' });

  // Scroll to feature sections
  await page.evaluate(() => window.scrollTo(0, 1500));
  await page.waitForTimeout(500);

  // Feature 1 - Unlimited scenarios
  await page.locator('#features').screenshot({ path: 'tests/screenshots/hp-feature1.png' });

  // Clearer plan section
  await page.locator('.clearer-plan-section-v2').screenshot({ path: 'tests/screenshots/hp-clearer.png' });
});
