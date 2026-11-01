# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: searchPage.spec.ts >> Verify search functionality count Test
- Location: tests\searchPage.spec.ts:18:1

# Error details

```
Error: page.goto: net::ERR_CONNECTION_RESET at https://opencart.nltechtrainings.com/en-gb?route=account/login
Call log:
  - navigating to "https://opencart.nltechtrainings.com/en-gb?route=account/login", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]: The connection was reset.
    - generic [ref=e9]:
      - paragraph [ref=e10]: "Try:"
      - list [ref=e11]:
        - listitem [ref=e12]: Checking the connection
        - listitem [ref=e13]:
          - link "Checking the proxy and the firewall" [ref=e14] [cursor=pointer]:
            - /url: "#buttons"
        - listitem [ref=e15]:
          - link "Running Windows Network Diagnostics" [ref=e16] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e17]: ERR_CONNECTION_RESET
  - generic [ref=e18]:
    - button "Reload" [ref=e20] [cursor=pointer]
    - button "Details" [ref=e21] [cursor=pointer]
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
     |                         ^ Error: page.goto: net::ERR_CONNECTION_RESET at https://opencart.nltechtrainings.com/en-gb?route=account/login
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