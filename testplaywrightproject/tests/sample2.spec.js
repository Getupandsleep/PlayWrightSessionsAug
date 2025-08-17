const { test, expect } = require('@playwright/test')

test('Navigate URL and Validate Test', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const title = await page.title()
    console.log("Title :" + title);

    const url = await page.url()
    console.log("URL of Application :" + url);

    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})