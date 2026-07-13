# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: firstClass.spec.js >> Testing Drag and Drop functionality
- Location: tests\firstClass.spec.js:248:6

# Error details

```
TypeError: "//ul[@id="gallery"]/li[1]".dragTo is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e7]:
        - generic:
          - generic:
            - generic:
              - button [ref=e8] [cursor=pointer]
              - textbox "Search..." [ref=e9]
          - link "pinterest" [ref=e10] [cursor=pointer]:
            - /url: https://in.pinterest.com/globalsqa/
          - link "twitter" [ref=e11] [cursor=pointer]:
            - /url: https://twitter.com/Global_SQA
          - link "linkedin" [ref=e12] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/globalsqa
          - link "google" [ref=e13] [cursor=pointer]:
            - /url: https://plus.google.com/103761557396023531439/posts
          - link "facebook" [ref=e14] [cursor=pointer]:
            - /url: https://facebook.com/globalsqa
          - generic [ref=e16]: contact@globalsqa.com
      - generic [ref=e19]:
        - link "GlobalSQA" [ref=e22] [cursor=pointer]:
          - /url: https://www.globalsqa.com/
          - img "GlobalSQA" [ref=e23]
        - generic [ref=e24]:
          - list:
            - listitem [ref=e25]:
              - link "About" [ref=e26] [cursor=pointer]:
                - /url: https://www.globalsqa.com/about/
            - listitem [ref=e27]:
              - link "CheatSheets" [ref=e28] [cursor=pointer]:
                - /url: https://www.globalsqa.com/cheatsheets/
            - listitem [ref=e29]:
              - link "Free Ebooks" [ref=e30] [cursor=pointer]:
                - /url: https://www.globalsqa.com/free-ebooks/
                - text: Free Ebooks
            - listitem [ref=e32]:
              - link "Tester’s Hub" [ref=e33] [cursor=pointer]:
                - /url: https://www.globalsqa.com/testers-hub/
                - text: Tester’s Hub
              - text:  
            - listitem [ref=e35]:
              - link "Contact Us" [ref=e36] [cursor=pointer]:
                - /url: https://www.globalsqa.com/contact-us/
      - text:    
    - generic [ref=e37]:
      - generic [ref=e41]:
        - generic [ref=e42]:
          - link "Home" [ref=e43] [cursor=pointer]:
            - /url: https://www.globalsqa.com/
            - generic [ref=e44]: Home
          - link "Demo Testing Site" [ref=e45] [cursor=pointer]:
            - /url: https://www.globalsqa.com/demo-site/
            - generic [ref=e46]: Demo Testing Site
          - link "Drag And Drop" [ref=e47] [cursor=pointer]:
            - /url: https://www.globalsqa.com/demo-site/draganddrop/
            - generic [ref=e48]: Drag And Drop
        - heading "Drag And Drop" [level=1] [ref=e50]
      - generic [ref=e53]:
        - generic [ref=e54]:
          - generic [ref=e55]:
            - heading "Interaction" [level=4] [ref=e56]
            - list [ref=e58]:
              - listitem [ref=e59]:
                - link "Sortable" [ref=e60] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/sorting/
                  - generic [ref=e61]: Sortable
              - listitem [ref=e62]:
                - link "Drag And Drop" [ref=e63] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/draganddrop/
                  - generic [ref=e64]: Drag And Drop
              - listitem [ref=e65]:
                - link "Select Elements" [ref=e66] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/select-elements/
                  - generic [ref=e67]: Select Elements
              - listitem [ref=e68]:
                - link "Draggable Boxes" [ref=e69] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/draggableboxes/
                  - generic [ref=e70]: Draggable Boxes
              - listitem [ref=e71]:
                - link "DropDown Menu" [ref=e72] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/select-dropdown-menu/
                  - generic [ref=e73]: DropDown Menu
          - generic [ref=e74]:
            - heading "Widgets" [level=4] [ref=e75]
            - list [ref=e77]:
              - listitem [ref=e78]:
                - link "Tooltip" [ref=e79] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/tooltip/
                  - generic [ref=e80]: Tooltip
              - listitem [ref=e81]:
                - link "Sliders" [ref=e82] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/sliders/
                  - generic [ref=e83]: Sliders
              - listitem [ref=e84]:
                - link "Spinner" [ref=e85] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/spinner/
                  - generic [ref=e86]: Spinner
              - listitem [ref=e87]:
                - link "DatePicker" [ref=e88] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/datepicker/
                  - generic [ref=e89]: DatePicker
              - listitem [ref=e90]:
                - link "Progress Bar" [ref=e91] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/progress-bar/
                  - generic [ref=e92]: Progress Bar
              - listitem [ref=e93]:
                - link "Dialog Boxes" [ref=e94] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/dialog-boxes/
                  - generic [ref=e95]: Dialog Boxes
              - listitem [ref=e96]:
                - link "Auto Complete" [ref=e97] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/auto-complete/
                  - generic [ref=e98]: Auto Complete
              - listitem [ref=e99]:
                - link "Accordion And Tabs" [ref=e100] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/accordion-and-tabs/
                  - generic [ref=e101]: Accordion And Tabs
          - iframe [ref=e103]:
            
          - generic [ref=e106]:
            - heading "These are topics related to the article that might interest you" [level=2] [ref=e108]: Discover more
            - link "Social Media Marketing" [ref=e109] [cursor=pointer]:
              - generic "Social Media Marketing" [ref=e110]
              - img [ref=e112]
            - link "Automation Testing Tools" [ref=e114] [cursor=pointer]:
              - generic "Automation Testing Tools" [ref=e115]
              - img [ref=e117]
            - link "Web Apps & Online Tools" [ref=e119] [cursor=pointer]:
              - generic "Web Apps & Online Tools" [ref=e120]
              - img [ref=e122]
            - link "Software Utilities" [ref=e124] [cursor=pointer]:
              - generic "Software Utilities" [ref=e125]
              - img [ref=e127]
            - link "Clip Art & Animated GIFs" [ref=e129] [cursor=pointer]:
              - generic "Clip Art & Animated GIFs" [ref=e130]
              - img [ref=e132]
            - link "Computers & Electronics" [ref=e134] [cursor=pointer]:
              - generic "Computers & Electronics" [ref=e135]
              - img [ref=e137]
            - link "Calendar & Scheduling Software" [ref=e139] [cursor=pointer]:
              - generic "Calendar & Scheduling Software" [ref=e140]
              - img [ref=e142]
            - link "Software Testing Services" [ref=e144] [cursor=pointer]:
              - generic "Software Testing Services" [ref=e145]
              - img [ref=e147]
          - iframe [ref=e150]:
            
        - generic [ref=e152]:
          - list [ref=e153]:
            - tab "Photo Manager" [ref=e154] [cursor=pointer]
            - tab "Accepted Elements" [ref=e155] [cursor=pointer]
            - tab "Propagation" [ref=e156] [cursor=pointer]
          - paragraph [ref=e159]:
            - iframe [ref=e160]:
              - generic [active] [ref=f1e1]:
                - generic [ref=f1e2]:
                  - list [ref=f1e3]:
                    - listitem [ref=f1e4]:
                      - heading "High Tatras" [level=5] [ref=f1e5]
                      - img "The peaks of High Tatras" [ref=f1e6]
                      - link "View larger" [ref=f1e7] [cursor=pointer]:
                        - /url: images/high_tatras.jpg
                      - link "Delete image" [ref=f1e8] [cursor=pointer]:
                        - /url: link/to/trash/script/when/we/have/js/off
                    - listitem [ref=f1e9]:
                      - heading "High Tatras 2" [level=5] [ref=f1e10]
                      - img "The chalet at the Green mountain lake" [ref=f1e11]
                      - link "View larger" [ref=f1e12] [cursor=pointer]:
                        - /url: images/high_tatras2.jpg
                      - link "Delete image" [ref=f1e13] [cursor=pointer]:
                        - /url: link/to/trash/script/when/we/have/js/off
                    - listitem [ref=f1e14]:
                      - heading "High Tatras 3" [level=5] [ref=f1e15]
                      - img "Planning the ascent" [ref=f1e16]
                      - link "View larger" [ref=f1e17] [cursor=pointer]:
                        - /url: images/high_tatras3.jpg
                      - link "Delete image" [ref=f1e18] [cursor=pointer]:
                        - /url: link/to/trash/script/when/we/have/js/off
                    - listitem [ref=f1e19]:
                      - heading "High Tatras 4" [level=5] [ref=f1e20]
                      - img "On top of Kozi kopka" [ref=f1e21]
                      - link "View larger" [ref=f1e22] [cursor=pointer]:
                        - /url: images/high_tatras4.jpg
                      - link "Delete image" [ref=f1e23] [cursor=pointer]:
                        - /url: link/to/trash/script/when/we/have/js/off
                  - heading "Trash Trash" [level=4] [ref=f1e25]:
                    - generic [ref=f1e26]: Trash
                    - text: Trash
                - generic [ref=f1e27]:
                  - paragraph [ref=f1e28]: You can delete an image either by dragging it to the Trash or by clicking the trash icon.
                  - paragraph [ref=f1e29]: You can "recycle" an image by dragging it back to the gallery or by clicking the recycle icon.
                  - paragraph [ref=f1e30]: You can view larger image by clicking the zoom icon. Selenium Practice dialog widget is used for the modal window.
            - insertion [ref=e161]
            - link "Operating Systems" [ref=e162] [cursor=pointer]:
              - generic [ref=e163]:
                - img [ref=e165]
                - text: Operating
              - text: Systems
    - generic:
      - insertion:
        - iframe [ref=e168]:
          
    - generic [ref=e169]:
      - generic [ref=e171]:
        - generic [ref=e172]:
          - heading "Footer Widget Area 1" [level=3] [ref=e173]
          - paragraph [ref=e174]:
            - link "Assign a widget to this area now." [ref=e175] [cursor=pointer]:
              - /url: https://www.globalsqa.com/wp-admin/widgets.php
        - generic [ref=e176]:
          - heading "Footer Widget Area 2" [level=3] [ref=e177]
          - paragraph [ref=e178]:
            - link "Assign a widget to this area now." [ref=e179] [cursor=pointer]:
              - /url: https://www.globalsqa.com/wp-admin/widgets.php
        - generic [ref=e180]:
          - heading "Footer Widget Area 3" [level=3] [ref=e181]
          - paragraph [ref=e182]:
            - link "Assign a widget to this area now." [ref=e183] [cursor=pointer]:
              - /url: https://www.globalsqa.com/wp-admin/widgets.php
        - generic [ref=e184]:
          - heading "Footer Widget Area 4" [level=3] [ref=e185]
          - paragraph [ref=e186]:
            - link "Assign a widget to this area now." [ref=e187] [cursor=pointer]:
              - /url: https://www.globalsqa.com/wp-admin/widgets.php
      - generic [ref=e192]:
        - link "pinterest" [ref=e193] [cursor=pointer]:
          - /url: https://in.pinterest.com/globalsqa/
        - link "twitter" [ref=e194] [cursor=pointer]:
          - /url: https://twitter.com/Global_SQA
        - link "linkedin" [ref=e195] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/globalsqa
        - link "google" [ref=e196] [cursor=pointer]:
          - /url: https://plus.google.com/103761557396023531439/posts
        - link "facebook" [ref=e197] [cursor=pointer]:
          - /url: https://facebook.com/globalsqa
        - generic [ref=e198]:
          - text: "Website Designed & Developed by :"
          - link "GlobalSQA" [ref=e199] [cursor=pointer]:
            - /url: https://www.globalsqa.com
  - insertion [ref=e202]:
    - iframe [ref=e205]:
      - generic [ref=f15e3]:
        - button [ref=f15e4]:
          - img [ref=f15e5]
        - generic [ref=f15e7]:
          - generic [ref=f15e9]:
            - generic [ref=f15e13]:
              - button "Play video" [ref=f15e17] [cursor=pointer]:
                - img [ref=f15e18]
              - button "Unmute video" [ref=f15e23] [cursor=pointer]
            - button "Replay" [ref=f15e30]:
              - img [ref=f15e32] [cursor=pointer]
            - img [ref=f15e37]
          - button "Learn more" [ref=f15e44] [cursor=pointer]
```

