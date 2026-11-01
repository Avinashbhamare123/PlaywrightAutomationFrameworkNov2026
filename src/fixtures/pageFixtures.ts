import {test as baseTest} from '@playwright/test';
import{LoginPage} from "../pages/LoginPage.js";
import{HomePage} from "../pages/HomePage.js";
import{SearchResultsPage} from "../pages/SearchResultsPage.js"
import{ProductInfoPage} from "../pages/ProductInfoPage.js"

// defining types for page fixture
type pageFixture={
    loginPage:LoginPage;
    homePage:HomePage;
    searchResultsPage:SearchResultsPage;
    productInfoPage:ProductInfoPage;
}

export let test=baseTest.extend<pageFixture>({
// creating custom fixture for login page
  loginPage:  async ({page},use)=> // page object and inbuilt use function for callback
    {
        // create an object of login page
        let loginPage=new LoginPage(page);
        await use(loginPage);
    },

    homePage:  async ({page},use)=>
    {
        // create an object of login page
        let homePage=new HomePage(page);
        await use(homePage);
    },

     searchResultsPage:  async ({page},use)=>
    {
        // create an object of login page
        let searchResultsPage=new SearchResultsPage(page);
        await use(searchResultsPage);
    },
    productInfoPage:  async ({page},use)=>
    {
        // create an object of login page
        let productInfoPage=new ProductInfoPage(page);
        await use(productInfoPage);
    }
});

// now creating the export for except block
export {expect} from '@playwright/test';