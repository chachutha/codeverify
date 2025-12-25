const {test,expect} = require('@playwright/test')

test('verify', async ({page})=>{

    await page.goto('https://www.naukri.com/')
    await page.locator('#login_Layer').click()
    await page.waitForTimeout(5000)

    await page.getByPlaceholder("Enter your active Email ID / Username").fill("sai.sravanth268@gmail.com")
    await page.getByPlaceholder("Enter your password").fill("Deekshit@12345")
    await page.locator("//button[normalize-space()='Login']").click()
    await page.waitForTimeout(5000)

    await page.locator("//a[normalize-space()='View profile']").click()
    console.log("RUN")
    
    await page.waitForTimeout(3000)

     //await page.getByRole('button', { name: 'Update resume' }).click();

     //await page.locator("//img[@class='user-img']").click()

     //await page.locator("#fileUpload").setInputFiles("C:\Users\saisr\OneDrive\Desktop\image.png")
     await page.waitForTimeout(3000)

     

     //await page.getByRole('button', { name: 'Update resume' }).setInputFiles('saisravant_Resume.docx');

    


   

    

})