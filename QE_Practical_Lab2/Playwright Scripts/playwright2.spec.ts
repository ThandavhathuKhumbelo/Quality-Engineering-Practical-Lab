import { test, expect } from '@playwright/test';

test('adding a new transaction', async ({ page }) => {
  await page.goto('https://quality-engineering-labs.vercel.app/');
  await page.getByLabel('Main navigation').getByRole('link', { name: 'Transactions' }).click();
  await page.getByRole('link', { name: 'Transactions' }).click();
  await page.getByTestId('txn-input').click();
  await page.getByTestId('txn-input').fill('play date');
  await page.getByTestId('txn-amount').click();
  await page.getByTestId('txn-amount').click();
  await page.getByTestId('txn-amount').fill('500');
  await page.getByTestId('txn-type').selectOption('expense');
  await page.getByTestId('add-txn-btn').click();
  await expect(page.getByText('play date')).toBeVisible();
  await expect(page.getByText('500')).toBeVisible();


});