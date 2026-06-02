import { test, expect } from '@playwright/test';

test.describe('Paket Detail Pages', () => {
  test('Digitale Rezeption page renders all sections', async ({ page }) => {
    await page.goto('/pakete/digitale-rezeption', { waitUntil: 'networkidle' });
    await expect(page.getByRole('heading', { name: 'Digitale Rezeption', level: 1 })).toBeVisible({ timeout: 15000 });
    await expect(page.getByText('Was steckt dahinter?')).toBeVisible();
    await expect(page.getByText('Ablauf')).toBeVisible();
    await expect(page.getByText('Wer profitiert davon?')).toBeVisible();
    await expect(page.getByText('Beispiel')).toBeVisible();
    await expect(page.getByText('Frau Weber ruft um 22:47 Uhr an.')).toBeVisible();
    await expect(page.getByText('Häufige Fragen.').first()).toBeVisible();
    await expect(page.getByText('390 €').first()).toBeVisible();
  });

  test('Workflow-Automation page renders all sections', async ({ page }) => {
    await page.goto('/pakete/workflow-automation');
    await expect(page.getByRole('heading', { name: 'Workflow-Automation', level: 1 })).toBeVisible();
    await expect(page.getByText('Eine Schadenmeldung. Kein manueller Aufwand.')).toBeVisible();
    await expect(page.getByText('ab 2.500 €').first()).toBeVisible();
  });

  test('unknown slug returns 404', async ({ page }) => {
    const response = await page.goto('/pakete/unbekannt');
    expect(response?.status()).toBe(404);
  });

  test('Pakete cards on main page show correct CTAs', async ({ page }) => {
    await page.goto('/');
    const digitaleLink = page.getByRole('link', { name: /Mehr erfahren/i }).first();
    await expect(digitaleLink).toHaveAttribute('href', '/pakete/digitale-rezeption');
  });

  test('Breadcrumb links back to main page pakete section', async ({ page }) => {
    await page.goto('/pakete/digitale-rezeption');
    const breadcrumb = page.locator('.pd-breadcrumb a');
    await expect(breadcrumb).toHaveAttribute('href', '/#pakete');
  });
});
