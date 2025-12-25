const {test,expect} = require('@playwright/test')

test('ato', async ({page})=>{


    await page.locator('https://www.fancode.com/')

    await page.waitForTimeout(4000)
})