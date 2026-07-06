import {expect, test, chromium} from '@playwright/test';
//{} blocks
//()parameter
//[] array
//async - its a function which handle the asynchronous operation
// await - its is keyword which will wait for the promise to resolve
//page - in bulit fixture which reperesent a tab
// headless - UI will not visible  or shown while executing  --faster
//headed - UI will be visible (-- headed) --slower
test('launching the url', async ({page}) => {
    await page.goto('https://www.facebook.com/');
    // await page.waitForTimeout(4000);

    // console.log(await page.title()); // to validate the title or switvh
    // console.log(await page.url()); //amazon.in to validate url while redirecting
    // // const pageTitle = await page.title()
    // // const pagUrl = await page.url()
    await page.goto('https://www.flipkart.com/');
    await page.goBack();
    await page.goForward();
    await page.reload();
    await page.screenshot({path:'File.png'});
    await expect(page).toHaveTitle(''); //expect is used to validate, default is hard
    // await expect(page).toHaveURL(/flipkart/);
});

test('validating facebook title', async({page}) => {
    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(5000);
    const name = await page.title();
    console.log(`Title of the page is ${name}`);
    const nameurl = await page.url();
    console.log(`The Url for facebook is :${nameurl}`);
    await expect(page).toHaveTitle(name);
    await expect(page).toHaveURL(nameurl);
})

test('validating facebook',async({page}) => {
    await page.goto('https://www.facebook.com/');
    await page.goto('https://www.amazon.in/');
    await page.goBack();
    await page.goForward();
    await page.reload();
    await page.waitForTimeout(5000);
    const page1_name = await page.title();
    console.log('Page Name:'+page1_name);
    const page1_url = await page.url();
    console.log(`Page URL is: ${page1_url}`);
    await expect.soft(page).toHaveTitle(page1_name);
    await expect.soft(page).toHaveURL(page1_url);
}) 


test('playwright common locators & in-built locators', async({page}) =>{
    //DOM - DOCUMENT OBJECT MODEL - ctrl + shift + i
    // for inspecting element - ctrl + shift + c
    // locators:
    //1. ID --> fastest locators --> #value or tagname#value
    // 2. class --> '.'par
    // 3. xpath
    // 4.css

    //Xpath: there are two type 
    //          relative --> // --> directly jumps into the particular tag,
    //                SYNTAX: //tagname[@att ='value']  
    //                eg  ->    //tagname[@id() = 'twotabsearchtextbox']
    //          INDEXING:  (//tagename[@att='value])[index]  
    //                 eg  ->    (//tagname[@id() = 'twotabsearchtextbox'])[1]
    //              absolute --> / -->  starts from the html jumps one by one
    //          CONTAINS : //tagname[contains(@att.'value)]
                       //eg --  //span[contains(text(),'result for')]
    //CSS:
    // basic --> tagname[att = 'value'] or [att = 'value']
    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(5000);
    // await page.locator("//input[@id='twotabsearchtextbox']").fill('iphone'); LOCATOR BY XPATH: RELATIVE METHOD
    await page.locator("//input[@role='searchbox'][1]").fill('iphone'); //LOCATOR BY XPATH:INDEXING METHOD
    await page.locator('#nav-search-submit-button').click() //LOCATOR BY ID METHOD
    await page.waitForTimeout(5000);
})

test('Facebook locator', async({page}) =>{
    await page.goto('https://www.facebook.com/');
    await page.locator("input[name='email']").fill("nithin@gmail.com");// LOCATOR BY CSS
    await page.locator("//input[@type='password']").fill("nithin@1234");
    await page.locator("div[role='none']").click();
    await page.waitForTimeout(5000);
})

//div[@id="nav-xshop"]/ul/li --relative xpath method for amazon 
//div[@id="nav-xshop"]/ul/li -- absolute xpath method
//*[@id="navbar-main"]/div/div[4]/div[2]/div/div/ul/li - 

test('dropdown',async({page}) =>{
    await page.goto('https://demoqa.com/select-menu');
    // await page.selectOption('#dropdown',{value:'1'}); ---> DROPDOWN BY Id Method
    // await page.selectOption('//select[@id="elementsPerPageSelect"]',{'value':'{'}); --> DROPDOWN BY RELATVE XPATH
    // await page.selectOption('[id="country"]',{index:5}); --> DROPDOWN BY Indexing
    // await page.locator('[value="AS"]').click();
    await page.selectOption('#cars',['volvo','Saab']).click(); //---> MULTIPLE DROPDOWN 
    await page.waitForTimeout(5000);
})

test('dropdown for amazon search bar', async({page}) =>{
    await page.goto('https://www.amazon.in/');
    await page.selectOption('//select[@aria-describedby="searchDropdownDescription"]',['search-alias=alexa-skills']); //--->DONT USE click() if you need to select single
    await page.waitForTimeout(5000);
})

test('Multiple Dropdown',async({page}) =>{
    await page.goto('https://testautomationcentral.com/demo/dropdown.html');
    // await page.getByRole('button',{name:'Multi-Select'}).click();
    // await page.selectOption('//div[@id="multi-select-dropdown"]/select',['option1','option2']);
    // await page.waitForTimeout(3000);
    await page.getByRole('button',{name:"Simple Dropdown"}).click();
    await page.selectOption('//div[@id="simple-dropdown"]/select',['option2'])
    await page.waitForTimeout(5000);
})

