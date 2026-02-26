import { test, expect } from '@playwright/test';

test('getting the live exchange rate', async ({ page }) => {
  await page.goto('https://quality-engineering-labs.vercel.app/');
  await page.getByTestId('fetch-rate-btn').click();
  await expect(page.getByTestId('exchange-rate')).toBeVisible();

});