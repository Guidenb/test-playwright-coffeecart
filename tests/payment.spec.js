// @ts-check
const{ test, expect } = require('@playwright/test');
const Mainmenu = require('../page/Mainmenu');
const Paymentdetail = require('../page/Paymentdetail');

test('payment with promotion', async ({ page }) => {
  const mainmenu = new Mainmenu(page);
  const payment = new Paymentdetail(page);

  const testData = ['Espresso', 'Espresso_Macchiato', 'Cappuccino'];
  await page.goto('https://coffee-cart.app/');
  await mainmenu.clickmenu();

  for (const menu of testData){
  const item = mainmenu.clickselectmenu(menu);
  await item
  }
  await mainmenu.clickpromo();

  //payment action
  await payment.ClickTotal();
  await page.waitForTimeout(500);
  await payment.Name('Naronglit');
  await page.waitForTimeout(500);
  await payment.Email('guide@example.com');
  await page.waitForTimeout(500);
  await payment.ClickSubmit();

  // Expect a title "to contain" a substring.
  
  await expect(payment.successmessage).toBeVisible();
  await expect(payment.successmessage).toContainText('Thanks');
  await page.waitForTimeout(1000);
});

test('payment without promotion', async ({ page }) => {
  const mainmenu = new Mainmenu(page);
  const payment = new Paymentdetail(page);

  const testData = ['Espresso', 'Espresso_Macchiato', 'Cappuccino'];
  await page.goto('https://coffee-cart.app/');
  await mainmenu.clickmenu();

  for (const menu of testData){
  const item = mainmenu.clickselectmenu(menu);
  await item
  }
  await mainmenu.clickskippromo();

  //payment action
  await payment.ClickTotal();
  await page.waitForTimeout(500);
  await payment.Name('Naronglit');
  await page.waitForTimeout(500);
  await payment.Email('guide@example.com');
  await page.waitForTimeout(500);
  await payment.ClickSubmit();

  // Expect a title "to contain" a substring.
  
  await expect(payment.successmessage).toBeVisible();
  await expect(payment.successmessage).toContainText('Thanks');
  await page.waitForTimeout(1000);
});

