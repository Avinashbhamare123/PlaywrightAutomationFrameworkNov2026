import{test,expect} from "../../src/fixtures/apiFixtures.js"

const TOKEN=process.env.API_TOKEN;

let AUTH_TOKEN={Authorization:`Bearer ${TOKEN}`};
let userId:number;

test.describe.serial("End to End Users API Test Cases", ()=>
{

    test("Get ALL Users API Test", async({apiHelper})=>
{
  let response=await apiHelper.getRequest("/public/v2/users",AUTH_TOKEN);

  console.log("Response Body is : "+response.responseBody);
  expect(response.statusCode).toBe(200);
  expect(response.responseBody.length).toBeGreaterThan(5);

})

test("Create a New User Test", async({apiHelper})=>
{
    let userData ={

            "name": "Avinash Bhamare",
            "email": `bhamare${Date.now()}@gmail.com`,
            "gender": "Male",
            "status": "inactive"
        }

    let response=await apiHelper.postRequest("/public/v2/users", userData, AUTH_TOKEN);
    
    console.log("Response body is : "+response.responseBody);
    expect(response.statusCode).toBe(201);

    expect(response.responseBody.name).toBe(userData.name);

    userId=response.responseBody.id;
    console.log("User Id is : "+userId);
})

test("Update the created User Test", async({apiHelper})=>
{
    let userData ={

            "name": "Avinash Bhamare123",
            "email": `bhamare${Date.now()}@gmail.com`,
            "gender": "Male",
            "status": "inactive"
        }

    let response=await apiHelper.updateRequest(`/public/v2/users/${userId}`, userData, AUTH_TOKEN);
    
    console.log("Response body is : "+response.responseBody);
    expect(response.statusCode).toBe(200);

    expect(response.responseBody.name).toBe(userData.name);
    expect(response.responseBody.status).toBe(userData.status);
    
})

test("Delete the created User Test", async({apiHelper})=>
{

    let response=await apiHelper.deleteRequest(`/public/v2/users/${userId}`, AUTH_TOKEN);
    
    expect(response.statusCode).toBe(204);
    expect(response.statusText).toBe("No Content");
    
})
});
