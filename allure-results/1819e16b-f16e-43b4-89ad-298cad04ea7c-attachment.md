# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: productInfo.spec.ts >> Verify Product Images Count Test
- Location: tests\productInfo.spec.ts:10:1

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Matcher error: received value must be a number or bigint

Received has type:  object
Received has value: Promise {}
```

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for locator('//div[@class=\'img magnific-popup\']//img').first() to be visible

```

# Page snapshot

```yaml
- generic [ref=f3e1]:
  - navigation [ref=f3e2]:
    - generic [ref=f3e4]:
      - list [ref=f3e6]:
        - listitem [ref=f3e7]:
          - link "$ Currency " [ref=f3e10] [cursor=pointer]:
            - /url: "#"
            - strong [ref=f3e11]: $
            - text: Currency
            - generic [ref=f3e12]: 
        - listitem
      - list [ref=f3e14]:
        - listitem [ref=f3e15]:
          - link " +91 98765 43210" [ref=f3e16] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=information/contact
            - generic [ref=f3e17]: 
            - text: +91 98765 43210
        - listitem [ref=f3e18]:
          - link " My Account " [ref=f3e20] [cursor=pointer]:
            - /url: "#"
            - generic [ref=f3e21]: 
            - text: My Account
            - generic [ref=f3e22]: 
        - listitem [ref=f3e23]:
          - link " Wish List (0)" [ref=f3e24] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=account/wishlist&customer_token=fc8a15891ab54af7c9d0c534cb
            - generic [ref=f3e25]: 
            - text: Wish List (0)
        - listitem [ref=f3e26]:
          - link " Shopping Cart" [ref=f3e27] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=checkout/cart
            - generic [ref=f3e28]: 
            - text: Shopping Cart
        - listitem [ref=f3e29]:
          - link " Checkout" [ref=f3e30] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=checkout/checkout
            - generic [ref=f3e31]: 
            - text: Checkout
  - banner [ref=f3e32]:
    - generic [ref=f3e34]:
      - link [ref=f3e37] [cursor=pointer]:
        - /url: https://opencart.nltechtrainings.com/en-gb?route=common/home
        - img "NLTECH Trainings Hub" [ref=f3e38]
      - generic [ref=f3e40]:
        - textbox "Search" [ref=f3e41]: macbook
        - button "" [ref=f3e42] [cursor=pointer]
      - generic [ref=f3e45]:
        - button " 6 item(s) - $10,123.20" [ref=f3e46] [cursor=pointer]:
          - generic [ref=f3e47]: 
          - text: 6 item(s) - $10,123.20
        - text:    
  - main [ref=f3e48]:
    - navigation [ref=f3e50]:
      - text: 
      - list [ref=f3e52]:
        - listitem [ref=f3e53]:
          - link "Desktops" [ref=f3e54] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/desktops
        - listitem [ref=f3e55]:
          - link "Laptops & Notebooks" [ref=f3e56] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/laptop-notebook
        - listitem [ref=f3e57]:
          - link "Components" [ref=f3e58] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/component
        - listitem [ref=f3e59]:
          - link "Tablets" [ref=f3e60] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/tablet
        - listitem [ref=f3e61]:
          - link "Software" [ref=f3e62] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/software
        - listitem [ref=f3e63]:
          - link "Phones & PDAs" [ref=f3e64] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/smartphone
        - listitem [ref=f3e65]:
          - link "Cameras" [ref=f3e66] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/cameras
        - listitem [ref=f3e67]:
          - link "MP3 Players" [ref=f3e68] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/mp3-players
    - generic [ref=f3e69]:
      - list [ref=f3e70]:
        - listitem [ref=f3e71]:
          - link "" [ref=f3e72] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=common/home
        - listitem [ref=f3e74]:
          - link "Search" [ref=f3e75] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=product/search&search=macbook
        - listitem [ref=f3e76]:
          - link "MacBook Air" [ref=f3e77] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/product/macbook-air?search=macbook
      - generic [ref=f3e79]:
        - generic [ref=f3e80]:
          - generic [ref=f3e82]:
            - link [ref=f3e83] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/image/cache/catalog/demo/macbook_air_1-800x800.jpg
              - img "MacBook Air" [ref=f3e84]
            - generic [ref=f3e85]:
              - link [ref=f3e86] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/image/cache/catalog/demo/macbook_air_3-800x800.jpg
                - img "MacBook Air" [ref=f3e87]
              - link [ref=f3e88] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/image/cache/catalog/demo/macbook_air_2-800x800.jpg
                - img "MacBook Air" [ref=f3e89]
              - link [ref=f3e90] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/image/cache/catalog/demo/macbook_air_4-800x800.jpg
                - img "MacBook Air" [ref=f3e91]
          - generic [ref=f3e92]:
            - heading "MacBook Air" [level=1] [ref=f3e93]
            - list [ref=f3e94]:
              - listitem [ref=f3e95]:
                - text: "Brand:"
                - link "Apple" [ref=f3e96] [cursor=pointer]:
                  - /url: https://opencart.nltechtrainings.com/en-gb/apple?route=product/manufacturer.info
              - listitem [ref=f3e97]: "Product Code: Product 17"
              - listitem [ref=f3e98]: "Reward Points: 700"
              - listitem [ref=f3e99]: "Availability: In Stock"
            - paragraph [ref=f3e101]:
              - generic [ref=f3e102]: 
              - generic [ref=f3e104]: 
              - generic [ref=f3e106]: 
              - generic [ref=f3e108]: 
              - generic [ref=f3e110]: 
              - link "0 reviews" [ref=f3e112] [cursor=pointer]:
                - /url: "#"
              - text: /
              - link "Write a review" [ref=f3e113] [cursor=pointer]:
                - /url: "#"
            - list [ref=f3e114]:
              - listitem [ref=f3e115]:
                - heading "$1,202.00" [level=2] [ref=f3e116]
              - listitem [ref=f3e117]: "Ex Tax: $1,000.00"
            - generic [ref=f3e119]:
              - button "" [ref=f3e120] [cursor=pointer]
              - button "" [ref=f3e122] [cursor=pointer]
            - generic [ref=f3e127]:
              - generic [ref=f3e128]: Qty
              - textbox [ref=f3e129]: "1"
              - button "Add to Cart" [ref=f3e130] [cursor=pointer]
        - tablist [ref=f3e131]:
          - tab "Description" [selected] [ref=f3e132] [cursor=pointer]
          - tab "Reviews (0)" [ref=f3e133] [cursor=pointer]
        - generic [ref=f3e134]:
          - tabpanel [ref=f3e135]:
            - generic [ref=f3e136]: MacBook Air is ultrathin, ultraportable, and ultra unlike anything else. But you don’t lose inches and pounds overnight. It’s the result of rethinking conventions. Of multiple wireless innovations. And of breakthrough design. With MacBook Air, mobile computing suddenly has a new standard.
          - text: "* * *"
  - contentinfo [ref=f3e137]:
    - generic [ref=f3e138]:
      - generic [ref=f3e139]:
        - generic [ref=f3e140]:
          - heading "Information" [level=5] [ref=f3e141]
          - list [ref=f3e142]:
            - listitem [ref=f3e143]:
              - link "Terms & Conditions" [ref=f3e144] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/terms
            - listitem [ref=f3e145]:
              - link "Delivery Information" [ref=f3e146] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/delivery
            - listitem [ref=f3e147]:
              - link "About Us" [ref=f3e148] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/about-us
            - listitem [ref=f3e149]:
              - link "Privacy Policy" [ref=f3e150] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/privacy
        - generic [ref=f3e151]:
          - heading "Customer Service" [level=5] [ref=f3e152]
          - list [ref=f3e153]:
            - listitem [ref=f3e154]:
              - link "Contact Us" [ref=f3e155] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=information/contact
            - listitem [ref=f3e156]:
              - link "Returns" [ref=f3e157] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/returns.add
            - listitem [ref=f3e158]:
              - link "Site Map" [ref=f3e159] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=information/sitemap
        - generic [ref=f3e160]:
          - heading "Extras" [level=5] [ref=f3e161]
          - list [ref=f3e162]:
            - listitem [ref=f3e163]:
              - link "Brands" [ref=f3e164] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/brands
            - listitem [ref=f3e165]:
              - link "Affiliate" [ref=f3e166] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/affiliate&customer_token=fc8a15891ab54af7c9d0c534cb
            - listitem [ref=f3e167]:
              - link "Specials" [ref=f3e168] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=product/special&customer_token=fc8a15891ab54af7c9d0c534cb
        - generic [ref=f3e169]:
          - heading "My Account" [level=5] [ref=f3e170]
          - list [ref=f3e171]:
            - listitem [ref=f3e172]:
              - link "My Account" [ref=f3e173] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/account&customer_token=fc8a15891ab54af7c9d0c534cb
            - listitem [ref=f3e174]:
              - link "Order History" [ref=f3e175] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/order&customer_token=fc8a15891ab54af7c9d0c534cb
            - listitem [ref=f3e176]:
              - link "Wish List" [ref=f3e177] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/wishlist&customer_token=fc8a15891ab54af7c9d0c534cb
            - listitem [ref=f3e178]:
              - link "Newsletter" [ref=f3e179] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/newsletter&customer_token=fc8a15891ab54af7c9d0c534cb
      - separator [ref=f3e180]
      - paragraph [ref=f3e181]:
        - text: Powered By
        - link "OpenCart" [ref=f3e182] [cursor=pointer]:
          - /url: https://www.opencart.com
        - text: NLTECH Trainings Hub © 2026
```

