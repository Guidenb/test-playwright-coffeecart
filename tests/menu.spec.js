const {test ,expect} = require('@playwright/test');
const Mainmenu = require('../page/Mainmenu');
const { time } = require('node:console');

test('menu page with promotion', async ({ page }) => {
    const mainmenu = new Mainmenu(page);
    const testData = ['Espresso', 'Espresso_Macchiato', 'Cappuccino'];
    await page.goto('https://coffee-cart.app/');
    await mainmenu.clickmenu();

    for (const menu of testData){
    const item = mainmenu.clickselectmenu(menu);
    await item
    }

    await mainmenu.clickpromo();
    await expect (page).toHaveURL('https://coffee-cart.app/');
});

test('menu page but not promotion', async ({ page }) => {
    const mainmenu = new Mainmenu(page);
    const testData = ['Espresso', 'Espresso_Macchiato', 'Cappuccino'];
    await page.goto('https://coffee-cart.app/');
    await mainmenu.clickmenu();

    for (const menu of testData){
    const item = mainmenu.clickselectmenu(menu);
    await item
    }

    await mainmenu.clickskippromo();
    await expect (page).toHaveURL('https://coffee-cart.app/');
});