import{test, expect} from "@playwright/test";

let AUTH_TOKEN={'Authorization':'Bearer 832b525a58452c85a7a1a42241ac9df1f2176c61e67fa6385609f301c49034bf'};

test("Fetch a multiple user", async({request})=>
{
   let response=await request.get("https://gorest.co.in/public/v2/users",{headers:AUTH_TOKEN});
   //console.log(response); // JS object is return
   let responseBody=await response.json();
      console.log(responseBody);  // conversion of JS object to JSON string format

      console.log("Response code is : "+response.status());
      console.log("Response message is : "+response.statusText());

})

test("Fetch a single user", async({request})=>
{
   let response=await request.get("https://gorest.co.in/public/v2/users/8693823",{headers:AUTH_TOKEN});
   //console.log(response); // JS object is return
   let responseBody=await response.json();
      console.log(responseBody);  // conversion of JS object to JSON string format

      console.log("Response code is : "+response.status());
      console.log("Response message is : "+response.statusText());

})

test("Creating a new Resource user", async({request})=>
{
    let userData ={

            "name": "Avinash Bhamare",
            "email": "bhamare.avinash@gmail.com",
            "gender": "Male",
            "status": "active"
        }
   let response=await request.post("https://gorest.co.in/public/v2/users",{headers:AUTH_TOKEN, data:userData});
   //console.log(response); // JS object is return
   let responseBody=await response.json();
      console.log(responseBody);  // conversion of JS object to JSON string format

      console.log("Response code is : "+response.status());
      console.log("Response message is : "+response.statusText());


})

test("Updating a new created Resource user", async({request})=>
{
    let userData ={

            "name": "Avinash Bhamare",
            "email": "bhamare.avinash@gmail.com",
            "gender": "Male",
            "status": "inactive"
        }
   let response=await request.put("https://gorest.co.in/public/v2/users/8693823",{headers:AUTH_TOKEN, data:userData});
   //console.log(response); // JS object is return
   let responseBody=await response.json();
      console.log(responseBody);  // conversion of JS object to JSON string format

      console.log("Response code is : "+response.status());
      console.log("Response message is : "+response.statusText());


})

test("Deleting a single user", async({request})=>
{
   let response=await request.delete("https://gorest.co.in/public/v2/users/8693823",{headers:AUTH_TOKEN});
   //console.log(response); // JS object is return
      
      console.log("Response code is : "+response.status());
      console.log("Response message is : "+response.statusText());

})