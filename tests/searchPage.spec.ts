import {test, expect} from "../src/fixtures/pageFixtures.js"
test.beforeEach(async ({loginPage})=>
{
   
    await loginPage.goToLoginPage();
  //  await loginPage.doLogin("nltech01@gmail.com", "admin@123");
   await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!);
})

test("Verify search header functionality Test", async({homePage, searchResultsPage})=>
{
 await homePage.doSearch("macbook");
 let searchHeader:string=await searchResultsPage.getSearchResultsPageHeader();
 expect(searchHeader).toContain("macbook");

})

test("Verify search functionality count Test", async({homePage, searchResultsPage})=>
{
 await homePage.doSearch("samsung");
 let searchCount:number=await searchResultsPage.getSearchResultsCount();
 expect(searchCount).toBeGreaterThan(0);

})

test("Verify Click product functionality Test", async({homePage, searchResultsPage, page})=>{
await homePage.doSearch("macbook");

await searchResultsPage.selectAndClickOnProduct("MacBook Air");
expect(page).toHaveTitle("MacBook Air");
})