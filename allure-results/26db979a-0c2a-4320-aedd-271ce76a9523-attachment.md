# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: searchPage.spec.ts >> Verify search header functionality Test
- Location: tests\searchPage.spec.ts:10:1

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "macbook"
Received string:    "Search - mackbook"
```

# Page snapshot

```yaml
- generic [ref=f2e1]:
  - navigation [ref=f2e2]:
    - generic [ref=f2e4]:
      - list [ref=f2e6]:
        - listitem [ref=f2e7]:
          - link "$ Currency " [ref=f2e10] [cursor=pointer]:
            - /url: "#"
            - strong [ref=f2e11]: $
            - text: Currency
            - generic [ref=f2e12]: 
        - listitem
      - list [ref=f2e14]:
        - listitem [ref=f2e15]:
          - link " +91 98765 43210" [ref=f2e16] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=information/contact
            - generic [ref=f2e17]: 
            - text: +91 98765 43210
        - listitem [ref=f2e18]:
          - link " My Account " [ref=f2e20] [cursor=pointer]:
            - /url: "#"
            - generic [ref=f2e21]: 
            - text: My Account
            - generic [ref=f2e22]: 
        - listitem [ref=f2e23]:
          - link " Wish List (0)" [ref=f2e24] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=account/wishlist&customer_token=5231a42de187875ad00bba7132
            - generic [ref=f2e25]: 
            - text: Wish List (0)
        - listitem [ref=f2e26]:
          - link " Shopping Cart" [ref=f2e27] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=checkout/cart
            - generic [ref=f2e28]: 
            - text: Shopping Cart
        - listitem [ref=f2e29]:
          - link " Checkout" [ref=f2e30] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=checkout/checkout
            - generic [ref=f2e31]: 
            - text: Checkout
  - banner [ref=f2e32]:
    - generic [ref=f2e34]:
      - link [ref=f2e37] [cursor=pointer]:
        - /url: https://opencart.nltechtrainings.com/en-gb?route=common/home
        - img "NLTECH Trainings Hub" [ref=f2e38]
      - generic [ref=f2e40]:
        - textbox "Search" [ref=f2e41]: mackbook
        - button "" [ref=f2e42] [cursor=pointer]
      - generic [ref=f2e45]:
        - button " 1 item(s) - $123.20" [ref=f2e46] [cursor=pointer]:
          - generic [ref=f2e47]: 
          - text: 1 item(s) - $123.20
        - text:   
  - main [ref=f2e48]:
    - navigation [ref=f2e50]:
      - text: 
      - list [ref=f2e52]:
        - listitem [ref=f2e53]:
          - link "Desktops" [ref=f2e54] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/desktops
        - listitem [ref=f2e55]:
          - link "Laptops & Notebooks" [ref=f2e56] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/laptop-notebook
        - listitem [ref=f2e57]:
          - link "Components" [ref=f2e58] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/component
        - listitem [ref=f2e59]:
          - link "Tablets" [ref=f2e60] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/tablet
        - listitem [ref=f2e61]:
          - link "Software" [ref=f2e62] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/software
        - listitem [ref=f2e63]:
          - link "Phones & PDAs" [ref=f2e64] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/smartphone
        - listitem [ref=f2e65]:
          - link "Cameras" [ref=f2e66] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/cameras
        - listitem [ref=f2e67]:
          - link "MP3 Players" [ref=f2e68] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/mp3-players
    - generic [ref=f2e69]:
      - list [ref=f2e70]:
        - listitem [ref=f2e71]:
          - link "" [ref=f2e72] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=common/home
        - listitem [ref=f2e74]:
          - link "Search" [ref=f2e75] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=product/search&search=mackbook
      - generic [ref=f2e77]:
        - heading "Search - mackbook" [level=1] [ref=f2e78]
        - generic [ref=f2e79]: Search Criteria
        - generic [ref=f2e82]:
          - generic [ref=f2e83]:
            - textbox "Search Criteria" [ref=f2e84]:
              - /placeholder: Keywords
              - text: mackbook
            - generic [ref=f2e85]:
              - checkbox "Search in product descriptions" [ref=f2e86]
              - generic [ref=f2e87]: Search in product descriptions
          - generic [ref=f2e88]:
            - combobox [ref=f2e89]:
              - option "All Categories" [selected]
              - option "Desktops"
              - option "PC"
              - option "Mac"
              - option "Laptops & Notebooks"
              - option "Macs"
              - option "Windows"
              - option "Components"
              - option "Mice and Trackballs"
              - option "Monitors"
              - option "test 1"
              - option "test 2"
              - option "Printers"
              - option "Scanners"
              - option "Web Cameras"
              - option "Tablets"
              - option "Software"
              - option "Phones & PDAs"
              - option "Cameras"
              - option "MP3 Players"
              - option "test 11"
              - option "test 12"
              - option "test 15"
              - option "test 16"
              - option "test 17"
              - option "test 18"
              - option "test 19"
              - option "test 20"
              - option "test 25"
              - option "test 21"
              - option "test 22"
              - option "test 23"
              - option "test 24"
              - option "test 4"
              - option "test 5"
              - option "test 6"
              - option "test 7"
              - option "test 8"
              - option "test 9"
            - generic [ref=f2e90]:
              - checkbox "Search in subcategories" [disabled]
              - generic [ref=f2e91]: Search in subcategories
        - button "Search" [ref=f2e94] [cursor=pointer]
        - separator [ref=f2e95]
        - heading "Products meeting the search criteria" [level=2] [ref=f2e96]
        - paragraph [ref=f2e97]: There is no product that matches the search criteria.
  - contentinfo [ref=f2e98]:
    - generic [ref=f2e99]:
      - generic [ref=f2e100]:
        - generic [ref=f2e101]:
          - heading "Information" [level=5] [ref=f2e102]
          - list [ref=f2e103]:
            - listitem [ref=f2e104]:
              - link "Terms & Conditions" [ref=f2e105] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/terms
            - listitem [ref=f2e106]:
              - link "Delivery Information" [ref=f2e107] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/delivery
            - listitem [ref=f2e108]:
              - link "About Us" [ref=f2e109] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/about-us
            - listitem [ref=f2e110]:
              - link "Privacy Policy" [ref=f2e111] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/privacy
        - generic [ref=f2e112]:
          - heading "Customer Service" [level=5] [ref=f2e113]
          - list [ref=f2e114]:
            - listitem [ref=f2e115]:
              - link "Contact Us" [ref=f2e116] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=information/contact
            - listitem [ref=f2e117]:
              - link "Returns" [ref=f2e118] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/returns.add
            - listitem [ref=f2e119]:
              - link "Site Map" [ref=f2e120] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=information/sitemap
        - generic [ref=f2e121]:
          - heading "Extras" [level=5] [ref=f2e122]
          - list [ref=f2e123]:
            - listitem [ref=f2e124]:
              - link "Brands" [ref=f2e125] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/brands
            - listitem [ref=f2e126]:
              - link "Affiliate" [ref=f2e127] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/affiliate&customer_token=5231a42de187875ad00bba7132
            - listitem [ref=f2e128]:
              - link "Specials" [ref=f2e129] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=product/special&customer_token=5231a42de187875ad00bba7132
        - generic [ref=f2e130]:
          - heading "My Account" [level=5] [ref=f2e131]
          - list [ref=f2e132]:
            - listitem [ref=f2e133]:
              - link "My Account" [ref=f2e134] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/account&customer_token=5231a42de187875ad00bba7132
            - listitem [ref=f2e135]:
              - link "Order History" [ref=f2e136] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/order&customer_token=5231a42de187875ad00bba7132
            - listitem [ref=f2e137]:
              - link "Wish List" [ref=f2e138] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/wishlist&customer_token=5231a42de187875ad00bba7132
            - listitem [ref=f2e139]:
              - link "Newsletter" [ref=f2e140] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/newsletter&customer_token=5231a42de187875ad00bba7132
      - separator [ref=f2e141]
      - paragraph [ref=f2e142]:
        - text: Powered By
        - link "OpenCart" [ref=f2e143] [cursor=pointer]:
          - /url: https://www.opencart.com
        - text: NLTECH Trainings Hub © 2026
