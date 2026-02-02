import { test, expect } from '@playwright/test';

test('homepage sections screenshots', async ({ page }) => {
  await page.setViewportSize({ width: 1400, height: 900 });
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);

  // Take screenshot of OnTarget section
  const ontarget = page.locator('.ontarget-section');
  if (await ontarget.count() > 0) {
    await ontarget.screenshot({ path: 'tests/screenshots/homepage-ontarget.png' });
  }

  // Take screenshot of Complete System section
  const completeSystem = page.locator('.complete-system-section');
  if (await completeSystem.count() > 0) {
    await completeSystem.screenshot({ path: 'tests/screenshots/homepage-complete-system.png' });
  }

  // Take screenshot of first feature section (Unlimited scenarios)
  const features = page.locator('#features');
  if (await features.count() > 0) {
    await features.screenshot({ path: 'tests/screenshots/homepage-feature1.png' });
  }

  // Take screenshot of clearer plan section
  const clearerPlan = page.locator('.clearer-plan-section-v2');
  if (await clearerPlan.count() > 0) {
    await clearerPlan.screenshot({ path: 'tests/screenshots/homepage-clearer-plan.png' });
  }
});
