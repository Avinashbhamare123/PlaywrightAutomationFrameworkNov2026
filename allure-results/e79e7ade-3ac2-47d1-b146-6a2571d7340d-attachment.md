# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginPage.spec.ts >> User doing the actual login test
- Location: tests\loginPage.spec.ts:26:1

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "en-gb?route=account/login", waiting until "load"

```

# Test source

```ts
  1  | import {Locator, Page} from '@playwright/test';
  2  | import {BasePage} from './BasePage.js';
  3  | 
  4  | export class LoginPage extends BasePage
  5  | {   private readonly emailId:Locator
  6  |     private readonly password:Locator
  7  |     private readonly loginBtn:Locator
  8  |     private readonly forgotPwdLink:Locator
  9  |     private readonly logo:Locator
  10 | 
  11 |     constructor(page:Page)
  12 |     {
  13 |         super(page);
  14 |         this.emailId=page.locator('#input-email')
  15 |         this.password=page.locator('#input-password')
  16 |         this.loginBtn=page.locator("//button[text()='Login']")
  17 |         this.forgotPwdLink=page.locator("(//a[text()='Forgotten Password'])[1]")
  18 |         this.logo=page.locator('img')
  19 |     }
  20 | 
  21 |     async goToLoginPage()
  22 |     {
> 23 |         await this.page.goto("en-gb?route=account/login");
     |                         ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  24 |     }
  25 |     
  26 |     async getLoginPageTitle():Promise<string>
  27 |     {
  28 |        return await this.page.title();
  29 |     }
  30 | 
  31 |     async isForgotPwdLinkAvailable():Promise<boolean>
  32 |     {
  33 |         return await this.forgotPwdLink.isVisible();
  34 |     }
  35 | 
  36 |     async doLogin(username:string, password:string)
  37 |     {
  38 |         await this.emailId.fill(username);
  39 |         await this.password.fill(password);
  40 |         await this.loginBtn.click();
  41 |        
  42 |         await this.page.waitForTimeout(2000);
  43 | 
  44 |     }
  45 | }
```