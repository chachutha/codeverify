import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://happybetplay.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('ssc7485');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('123123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('ssc7486');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('ACCEPT').click();
});