```

# Test source

```ts
  1  | import {test, expect} from "../src/fixtures/pageFixtures.js"
  2  | test.beforeEach(async ({loginPage})=>
  3  | {
  4  |    
  5  |     await loginPage.goToLoginPage();
  6  |   //  await loginPage.doLogin("nltech01@gmail.com", "admin@123");
  7  |    await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!);
  8  | })
  9  | 
  10 | test("Verify search header functionality Test", async({homePage, searchResultsPage})=>
  11 | {
  12 |  await homePage.doSearch("mackbook");
  13 |  let searchHeader:string=await searchResultsPage.getSearchResultsPageHeader();
> 14 |  expect(searchHeader).toContain("macbook");
     |                       ^ Error: expect(received).toContain(expected) // indexOf
  15 | 
  16 | })
  17 | 
  18 | test("Verify search functionality count Test", async({homePage, searchResultsPage})=>
  19 | {
  20 |  await homePage.doSearch("samsung");
  21 |  let searchCount:number=await searchResultsPage.getSearchResultsCount();
  22 |  expect(searchCount).toBeGreaterThan(0);
  23 | 
  24 | })
  25 | 
  26 | test("Verify Click product functionality Test", async({homePage, searchResultsPage, page})=>{
  27 | await homePage.doSearch("macbook");
  28 | await searchResultsPage.selectAndClickOnProduct("MacBook Air");
  29 | expect(page).toHaveTitle("MacBook Air");
  30 | })
```