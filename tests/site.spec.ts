import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { sitePath } from '../src/lib/urls';
const testPath = (path: string) => sitePath(path, process.env.BASE_PATH || '/');
const routes = [
  '/',
  '/about',
  '/our-work',
  '/insights',
  '/events',
  '/get-involved',
  '/partnerships',
  '/contact',
  '/privacy',
  '/accessibility',
];
for (const width of [320, 390, 768, 1280, 1440]) {
  test(`responsive pages at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      const response = await page.goto(testPath(route));
      expect(response?.status()).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      if (
        [390, 1280].includes(width) &&
        ['/about', '/contact', '/partnerships'].includes(route)
      ) {
        await page.screenshot({
          path: `qa-artifacts/${route.slice(1)}-${width}.png`,
          fullPage: true,
        });
      }
    }
    await page.goto(testPath('/'));
    await page.screenshot({
      path: `qa-artifacts/home-${width}.png`,
      fullPage: true,
    });
  });
}
test('principal routes have no automated WCAG A/AA violations', async ({
  page,
}) => {
  for (const width of [390, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(testPath(route));
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .options({
          rules: { 'label-content-name-mismatch': { enabled: true } },
        })
        .analyze();
      expect(
        result.violations,
        `${route} at ${width}px: ${JSON.stringify(result.violations)}`,
      ).toEqual([]);
    }
  }
});
test('mobile menu supports keyboard and Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(testPath('/'));
  await page.keyboard.press('Tab');
  await expect(page.getByText('Skip to content')).toBeFocused();
  const toggle = page.locator('.mobile-menu summary');
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.mobile-menu')).toHaveAttribute('open', '');
  await page.keyboard.press('Tab');
  await expect(
    page
      .getByRole('navigation', { name: 'Mobile navigation' })
      .getByRole('link', { name: 'About', exact: true }),
  ).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.locator('.mobile-menu')).not.toHaveAttribute('open');
  await expect(toggle).toBeFocused();
});
test('menu and content work without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto(testPath('/'));
  await page.locator('.mobile-menu summary').click();
  await page
    .getByRole('navigation', { name: 'Mobile navigation' })
    .getByRole('link', { name: 'About', exact: true })
    .click();
  await expect(page).toHaveURL(/\/about/);
  await expect(page.locator('h1')).toBeVisible();
  await context.close();
});
test('inquiries are honestly unavailable and previews are not indexed', async ({
  page,
}) => {
  await page.goto(testPath('/contact'));
  await expect(
    page.getByText('Online inquiries are not available yet.', { exact: true }),
  ).toBeVisible();
  await expect(page.locator('form, input, textarea')).toHaveCount(0);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    'content',
    'noindex, nofollow',
  );
});
test('unknown routes show a helpful 404', async ({ page }) => {
  const response = await page.goto(testPath('/this-page-does-not-exist'));
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('link', { name: 'Back to Home' })).toBeVisible();
});
test('reduced motion, enlarged text and runtime errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(testPath('/'));
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe('auto');
  await page.addStyleTag({ content: 'html { font-size: 200%; }' });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  expect(errors).toEqual([]);
});
