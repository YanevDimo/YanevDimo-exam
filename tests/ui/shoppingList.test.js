const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
    await page.goto('https://yanevdimo-exam.onrender.com/anevdimo-exam.onrender.com//shopping-list');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  