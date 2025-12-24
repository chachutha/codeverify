const {test,expect} =require('@playwright/test')

test('delete',async ({page})=>{

    /*await page.goto('https://www.facebook.com/r.php?entry_point=login')

    await page.locator("//label[normalize-space()='Female']").check()




   // await page.locator("//label[normalize-space()='Male']").check()

    const sol=await page.locator("//label[normalize-space()='Female']")

   await expect(sol).toBeChecked()

    await expect(sol.isChecked).toBeTruthy()*/

      await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("//input[@id='Wikipedia1_wikipedia-search-input']").fill('javascript')

    await page.locator("//input[@type='submit']").click()

    await page.waitForTimeout(5000);
    
})