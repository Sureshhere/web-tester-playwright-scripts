import { test, expect } from '@playwright/test';

test('navigate from Services to Client Work', async ({ page }) => {
  await test.step('Open the EPAM homepage', async () => {
    await page.goto('https://www.epam.com/');
    await expect(page).toHaveTitle(
      /EPAM \| Software Engineering & Product Development Services/i,
    );
  });

  await test.step('Select Services from the header menu', async () => {
    const servicesLink = page.getByRole('link', {
      name: 'Services',
      exact: true,
    }).first();

    await expect(servicesLink).toBeVisible();
    await servicesLink.click();

    await expect(page).toHaveURL(/\/services\/?$/);
  });

  await test.step('Open Explore Our Client Work', async () => {
    const clientWorkLink = page.getByRole('link', {
      name: 'Explore Our Client Work',
      exact: true,
    });

    await expect(clientWorkLink).toBeVisible();
    await clientWorkLink.click();

    await expect(page).toHaveURL(/\/services\/client-work\/?$/);
  });

  await test.step('Verify the Client Work heading', async () => {
    await expect(
      page.getByRole('heading', {
        name: 'Client Work',
        level: 1,
      }),
    ).toBeVisible();
  });
});