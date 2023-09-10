import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I click on Admin", () => {
  cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text").click();
});
When("I click on Add button", () => {
  cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click();
});
When("I enter a user role", () => {
  cy.get("div[class='oxd-grid-2 orangehrm-full-width-grid'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) i:nth-child(1)")
    .should("be.visible")
    .click();
  cy.get('div[role="listbox"]').should("be.visible");
  cy.get('div[role="listbox"] > div:nth-of-type(2)')
    .should("be.visible")
    .click();
});
When("I select a status", () => {
  cy.get(
    "div:nth-of-type(3) > .oxd-input-field-bottom-space.oxd-input-group > div:nth-of-type(2) > .oxd-select-wrapper > .oxd-select-text  .bi-caret-down-fill.oxd-icon.oxd-select-text--arrow"
  ).should("be.visible").click();
  cy.get('div[role="listbox"] > div:nth-of-type(2)').should("be.visible").click();
});
When("I enter a password", () => {
  cy.get(".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input").type("adminUser@123", { force: true });
});
When("I enter employee name", () => {
  cy.get(".oxd-autocomplete-text-input > input").type("Maggie Manning");
  cy.wait(3000);
  cy.get(".oxd-autocomplete-option").dblclick();
});
When("I enter userName", () => {
  cy.get(":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Maretsea@123");
});
When("I enter confirm password", () => {
  cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("adminUser@123",);
});

Then("I click on save button", () => {
  cy.get(".oxd-button--secondary").click({ force: true });
});
Then("I should see a Successful message", () => {
  cy.get('.oxd-table-filter-header-title > .oxd-text').should("be.visible")
});




//delete steps
When("I click on deleteButton", () => {
  cy.get(':nth-child(5) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click({ force: true });
});
When("I click on yesButton", () => {
  cy.get('.oxd-button--label-danger').click();
});
When("I should see successfully delete message", () => {
  expect("cy.get(':nth-child(5) > .oxd-table-row").to.not.equal("cy.get(':nth-child(5) > .oxd-table-row > :nth-child(2) > div')");
});



//Edit steps

When("I click on editButton", () => {
  cy.get(':nth-child(25) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({ force: true })
});
When("I click on username field to edit", () => {
  cy.get(':nth-child(2) > .oxd-input').click().type("456{enter}")
});
When("I click on password", () => {
  cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("adminuser@123");
});
When("I click on confirm password", () => {
  cy.get('.oxd-icon.bi-check.oxd-checkbox-input-icon').type("adminuser@123");
});
When("I should see successfully updated message", () => {
  cy.get(':nth-child(25) > .oxd-table-row').should("be.visible")
});