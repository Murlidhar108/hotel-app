import { test, expect } from '@playwright/test';

const UI_URL = "http://localhost:5173/"

test('should allow the user to sign in ', async ({ page }) => {
  await page.goto(UI_URL);

  // get the sign in button 
  await page.getByRole("link", {name: "Sign In"}).click();

  // check if we able to go to sign in page by clicking on sign in button 
  await expect(page.getByRole("heading", {name: "Sign In"})).toBeVisible();

  // filling the email and password to sign in 
  await page.locator("[name=email]").fill("jatinsoni484384@gmail.com");
  await page.locator("[name=password]").fill("000000");

  // get the login button and click on it
  await page.getByRole("button", {name: "Login"}).click();

  // check if login button works, if works then we will get toast = sign in successful
  await expect(page.getByText("Sign in Successful!")).toBeVisible();
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
});


test("should allow user to register", async ({page}) => {
  await page.goto(UI_URL);

  // get the sign in button 
  await page.getByRole("link", {name: "Sign In"}).click();

  // got o create an account here 
  await page.getByRole("link", {name: "Create an account here"}).click();

  // check if we able to go to register page 
  await expect(page.getByRole("heading", {name: "Create an Account"})).toBeVisible();

  // filling the contents
  await page.locator("[name=firstName]").fill("test_firstName");
  await page.locator("[name=lastName]").fill("test_lastName");
  await page.locator("[name=email]").fill("test_gmail@gmail.com");
  await page.locator("[name=password]").fill("test_password");
  await page.locator("[name=confirmPassword]").fill("test_password");

  // clicking on register
  await page.getByRole("button", {name: "Create Account"}).click();

  // check if we are registered or not 
  await expect(page.getByText("Registration success")).toBeVisible();
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
})