# Test source

```ts
  1  | import {Locator, Page} from '@playwright/test';
  2  | import { BasePage } from './BasePage.js';
  3  | 
  4  | export class ProductInfoPage extends BasePage
  5  | {
  6  |     private readonly productHeader:Locator
  7  |      private readonly productImages:Locator
  8  |       private readonly productMetadata:Locator
  9  |        private readonly productPrice:Locator
  10 | 
  11 |     private readonly map:Map<string,string>
  12 | 
  13 |   constructor(page:Page)
  14 |     {
  15 |         super(page);
  16 |         this.productHeader=page.locator("h1");
  17 |         this.productImages=page.locator("//div[@class='img magnific-popup']//img");
  18 |         this.productMetadata=page.locator("(//div[@class='col-sm']//ul[@class='list-unstyled'])[1]//li");
  19 |         this.productPrice=page.locator("(//div[@class='col-sm']//ul[@class='list-unstyled'])[2]//span");
  20 |         this.map=new Map<string,string>();
  21 |         }
  22 | 
  23 |         async getProductHeader():Promise<string>
  24 |         {
  25 | 
  26 |             return await this.productHeader.innerText();
  27 |         }
  28 | 
  29 |         async getProductImagesCount():Promise<number>
  30 |         {
> 31 |             await this.productImages.first().waitFor({state:'visible'});
     |                                              ^ Error: locator.waitFor: Test ended.
  32 |             return await this.productImages.count();
  33 | 
  34 |         }
  35 | 
  36 |         async getProductMetaData():Promise<void>
  37 |         {
  38 |             await this.productMetadata.first().waitFor({state:'visible'});
  39 |             let metaInfo:string[]=await this.productMetadata.allInnerTexts();
  40 |             for(let data of metaInfo)
  41 |             {
  42 |             let meta=data.split(":");
  43 |             let metaKey=meta[0].trim();
  44 |             let metaValue=meta[1].trim();
  45 | 
  46 |             this.map.set(metaKey,metaValue);
  47 |             }
  48 |         }
  49 | 
  50 |         async getProductPricingData():Promise<void>
  51 |         {
  52 |             let priceInfo=await this.productPrice.innerText();
  53 |             this.map.set("Product Price", priceInfo);
  54 | 
  55 |         }
  56 | 
  57 |         async getProductCompleteInfo()
  58 |         {
  59 |             await this.getProductMetaData();
  60 |             await this.getProductPricingData();
  61 |             return this.map;
  62 |         }
  63 | }
```