import { test, expect } from '@playwright/test';

test('testing to sign in', async ({ page }) => {
  await page.goto('https://quality-engineering-labs.vercel.app/');
  await page.getByLabel('Main navigation').getByRole('link', { name: 'Login' }).click();
  await page.getByTestId('login-username').click();
  await page.getByTestId('login-username').fill('khumbelo@example.com');
  await page.getByTestId('login-password').click();
  await page.getByTestId('login-password').fill('password@123');
  await page.getByTestId('remember-me').check();
  await page.getByTestId('login-submit').click();
   await expect(page).toHaveURL(/dashboard/); 
});
