const{test, expect} = require('@playwright/test')

test('Login Actitime Application', async ({ page }) => {

    await page.goto("http://localhost/login.do")
    //   await page.waitForTimeout(3000)

    //enter value in userName text field
    await page.locator("//input[@id='username']").fill("admin")

    //Enter password in Password Text Field
    await page.locator("input[placeholder='Password']").fill("manager")

    //Click on Login button
    await page.locator("//div[normalize-space()='Login']").click()

    //Validation in Home Page
    await expect(page).toHaveURL("http://localhost/user/submit_tt.do")
    await expect(page).toHaveTitle("actiTIME -  Enter Time-Track")

    //   await page.waitForTimeout(4000)

    await page.locator("//div[@id='gettingStartedShortcutsPanelId']").click()
    await page.locator("//a[@id='logoutLink']").click()
    //Validation in Login Page
    await expect(page).toHaveURL("http://localhost/login.do")
    await expect(page).toHaveTitle("actiTIME - Login")
})


test(' Login and Logout Orange Source application', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)

    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.locator("input[placeholder='Password']").fill("admin123")
    await page.locator("//button[normalize-space()='Login']").click()
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page.waitForTimeout(3000)
    await page.getByAltText("profile picture").first().click()
    await page.locator("//a[normalize-space()='Logout']").click()
    await page.waitForTimeout(3000)

    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})