test('Alert Handling - Simple, Confirm, Prompt',async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on ('dialog', async(d) => {
        if(d.type() === 'alert'){
            d.accept();
            console.log(d.message());
            console.log('This is simple alert');
        }
        else if(d.type() === 'confirm'){
            d.dismiss();
            console.log(d.message());
            console.log('This is confirm alert');
        }
        else if(d.type() === 'prompt'){
            d.accept('This is prompt alert typed sucessfully');
            console.log(d.message());
            console.log('This is prompt alert');
        }})
        // console.log(d.message());
        // console.log(d.type());
    
    // await page.locator('//ul/li/button[@onclick="jsAlert()"]').click(); // --> Simple Alert (will have only okay button and just click okay)    
    await page.locator('//ul/li/button[@onclick="jsConfirm()"]').click(); // --> Confirm Alert (Will have "Okay" and "Cancel" button)
    // await page.locator('//ul/li/button[@onclick="jsPrompt()"]').click(); 
    /* Prompt Alert (We need to enter text and okay or cancel, in above code we need to type 
    what we need example d.accept('Hello') in accept function we need to type what input text we need to give)*/
    await page.waitForTimeout(5000);
})

test('create new page', async({page}) =>{
    await page.goto('https://www.amazon.in/');
    const amazonTab = await page.context().newPage();
    await amazonTab.goto('https://www.flipkart.com/');
    await page.waitForTimeout(5000);
})

test('open browser with multiple window', async({page}) =>{
    //to open the browser(we need to use await browsername.launch()) with particular channel
    const browser = await chromium.launch(
        {
        headless:false, 
        channel:'chrome'
        });
    const context1 = await browser.newContext(); // to open new window
    const page1 = await context1.newPage(); // to open new tab in the above mentioned window
    await page1.goto('https://www.amazon.in/'); // will open the url in the above mentioned tab
    const context2 = await browser.newContext(); // to open another new window
    const page2 = await context2.newPage(); // to open new tab in the above mentioned window
    await page2.goto('https://www.flipkart.com/'); // will open the url in the above mentioned tab
});

test('To record video with browser', async({page}) =>{
        const browser = await chromium.launch(
        {
        headless:true, 
        channel:'chrome'
        });
        const context = await browser.newContext({
            recordVideo:{
                dir:'D:\\Playwright Automation Course\\PlayWright\\test-results' //paste the path amd change single \ to double \\
            }
        });
        const page1 = await context.newPage();
        await page1.goto('https://www.amazon.in/');
        await page1.waitForTimeout(5000);  
        
//               const context = await browser.newContext({
//             recordVideo:{
//                 dir:'D:\\Playwright Automation Course\\PlayWright\\test-results' //paste the path amd change single \ to double \\
//             }
//         });
//         const page1 = await context.newPage();
//         await page1.goto('https://www.amazon.in/');
//         await page1.waitForTimeout(5000);    
// });
});

test('To upload a file', async({page}) =>{
    await page.goto('https://practice.expandtesting.com/upload',{waitUntil:'domcontentloaded'});
    await page.setInputFiles('#fileInput','D:\\Playwright Automation Course\\PlayWright\\File.png'); //to upload the file
    await page.waitForTimeout(5000);    
});

test('To download a file and save the file', async({page}) =>{
    await page.goto('https://demoqa.com/upload-download');
    const [nithin] = await Promise.all([
        page.waitForEvent("download"), // wait for download to start
        page.click('#downloadButton'),
    ])
    await nithin.saveAs('D:\\Playwright Automation Course\\PlayWright\\newpicture.jpeg'); 
    // to save the file in the mentioned path file name we have to mention here which is newpicture.jpeg
});

test('To handle new window if i select a product', async({browser}) =>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.amazon.in/');
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone');
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    await page.waitForTimeout(5000);

    const [product_page] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("//*[@aria-label='Sponsored Ad - iPhone 17e 512 GB: 15.40 cm (6.1″) Super Retina XDR Display, A19 Chip, All-Day Battery Life, 48MP Fusion Camera, 256GB Starting Storage; White']").click(),
    ]);
    await product_page.waitForLoadState('domcontentloaded');
    await product_page.locator('//div[@id="desktop_qualifiedBuyBox"]/descendant::span[@class="a-button-inner"]/input[@id="add-to-cart-button"]').click();
    await product_page.waitForTimeout(5000);
    // await product_page.close(); //will close the product_page and switch back to main page
    await page.bringToFront(); //will switch back to main page and To switch back to product_page we have to use page.bringToFront() method
})

test('Testing flipkart using HOVER to signup and login, request OTP', async({page}) =>{
    await page.goto('https://www.flipkart.com/');
    await page.locator('//span[@role="button"]').click();
    await page.locator('//div[@data-id="stickyElement"]/descendant::header/descendant::a[@title="Login"]').hover();
    await page.waitForTimeout(5000);
    await page.locator('//a[@title="Sign Up"]/child::span[contains(text(),"Sign Up")]').click();
    await page.waitForTimeout(5000);
    await page.locator('//input[@maxlength="10"]').fill('9566422820');
    await page.locator('//button[@type="submit"]/descendant::span').click();
    await page.waitForTimeout(5000);
})

// test.only('Frame Handling',async({page}) =>{

// })

test.only('Testing Drag and Drop functionality', async({page}) =>{
    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');
    await page.locator('//ul[@id="gallery"]/li[1]').dragTo(page.locator+('//div[@id="trash"]'));
    await page.waitForTimeout(5000);
});
