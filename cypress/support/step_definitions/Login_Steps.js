import  { Given, When }  from "@badeball/cypress-cucumber-preprocessor";

const url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"


Given('I navigate to the OrangeHRM homepage' , () => {
    cy.visit(url);
})

When("I type a username", () => {
  cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "Admin"
  );
  });
  
  When("I type a password", () => {
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
      "admin123"
    );
  });
  
  When("I click on the login button", () => {
    cy.get(".oxd-button").click();
  });

 