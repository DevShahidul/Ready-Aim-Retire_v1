import { test, expect } from '@playwright/test';

test('about page screenshot', async ({ page }) => {
  // Set a wider viewport to ensure desktop layout
  await page.setViewportSize({ width: 1400, height: 900 });

  await page.goto('/about');
  await page.waitForLoadState('networkidle');

  // Take full page screenshot
  await page.screenshot({
    path: 'tests/screenshots/about-full.png',
    fullPage: true
  });

  // Take hero section screenshot
  const hero = page.locator('.hero-section');
  await hero.screenshot({
    path: 'tests/screenshots/about-hero.png'
  });

  // Take story section screenshot
  const story = page.locator('.story-section');
  await story.screenshot({
    path: 'tests/screenshots/about-story.png'
  });

  // Take founders section screenshot
  const founders = page.locator('.section-gray').first();
  await founders.screenshot({
    path: 'tests/screenshots/about-founders.png'
  });

  // Take columns section screenshot
  const columns = page.locator('.columns-section');
  await columns.screenshot({
    path: 'tests/screenshots/about-columns.png'
  });
});
