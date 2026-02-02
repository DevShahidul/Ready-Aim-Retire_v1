import { test, expect } from '@playwright/test';

test('financial-literacy page loads and renders correctly', async ({ page }) => {
  await page.goto('/financial-literacy');

  // Wait for page to fully load
  await page.waitForLoadState('networkidle');

  // Verify page title
  await expect(page).toHaveTitle(/Financial Literacy/);

  // Verify main heading exists
  const mainHeading = page.locator('.fl-hero h1');
  await expect(mainHeading).toContainText('Our Commitment to Financial Literacy');

  // Verify key sections exist
  await expect(page.locator('.fl-hero')).toBeVisible();
  await expect(page.locator('.fl-matters-section')).toBeVisible();
  await expect(page.locator('.fl-cards-section').first()).toBeVisible();
  await expect(page.locator('.fl-join-section')).toBeVisible();

  // Verify "Why Financial Literacy Matters" section
  await expect(page.locator('text=Why Financial Literacy')).toBeVisible();
  await expect(page.locator('text=Knowledge changes outcomes')).toBeVisible();

  // Verify cards are present
  await expect(page.locator('text=Supporting Operation HOPE')).toBeVisible();
  await expect(page.locator('text=Free Pro Access for Students')).toBeVisible();
  await expect(page.locator('text=Built with Respect - and Responsibility')).toBeVisible();
  await expect(page.locator('text=Looking Ahead')).toBeVisible();

  // Verify Join Us section
  await expect(page.locator('text=Join Us')).toBeVisible();
  await expect(page.locator('text=Start Planning for Free')).toBeVisible();

  // Verify soccer image is present
  const soccerImage = page.locator('img[alt*="soccer"]');
  await expect(soccerImage).toBeVisible();

  // Take full page screenshot for visual verification
  await page.screenshot({
    path: 'tests/screenshots/financial-literacy-full.png',
    fullPage: true
  });
});

test('financial-literacy page has correct styling', async ({ page }) => {
  await page.goto('/financial-literacy');
  await page.waitForLoadState('networkidle');

  // Check teal color is used in "Matters" text
  const mattersSpan = page.locator('.text-teal');
  await expect(mattersSpan).toBeVisible();

  // Verify teal card headers
  const cardHeaders = page.locator('.fl-card-header');
  const headerCount = await cardHeaders.count();
  expect(headerCount).toBe(4);

  // Check CTA banner exists
  await expect(page.locator('.cta-banner')).toBeVisible();
});
