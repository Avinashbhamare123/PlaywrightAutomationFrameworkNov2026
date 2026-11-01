# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: users.api.spec.ts >> Deleting a single user
- Location: tests\users.api.spec.ts:69:1

# Error details

```
SyntaxError: Unexpected end of JSON input
```

# Test source

```ts
  1  | import{test, expect} from "@playwright/test";
  2  | 
  3  | let AUTH_TOKEN={'Authorization':'Bearer 832b525a58452c85a7a1a42241ac9df1f2176c61e67fa6385609f301c49034bf'};
  4  | 
  5  | test("Fetch a multiple user", async({request})=>
  6  | {
  7  |    let response=await request.get("https://gorest.co.in/public/v2/users",{headers:AUTH_TOKEN});
  8  |    //console.log(response); // JS object is return
  9  |    let responseBody=await response.json();
  10 |       console.log(responseBody);  // conversion of JS object to JSON string format
  11 | 
  12 |       console.log("Response code is : "+response.status());
  13 |       console.log("Response message is : "+response.statusText());
  14 | 
  15 | })
  16 | 
  17 | test("Fetch a single user", async({request})=>
  18 | {
  19 |    let response=await request.get("https://gorest.co.in/public/v2/users/8693823",{headers:AUTH_TOKEN});
  20 |    //console.log(response); // JS object is return
  21 |    let responseBody=await response.json();
  22 |       console.log(responseBody);  // conversion of JS object to JSON string format
  23 | 
  24 |       console.log("Response code is : "+response.status());
  25 |       console.log("Response message is : "+response.statusText());
  26 | 
  27 | })
  28 | 
  29 | test("Creating a new Resource user", async({request})=>
  30 | {
  31 |     let userData ={
  32 | 
  33 |             "name": "Avinash Bhamare",
  34 |             "email": "bhamare.avinash@gmail.com",
  35 |             "gender": "Male",
  36 |             "status": "active"
  37 |         }
  38 |    let response=await request.post("https://gorest.co.in/public/v2/users",{headers:AUTH_TOKEN, data:userData});
  39 |    //console.log(response); // JS object is return
  40 |    let responseBody=await response.json();
  41 |       console.log(responseBody);  // conversion of JS object to JSON string format
  42 | 
  43 |       console.log("Response code is : "+response.status());
  44 |       console.log("Response message is : "+response.statusText());
  45 | 
  46 | 
  47 | })
  48 | 
  49 | test("Updating a new created Resource user", async({request})=>
  50 | {
  51 |     let userData ={
  52 | 
  53 |             "name": "Avinash Bhamare",
  54 |             "email": "bhamare.avinash@gmail.com",
  55 |             "gender": "Male",
  56 |             "status": "inactive"
  57 |         }
  58 |    let response=await request.put("https://gorest.co.in/public/v2/users/8693823",{headers:AUTH_TOKEN, data:userData});
  59 |    //console.log(response); // JS object is return
  60 |    let responseBody=await response.json();
  61 |       console.log(responseBody);  // conversion of JS object to JSON string format
  62 | 
  63 |       console.log("Response code is : "+response.status());
  64 |       console.log("Response message is : "+response.statusText());
  65 | 
  66 | 
  67 | })
  68 | 
  69 | test("Deleting a single user", async({request})=>
  70 | {
  71 |    let response=await request.delete("https://gorest.co.in/public/v2/users/8693823",{headers:AUTH_TOKEN});
  72 |    //console.log(response); // JS object is return
> 73 |    let responseBody=await response.json();
     |                     ^ SyntaxError: Unexpected end of JSON input
  74 |      
  75 |       console.log("Response code is : "+response.status());
  76 |       console.log("Response message is : "+response.statusText());
  77 | 
  78 | })
```