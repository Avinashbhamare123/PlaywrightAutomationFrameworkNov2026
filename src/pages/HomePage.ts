import {Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage.js';

export class HomePage extends BasePage
{
private readonly headers:Locator
private readonly logoutLink:Locator
private readonly searchIcon:Locator
private readonly searchBar:Locator

constructor(page:Page)
{
    super(page);
    this.headers=page.locator("h2");
    this.logoutLink=page.locator("(//a[text()='Logout'])[2]");
    this.searchIcon=page.locator("//button[@type='submit' and @class='btn btn-light btn-lg']");
    this.searchBar=page.getByPlaceholder('Search');
}

async getHomePageTitle():Promise<string>
{
    return await this.page.title();
}

async getHomePageHeaders():Promise<string[]>
{
   let headerList:string[]= await this.headers.allInnerTexts();
   return headerList;
}

async isLogoutLinkAvailable():Promise<boolean>
{
    return await this.logoutLink.isVisible();
}

async doSearch(searchText:string):Promise<void>
{
    console.log(`Searching from the product : ${searchText}`);
    await this.searchBar.fill(searchText);
    await this.searchIcon.click();
}
}