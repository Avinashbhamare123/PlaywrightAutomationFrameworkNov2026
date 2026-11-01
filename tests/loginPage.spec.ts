import { LoginPage } from "src/pages/LoginPage.js";
import {test, expect} from "../src/fixtures/pageFixtures.js"


test.beforeEach(async ({loginPage})=>
{
      await loginPage.goToLoginPage();
})

test("Login page Title test", async({loginPage})=>
{
   
   let title=await loginPage.getLoginPageTitle();
   expect(title).toBe("Account Login");

})

test("Forgot password link exist test", async({loginPage})=>
{
   
   let isForgotPwdLinkAvailalbe=await loginPage.isForgotPwdLinkAvailable();
   expect(isForgotPwdLinkAvailalbe).toBe(true);

})

test("User doing the actual login test", async({loginPage, homePage})=>
{
     // await loginPage.doLogin("nltech01@gmail.com", "admin@123");
   await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!);
  
   //// assertians
   let flag:boolean=await homePage.isLogoutLinkAvailable();
   expect(flag).toBeTruthy();
})