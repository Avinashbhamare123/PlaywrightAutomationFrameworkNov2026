# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginPage.spec.ts >> Forgot password link exist test
- Location: tests\loginPage.spec.ts:18:1

# Error details

```
Error: page.goto: net::ERR_CONNECTION_RESET at https://opencart.nltechtrainings.com/en-gb?route=account/login
Call log:
  - navigating to "https://opencart.nltechtrainings.com/en-gb?route=account/login", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - navigation [ref=f1e2]:
    - generic [ref=f1e4]:
      - list [ref=f1e6]:
        - listitem [ref=f1e7]:
          - link "$ Currency " [ref=f1e10] [cursor=pointer]:
            - /url: "#"
            - strong [ref=f1e11]: $
            - text: Currency
            - generic [ref=f1e12]: 
        - listitem
      - list [ref=f1e14]:
        - listitem [ref=f1e15]:
          - link " +91 98765 43210" [ref=f1e16] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=information/contact
            - generic [ref=f1e17]: 
            - text: +91 98765 43210
        - listitem [ref=f1e18]:
          - link " My Account " [ref=f1e20] [cursor=pointer]:
            - /url: "#"
            - generic [ref=f1e21]: 
            - text: My Account
            - generic [ref=f1e22]: 
        - listitem [ref=f1e23]:
          - link " Wish List (0)" [ref=f1e24] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=account/wishlist
            - generic [ref=f1e25]: 
            - text: Wish List (0)
        - listitem [ref=f1e26]:
          - link " Shopping Cart" [ref=f1e27] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=checkout/cart
            - generic [ref=f1e28]: 
            - text: Shopping Cart
        - listitem [ref=f1e29]:
          - link " Checkout" [ref=f1e30] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=checkout/checkout
            - generic [ref=f1e31]: 
            - text: Checkout
  - banner [ref=f1e32]:
    - generic [ref=f1e34]:
      - link [ref=f1e37] [cursor=pointer]:
        - /url: https://opencart.nltechtrainings.com/en-gb?route=common/home
        - img "NLTECH Trainings Hub" [ref=f1e38]
      - generic [ref=f1e40]:
        - textbox "Search" [ref=f1e41]
        - button "" [ref=f1e42] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=f1e46] [cursor=pointer]:
        - generic [ref=f1e47]: 
        - text: 0 item(s) - $0.00
  - main [ref=f1e48]:
    - navigation [ref=f1e50]:
      - text: 
      - list [ref=f1e52]:
        - listitem [ref=f1e53]:
          - link "Desktops" [ref=f1e54] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/desktops
        - listitem [ref=f1e55]:
          - link "Laptops & Notebooks" [ref=f1e56] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/laptop-notebook
        - listitem [ref=f1e57]:
          - link "Components" [ref=f1e58] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/component
        - listitem [ref=f1e59]:
          - link "Tablets" [ref=f1e60] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/tablet
        - listitem [ref=f1e61]:
          - link "Software" [ref=f1e62] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/software
        - listitem [ref=f1e63]:
          - link "Phones & PDAs" [ref=f1e64] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/smartphone
        - listitem [ref=f1e65]:
          - link "Cameras" [ref=f1e66] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/cameras
        - listitem [ref=f1e67]:
          - link "MP3 Players" [ref=f1e68] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/mp3-players
    - generic [ref=f1e69]:
      - list [ref=f1e70]:
        - listitem [ref=f1e71]:
          - link "" [ref=f1e72] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=common/home
        - listitem [ref=f1e74]:
          - link "Account" [ref=f1e75] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=account/account
        - listitem [ref=f1e76]:
          - link "Login" [ref=f1e77] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=account/login
      - generic [ref=f1e78]:
        - generic [ref=f1e80]:
          - generic [ref=f1e82]:
            - heading "New Customer" [level=2] [ref=f1e83]
            - paragraph [ref=f1e84]:
              - strong [ref=f1e85]: Register Account
            - paragraph [ref=f1e86]: By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
            - link "Continue" [ref=f1e88] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/register
          - generic [ref=f1e91]:
            - heading "Returning Customer" [level=2] [ref=f1e92]
            - paragraph [ref=f1e93]:
              - strong [ref=f1e94]: I am a returning customer
            - generic [ref=f1e95]:
              - generic [ref=f1e96]: E-Mail Address
              - textbox "E-Mail Address" [ref=f1e97]
            - generic [ref=f1e98]:
              - generic [ref=f1e99]: Password
              - textbox "Password" [ref=f1e100]
              - link "Forgotten Password" [ref=f1e101] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/forgotten
            - button "Login" [ref=f1e103] [cursor=pointer]
        - complementary [ref=f1e104]:
          - generic [ref=f1e105]:
            - link "Login" [ref=f1e106] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/login
            - link "Register" [ref=f1e107] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/register
            - link "Forgotten Password" [ref=f1e108] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/forgotten
            - link "My Account" [ref=f1e109] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/account
            - link "Payment Methods" [ref=f1e110] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/payment_method
            - link "Address Book" [ref=f1e111] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/address
            - link "Wish List" [ref=f1e112] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/wishlist
            - link "Order History" [ref=f1e113] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/order
            - link "Downloads" [ref=f1e114] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/download
            - link "Subscriptions" [ref=f1e115] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/subscription
            - link "Reward Points" [ref=f1e116] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/reward
            - link "Returns" [ref=f1e117] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/returns
            - link "Transactions" [ref=f1e118] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/transaction
            - link "Newsletter" [ref=f1e119] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/newsletter
  - contentinfo [ref=f1e120]:
    - generic [ref=f1e121]:
      - generic [ref=f1e122]:
        - generic [ref=f1e123]:
          - heading "Information" [level=5] [ref=f1e124]
          - list [ref=f1e125]:
            - listitem [ref=f1e126]:
              - link "Terms & Conditions" [ref=f1e127] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/terms
            - listitem [ref=f1e128]:
              - link "Delivery Information" [ref=f1e129] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/delivery
            - listitem [ref=f1e130]:
              - link "About Us" [ref=f1e131] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/about-us
            - listitem [ref=f1e132]:
              - link "Privacy Policy" [ref=f1e133] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/privacy
        - generic [ref=f1e134]:
          - heading "Customer Service" [level=5] [ref=f1e135]
          - list [ref=f1e136]:
            - listitem [ref=f1e137]:
              - link "Contact Us" [ref=f1e138] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=information/contact
            - listitem [ref=f1e139]:
              - link "Returns" [ref=f1e140] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/returns.add
            - listitem [ref=f1e141]:
              - link "Site Map" [ref=f1e142] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=information/sitemap
        - generic [ref=f1e143]:
          - heading "Extras" [level=5] [ref=f1e144]
          - list [ref=f1e145]:
            - listitem [ref=f1e146]:
              - link "Brands" [ref=f1e147] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/brands
            - listitem [ref=f1e148]:
              - link "Affiliate" [ref=f1e149] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/affiliate
            - listitem [ref=f1e150]:
              - link "Specials" [ref=f1e151] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=product/special
        - generic [ref=f1e152]:
          - heading "My Account" [level=5] [ref=f1e153]
          - list [ref=f1e154]:
            - listitem [ref=f1e155]:
              - link "My Account" [ref=f1e156] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/account
            - listitem [ref=f1e157]:
              - link "Order History" [ref=f1e158] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/order
            - listitem [ref=f1e159]:
              - link "Wish List" [ref=f1e160] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/wishlist
            - listitem [ref=f1e161]:
              - link "Newsletter" [ref=f1e162] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/newsletter
      - separator [ref=f1e163]
      - paragraph [ref=f1e164]:
        - text: Powered By
        - link "OpenCart" [ref=f1e165] [cursor=pointer]:
          - /url: https://www.opencart.com
        - text: NLTECH Trainings Hub © 2026
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