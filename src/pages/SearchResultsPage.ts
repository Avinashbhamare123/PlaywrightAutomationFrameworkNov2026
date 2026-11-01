import {Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage.js';

export class SearchResultsPage extends BasePage
{
    private readonly resultHeader:Locator
    private readonly searchResults:Locator
    constructor(page:Page)
    {
        super(page);
        this.resultHeader=page.locator("h1");
        this.searchResults=page.locator("div.product-thumb");
    }
    async getSearchResultsPageHeader():Promise<string>
    {
        return await this.resultHeader.innerText();
    }

    async getSearchResultsCount():Promise<number>
    {
        return await this.searchResults.count();
    }

    async selectAndClickOnProduct(productName:string):Promise<void>
    {

        let productLocator:Locator= this.page.locator(`(//a[text()="${productName}"])[1]`);
        console.log(`Clicking on the product with name: ${productName}`);
       // await productLocator.waitFor({
      //  state: 'visible',
     //   timeout: 10000
     //   });

        await productLocator.click();
    }
}