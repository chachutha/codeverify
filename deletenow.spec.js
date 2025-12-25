const {test,expect}= require('@playwright/test')

test('deletenow',async ({page})=>{

    await page.goto('https://happybetplay.com/login')

    const p=page.title()

    console.log("this is title", p)

    await expect(page).toHaveTitle('HappyBetPlay')

    const R=page.url()

    console.log("This is URL", R)

    await expect(page).toHaveURL("https://happybetplay.com/login")

    await page.getByPlaceholder("Enter Username").fill("ssc7486")

    await page.getByPlaceholder("Enter Password").fill("123123")
    
    

    await page.locator("#gtm-login_button").click()

    await page.waitForTimeout(3000)

    await page.locator(".rulesbuttonaccept").click()

    await page.locator("//span[@class='custom-select-trigger']").click()

    await page.locator("//div[@class='custom-options']//span[@class='custom-option undefined'][5]").click()

    await page.waitForTimeout(3000)

/*
    const links = await page.$$('a')
    for (const link of links)
    {
    const linktext= await link.textContent()
    console.log("Link text is", linktext)
    }
    await page.waitForTimeout(5000)

 const pros= await page.$$("//div[@class='spoerts-bx']")

 for (const pro of pros)

    {
const va=await pro.textContent()
console.log("no of products are :", va)
    }

 const pros= await page.$$("//div[@class='name-amount']")

 for (const pro of pros)

    {
const va=await pro.textContent()
console.log("name of products :", va)
    }
  
  await expect(page.getByText('ssc7486')).toBeVisible()*/

  

})