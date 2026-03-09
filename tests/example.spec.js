// @ts-check
import { test, expect } from '@playwright/test';

test.use({
  viewport: { width: 1280, height: 720 },
  baseURL: 'https://www.automationpratice.com.br/',
  trace: 'retain-on-failure',
});

test.beforeEach(async ({ page }) => { 
  await page.goto('/');
});

test('Login com Sucesso @login', async ({ page }) => {
  const button = await page.getByRole('button', { name: 'Send Mail' });
  await button.scrollIntoViewIfNeeded();
  await button.click();

  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('gustavo@teste.com.br');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.screenshot({ path: 'evidencias/preencherCamposLogin.png' });
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  
});

test('Login com Sucesso 2', async ({ page }) => {
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('gustavo@teste.com.br');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.screenshot({ path: 'evidencias/preencherCamposLogin.png' });
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  
});
