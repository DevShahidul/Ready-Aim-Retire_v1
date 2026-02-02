import { test, expect } from '@playwright/test';

test('advisors page screenshot', async ({ page }) => {
  await page.goto('/advisors');
  await page.waitForLoadState('networkidle');

  // Take full page screenshot
  await page.screenshot({
    path: 'tests/screenshots/advisors-full.png',
    fullPage: true
  });

  // Take hero section screenshot
  const hero = page.locator('.adv-hero');
  await hero.screenshot({
    path: 'tests/screenshots/advisors-hero.png'
  });
});
