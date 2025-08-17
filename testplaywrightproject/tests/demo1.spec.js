const{test, expect} = require('@playwright/test')

test('Run Demo Tests', async function display({ page }) {
    console.log('Test Suceessful');
})

test.skip('Run Anonymous', async function ({ }) {
    console.log('Test anonymous');
})

test('Run headless', async ({ }) => {
    console.log('Test Arrow function');
})

test('Run Tests for skip', async ({ }) => {
    console.log('Run Run Milkha');
})

test.only('Run Tests for skip 1', async ({ }) => {
    console.log('Run Run Tests Milkha Singh')
})