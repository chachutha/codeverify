const {test,expect}= require('@playwright/test')

test ('checkbox', async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

// multiple ways tos elect option from drop down

//await page.locator("#country").selectOption({label: 'India'}) // label, visible text
//await page.locator("#country").selectOption('India') // visible text
//await page.locator("#country").selectOption({value: 'uk'}) // by value
//await page.locator("#country").selectOption({index: '1'}) // by index

await page.selectOption("#country",'India') //by text

//const ter=await page.locator('select[id="country"] option')
//await expect(ter).toHaveCount(10)

// type of assertions we use on drop down

//1. check number of options in drop down - approach 1

const opi=await page.locator("#country option")
await expect(opi).toHaveCount(10)

//2. check no of options in drop down - approach 2

const y=await page.$$("#country option")
console.log("Number of options:", y.length)
await expect(y.length).toBe(10)

//3. check presence of options -approach 1
//const qw=await page.locator("#country").textContent()
//console.log("the texr content is:",qw )

//await expect(qw.includes('India')).toBeTruthy()

// check presence of options -approach 2 using loop

const browns=await page.$$("#country option")
let status=false;

for(const brown of browns)
{
    let value=await brown.textContent();

    if(value.includes('France'))
    {
        status=true;
        break;
    }
    //console.log(await brown.textContent())
}
expect(status).toBeTruthy()


await page.waitForTimeout(5000);


})