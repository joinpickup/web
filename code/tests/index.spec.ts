import { test, expect } from '@playwright/test';

test("index has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveTitle("Pickup, LLC");
});