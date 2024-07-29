// @ts-check
import { env } from "../env";
import { faker } from "@faker-js/faker";
import { getFormattedDate } from "../utils";
const { test, expect } = require("@playwright/test");
const { loginpage } = require('../page/loginpage');

global.testData = {
  firstName: faker.person.firstName(),
  middleName: faker.person.middleName(),
  newMiddleName: faker.person.middleName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
};

test.beforeEach(async ({ page }) => {
  const el = new loginpage(page);
  await page.goto(env.SYSTEM_UNDER_TESTING);
  await el.usernameInput.fill(env.MY_USER);
  await el.passwordInput.fill(env.MY_PASSWRD);
  await el.loginButton.click();
});

test("Test Case 1 - Login", async ({ page }) => {
  const dashboardText = await page.textContent("h6.oxd-topbar-header-breadcrumb-module");
  expect(dashboardText).toBe("Dashboard");
});

test("Test Case 2 - Recruitment: Create", async ({ page }) => {
const el = new loginpage(page);
  await el.recruitmentLink.click();
  await el.addCandidateButton.click();
  await el.firstNameInput.fill(global.testData.firstName);
  await el.middleNameInput.fill(global.testData.middleName);
  await el.lastNameInput.fill(global.testData.lastName);
  await el.emailInput.fill(global.testData.email);
  await el.saveButton.click();
  await expect(el.candidateName).toHaveText(
    new RegExp(
      `${global.testData.firstName} ${global.testData.middleName} ${global.testData.lastName}`
    ),
    { timeout: 10000 }
  );
});

test("Test Case 3 - Recruitment: Edit", async ({ page }) => {
  const el = new loginpage(page);
  await el.recruitmentLink.click();
  await page.waitForTimeout(2000);
  await el.candidateNameInput.fill(global.testData.firstName);
  await page.waitForTimeout(3000);
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  await el.DateOfApplicationInput.fill(getFormattedDate());
  await el.searchButton.click();
  await el.selectCandidate.click();
  await expect(el.candidateName).toHaveText(
    new RegExp(
      `${global.testData.firstName} ${global.testData.middleName} ${global.testData.lastName}`
    ),
    { timeout: 10000 }
  );
  await el.toggleInput.click();
  await el.middleNameInput.fill(global.testData.newMiddleName);
  await el.saveButtonEdited.click();
  await page.waitForTimeout(3000);
  await expect(el.candidateName).toHaveText(
    new RegExp(
      `${global.testData.firstName} ${global.testData.newMiddleName} ${global.testData.lastName}`
    ),
    { timeout: 10000 }
  );
});

test("Case 4 - Recruitment: Delete Candidate", async ({ page }) => {
  const el = new loginpage(page);
  await el.recruitmentLink.click();
  await page.waitForTimeout(2000);
  await el.candidateNameInput.fill(global.testData.firstName);
  await page.waitForTimeout(3000);
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  await el.DateOfApplicationInput.fill(getFormattedDate());
  await el.searchButton.click();
  await el.viewCandidateButton.click();
  await el.deleteButton.click();
  await expect(el.noRecordsFound).toBeVisible();
});