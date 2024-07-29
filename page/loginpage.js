const { threadId } = require("worker_threads");

class loginpage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.recruitmentLink = page.locator('a.oxd-main-menu-item[href*="recruitment"]');
        this.addCandidateButton = page.locator('button.oxd-button--secondary:has-text("Add")');
        this.firstNameInput = page.locator('input[placeholder="First Name"]');
        this.middleNameInput = page.locator('input[placeholder="Middle Name"]');
        this.lastNameInput = page.locator('input[placeholder="Last Name"]');
        this.emailInput = page.locator('input[placeholder="Type here"]').first();
        this.saveButton = page.locator('button.oxd-button--secondary:has-text("Save")');
        this.candidateName = page.locator("xpath=//html/body/div/div[1]/div[2]/div[2]/div[1]/form/div[1]/div[1]/div/div[2]/p"); //xpath=//div/p[@class='oxd-text oxd-text--p'][1]"); 
        this.candidateNameInput = page.locator('input[placeholder="Type for hints..."]');
        this.DateOfApplicationInput = page.locator('input[placeholder="From"]');
        this.searchButton = page.locator('button.oxd-button--secondary:has-text("Search")');
        this.selectCandidate = page.locator("button.oxd-icon-button.oxd-table-cell-action-space").first();
        this.toggleInput = page.locator('div.oxd-switch-wrapper input[type="checkbox"]');
        this.middleNameInput = page.locator('input[placeholder="Middle Name"]');
        this.saveButtonEdited = page.locator("button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space");
        this.viewCandidateButton = page.locator("button.oxd-icon-button.oxd-table-cell-action-space").nth(1);
        this.deleteButton = page.locator('button.oxd-button--label-danger:has-text("Yes, Delete")');
        this.noRecordsFound = page.locator('span.oxd-text--span:has-text("No Records Found")');
    }
}

module.exports = { loginpage };