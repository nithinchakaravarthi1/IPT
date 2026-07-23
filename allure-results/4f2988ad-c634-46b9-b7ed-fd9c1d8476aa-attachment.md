# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: firstClass.spec.js >> Mouse Action
- Location: tests\firstClass.spec.js:272:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.amazon.in/", waiting until "load"

```

# Test source

```ts
  173 |         {
  174 |         headless:true, 
  175 |         channel:'chrome'
  176 |         });
  177 |         const context = await browser.newContext({
  178 |             recordVideo:{
  179 |                 dir:'D:\\Playwright Automation Course\\PlayWright\\test-results' //paste the path amd change single \ to double \\
  180 |             }
  181 |         });
  182 |         const page1 = await context.newPage();
  183 |         await page1.goto('https://www.amazon.in/');
  184 |         await page1.waitForTimeout(5000);  
  185 |         
  186 | //               const context = await browser.newContext({
  187 | //             recordVideo:{
  188 | //                 dir:'D:\\Playwright Automation Course\\PlayWright\\test-results' //paste the path amd change single \ to double \\
  189 | //             }
  190 | //         });
  191 | //         const page1 = await context.newPage();
  192 | //         await page1.goto('https://www.amazon.in/');
  193 | //         await page1.waitForTimeout(5000);    
  194 | // });
  195 | });
  196 | 
  197 | test('To upload a file', async({page}) =>{
  198 |     await page.goto('https://practice.expandtesting.com/upload',{waitUntil:'domcontentloaded'});
  199 |     await page.setInputFiles('#fileInput','D:\\Playwright Automation Course\\PlayWright\\File.png'); //to upload the file
  200 |     await page.waitForTimeout(5000);    
  201 | });
  202 | 
  203 | test('To download a file and save the file', async({page}) =>{
  204 |     await page.goto('https://demoqa.com/upload-download');
  205 |     const [nithin] = await Promise.all([
  206 |         page.waitForEvent("download"), // wait for download to start
  207 |         page.click('#downloadButton'),
  208 |     ])
  209 |     await nithin.saveAs('D:\\Playwright Automation Course\\PlayWright\\newpicture.jpeg'); 
  210 |     // to save the file in the mentioned path file name we have to mention here which is newpicture.jpeg
  211 | });
  212 | 
  213 | test('To handle new window if i select a product', async({browser}) =>{
  214 |     const context = await browser.newContext();
  215 |     const page = await context.newPage();
  216 |     await page.goto('https://www.amazon.in/');
  217 |     await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone');
  218 |     await page.locator('//input[@id="nav-search-submit-button"]').click();
  219 |     await page.waitForTimeout(5000);
  220 | 
  221 |     const [product_page] = await Promise.all([
  222 |         context.waitForEvent('page'),
  223 |         page.locator("//*[@aria-label='Sponsored Ad - iPhone 17e 512 GB: 15.40 cm (6.1″) Super Retina XDR Display, A19 Chip, All-Day Battery Life, 48MP Fusion Camera, 256GB Starting Storage; White']").click(),
  224 |     ]);
  225 |     await product_page.waitForLoadState('domcontentloaded');
  226 |     await product_page.locator('//div[@id="desktop_qualifiedBuyBox"]/descendant::span[@class="a-button-inner"]/input[@id="add-to-cart-button"]').click();
  227 |     await product_page.waitForTimeout(5000);
  228 |     // await product_page.close(); //will close the product_page and switch back to main page
  229 |     await page.bringToFront(); //will switch back to main page and To switch back to product_page we have to use page.bringToFront() method
  230 | })
  231 | 
  232 | test('Testing flipkart using HOVER to signup and login, request OTP', async({page}) =>{
  233 |     await page.goto('https://www.flipkart.com/');
  234 |     await page.locator('//span[@role="button"]').click();
  235 |     await page.locator('//div[@data-id="stickyElement"]/descendant::header/descendant::a[@title="Login"]').hover();
  236 |     await page.waitForTimeout(5000);
  237 |     await page.locator('//a[@title="Sign Up"]/child::span[contains(text(),"Sign Up")]').click();
  238 |     await page.waitForTimeout(5000);
  239 |     await page.locator('//input[@maxlength="10"]').fill('9566422820');
  240 |     await page.locator('//button[@type="submit"]/descendant::span').click();
  241 |     await page.waitForTimeout(5000);
  242 | })
  243 | 
  244 | // test.only('Frame Handling',async({page}) =>{
  245 | 
  246 | // })
  247 | 
  248 | test('Testing Drag and Drop functionality with frame', async({page}) =>{
  249 |     await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');
  250 |     const frame = await page.frameLocator('(//iframe[@class="demo-frame"])[1]')
  251 |     await frame.locator('//ul[@id="gallery"]/li[1]').dragTo(frame.locator('//div[@id="trash"]'));
  252 | //     await page.locator('//ul[@id="gallery"]/li[1]').dragTo(page.locator+('//div[@id="trash"]'));
  253 |     await page.waitForTimeout(5000);
  254 | });
  255 | 
  256 | test('keyboard Action', async({page}) =>{
  257 |     await page.goto('https://www.amazon.in/');
  258 |     // await page.getByRole('searchbox').fill('laptop');
  259 |     // await page.getByRole('searchbox').fill('iphone'); // From above if i give fill() again, it will delete the existing and fill the new
  260 |     // await page.getByRole('searchbox').type('iphone',{delay:1000});
  261 |     // await page.getByRole('searchbox').type('iphone',{delay:1000}); // From above if i give type() again, it will add with existing text
  262 |     await page.keyboard.press('Control+A'); // Select all text
  263 |     await page.waitForTimeout(3000);
  264 |     await page.keyboard.press('Control+X'); // Cut all text
  265 |     await page.waitForTimeout(3000);
  266 |     await page.keyboard.press('Control+V'); // Paste all text co
  267 |     await page.waitForTimeout(3000);
  268 |     await page.keyboard.press('Enter');
  269 |     await page.waitForTimeout(3000);
  270 | });
  271 | 
  272 | test.only('Mouse Action', async({page}) =>{
> 273 |     await page.goto('https://www.amazon.in/');
      |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  274 |     await page.getByAltText('Hello, sign in').hover();
  275 |     await page.waitForTimeout(3000);
  276 | })
```