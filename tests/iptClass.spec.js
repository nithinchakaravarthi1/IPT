import{test} from '@playwright/test';
test('Myntra kids t-shirt', async({page}) =>{
    await page.goto('https://www.myntra.com/boy-tshirts');
    const productCount = await page.locator('//li[@class="product-base"]');
    const finalCount = await productCount.count();
    console.log('Total number of product:',finalCount)
});
test('find the product less than 199', async({page})=>{
    await page.goto('https://www.myntra.com/boy-tshirts');
    const product_price = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice"]').all();
    let minPrice = Infinity;
    for (let i = 0; i < product_price.length; i++) {
        const price = await product_price[i].textContent();
        const finalPrice = parseInt(price.replace('Rs.', '').replace(',', ''));
        if (finalPrice < minPrice) {
            minPrice = finalPrice;
        }
    }
    console.log('Minimum Price:', minPrice);
});

test('find products least price and its product', async ({ page }) => {
    await page.goto('https://www.myntra.com/boy-tshirts');
    const product_price = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice"]').all();
    const product_name = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-productMetaInfo"]/h3[@class="product-brand"]').all();
    let minPrice = Infinity;
    let minProduct = '';
    for (let i = 0; i < product_price.length; i++) {
        const priceText = await product_price[i].textContent();
        const price = parseInt(priceText.replace('Rs.', '').replace(',', ''));
        const name = await product_name[i].textContent();
        if (price < minPrice) {
            minPrice = price;
            minProduct = name;
        }
    }
    console.log('Minimum Price:', minPrice);
    console.log('Product Name:', minProduct);
});
//(//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" and contains(.,'195')]/ancestor::div[@class="product-productMetaInfo"]/h3)

//CORRECT XPATH FOR PRODUCT NAME WITH PRICE 195:
//(//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" and (text()='195')]/ancestor::div[@class="product-productMetaInfo"]/h3)
//LONG METHOD:
//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice"] | //li[@class="product-base"]/descendant::div[@class="product-price"][not(.//span[@class="product-discountedPrice"])]
//SIMPLE METHOD:
//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[(text() and not (@class)) or (@class="product-discountedPrice")]


test('In search Yahoo locate 4th trending topic', async ({ page }) => {
  await page.goto('https://in.search.yahoo.com/');
  let ele = page.locator('//span[text()="Trending now"]/ancestor::li[@class="last"]/descendant::a[4]');
  await ele.evaluate(e => e.textContent = 'nithin');
  await page.waitForTimeout(5000);
  console.log(await ele.textContent());
});

test('select the 4th topic', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.locator('//textarea[@aria-label="Search"]').fill('India');
    const suggestedtopic = await page.locator('//textarea[@aria-label="Search"]/ancestor::form[@action="/search"]/descendant::ul[@role="listbox"]/li[4]');
    await suggestedtopic.click();
    await page.waitForTimeout(7000);
});

test('select login for flipcard',async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
    await page.locator('//span[@role="button"]').click();
    await page.locator('//div[@data-id="stickyElement"]/descendant::a[text()="Login"]').click();
    await page.waitForTimeout(7000);
});

test.only('IPL CSK point print', async ({ page }) => {
    await page.goto('https://www.iplt20.com/matches/points-table');
    const cskPoints = await page.locator('//div[@class="points-table-page"]/descendant::tbody[@id="pointsdata"]/descendant::h2[contains(text(),"RCB")]/ancestor::tr[@ng-repeat="list in pointsTableData"]/descendant::td[@class="bt ng-binding"]').textContent();
    console.log('CSK Points:', cskPoints);
    await page.waitForTimeout(5000);
});



