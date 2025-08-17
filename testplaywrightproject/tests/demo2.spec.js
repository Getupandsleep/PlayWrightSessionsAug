const{test, expect} = require('@playwright/test');

test('Assert Values', async ({page}) => {
    expect(200).toBe(200)
})

test('Assert Decimals', async ({ page }) => {
    expect(17.5)toBe(17.5)
})

test('Assert contains', async ({ page }){
    expect('SG Software is an IT hub').toConatain(hub)
})

test('Assert true', async ({ page }) => {
    expect('SG Software is an IT hub'.includes('IT')).toBeTruthy()
})

test('Assert True 1', async ({ page }) => {
    expect(200).toBeGreaterThan(250)
})