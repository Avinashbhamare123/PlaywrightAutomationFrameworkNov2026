import {test,expect} from "../src/fixtures/pageFixtures.js"

test.beforeEach(async ({loginPage})=>
{
       await loginPage.goToLoginPage();
  //  await loginPage.doLogin("nltech01@gmail.com", "admin@123");
   await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!);
})

test("Verify Product Images Count Test", async({homePage, searchResultsPage, productInfoPage})=>
{
 await homePage.doSearch("macbook");
 await searchResultsPage.selectAndClickOnProduct("MacBook Air");
 
 let imagesCount=productInfoPage.getProductImagesCount();
 
 expect(imagesCount).toBeGreaterThan(1);

})

test("Verify Product Information Test", async({homePage, searchResultsPage, productInfoPage})=>
{
 await homePage.doSearch("macbook");
 await searchResultsPage.selectAndClickOnProduct("MacBook Pro");
 
 let completeInfo=await productInfoPage.getProductCompleteInfo();
 
 console.log(completeInfo);
 expect.soft(completeInfo.get("Brand")).toBe("Apple");
 expect.soft(completeInfo.get("Product Code")).toBe("Product 18");
 expect.soft(completeInfo.get("Reward Points")).toBe("800");
 expect.soft(completeInfo.get("Availability")).toBe("In Stock");
 expect.soft(completeInfo.get("Product Price")).toBe("$2,000.00");

})