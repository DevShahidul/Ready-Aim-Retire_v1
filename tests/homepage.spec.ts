import { test, expect } from '@playwright/test';

test('homepage screenshot', async ({ page }) => {
  // Set a wider viewport to ensure desktop layout
  await page.setViewportSize({ width: 1400, height: 900 });

  await page.goto('/');
  await page.waitForLoadState('networkidle');

  // Wait for animations to settle
  await page.waitForTimeout(1000);

  // Take full page screenshot
  await page.screenshot({
    path: 'tests/screenshots/homepage-full.png',
    fullPage: true
  });
});
