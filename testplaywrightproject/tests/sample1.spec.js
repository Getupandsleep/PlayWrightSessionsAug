const { test, expect } = require('@playwright/test')

test('Navigate URL of the Application', async ({ page }) => {
    await page.goto("https://www.w3schools.com/")

    const title = await page.title()
    console.log("Title :" + title);

    const url = await page.url()
    console.log("URL of Application :" + url);


})