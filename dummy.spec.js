const {test,expect}=require('@playwright/test')

test('recap bro pages', async ({page})=>{



await page.goto('https://www.amazon.in/s?k=flipkart&adgrpid=1326012633048780&hvadid=82876055231412&hvbmt=be&hvdev=c&hvlocphy=261814&hvnetw=o&hvqmt=e&hvtargid=kwd-82876681051014%3Aloc-90&hydadcr=15412_2338239&mcid=17b34daf6ece3007bf2f632e0be56074&msclkid=0310713b145816e8ac30180cf8fab323&tag=msndeskstdin-21&ref=pd_sl_8mpp1ql5l2_e')

await expect(page).toHaveTitle('Amazon.in : flipkart')



await page.locator("//a[normalize-space()='Sell on Amazon']").click()

await expect(page).toHaveTitle('Amazon.in: Selling on Amazon - Start Selling Now')

await page.waitForTimeout(3000)

})