# Test source

```ts
  151 |     const amazonTab = await page.context().newPage();
  152 |     await amazonTab.goto('https://www.flipkart.com/');
  153 |     await page.waitForTimeout(5000);
  154 | })
  155 | 
  156 | test('open browser with multiple window', async({page}) =>{
  157 |     //to open the browser(we need to use await browsername.launch()) with particular channel
  158 |     const browser = await chromium.launch(
  159 |         {
  160 |         headless:false, 
  161 |         channel:'chrome'
  162 |         });
  163 |     const context1 = await browser.newContext(); // to open new window
  164 |     const page1 = await context1.newPage(); // to open new tab in the above mentioned window
  165 |     await page1.goto('https://www.amazon.in/'); // will open the url in the above mentioned tab
  166 |     const context2 = await browser.newContext(); // to open another new window
  167 |     const page2 = await context2.newPage(); // to open new tab in the above mentioned window
  168 |     await page2.goto('https://www.flipkart.com/'); // will open the url in the above mentioned tab
  169 | });
  170 | 
  171 | test('To record video with browser', async({page}) =>{
  172 |         const browser = await chromium.launch(
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
  248 | test.only('Testing Drag and Drop functionality', async({page}) =>{
  249 |     await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');
  250 |     const frame =await page.frameLocator('(//iframe[@class="demo-frame"])[1]')
> 251 |     await frame.locator(('//ul[@id="gallery"]/li[1]').dragTo(frame.locator('//div[@id="trash"]')))
      |                                                       ^ TypeError: "//ul[@id="gallery"]/li[1]".dragTo is not a function
  252 | //     await page.locator('//ul[@id="gallery"]/li[1]').dragTo(page.locator+('//div[@id="trash"]'));
  253 |     await page.waitForTimeout(5000);
  254 | });
```