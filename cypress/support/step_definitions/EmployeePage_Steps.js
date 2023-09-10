import { When, Then } from "@badeball/cypress-cucumber-preprocessor";


When("I click on PIM button", () => {
    cy.get('li:nth-of-type(2) > .oxd-main-menu-item > .oxd-main-menu-item--name.oxd-text.oxd-text--span').click();
})
When("I click on create button", () => {
    cy.get('.orangehrm-header-container .oxd-button--secondary').click({force:true});
})


When("I enter a FirstName", () => {
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("Mike");
})
When("I enter a MiddleName", () => {
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type("Lawrence");
})
When("I enter a LastName", () => {
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("Woods");
})

When("I enter EmployerID", () => {
    cy.get("[class=\'oxd-grid-2 orangehrm-full-width-grid'] input").click().type("008");
})
When("I click create login details", () => {
    cy.get(".--label-right.oxd-switch-input").click();
})
When("I enter a UserName", () => {
    cy.get("div:nth-of-type(3) > .orangehrm-full-width-grid.oxd-grid-2 > div:nth-of-type(1) > .oxd-input-field-bottom-space.oxd-input-group  .oxd-input").type("Miksherash123");
})
When("I type a PassWord", () =>{
    cy.get(".oxd-grid-item.oxd-grid-item--gutters.user-password-cell > .oxd-input-field-bottom-space.oxd-input-group  .oxd-input").type("Mikewoods@123")
})
When("I type a ConfirmPassWord", () =>{
    cy.get(".oxd-grid-item--gutters:nth-of-type(2) [type='password']").type("Mikewoods@123")
})
When("I click on Save button", () => {
 cy.get(".oxd-form-actions > .orangehrm-left-space.oxd-button.oxd-button--medium.oxd-button--secondary").click({force:true}).should("be.visible")
})
Then("I should see a Successful Message", () =>{
cy.contains("Personal Details")
})



//Delete Steps
When("I click on DeleteButton", () =>{
    cy.get("div:nth-of-type(2) > div[role='row'] > div:nth-of-type(9) > div > button:nth-of-type(1) > .bi-trash.oxd-icon").click({force:true});
   })
   
   When("I click on yes Button", () =>{
       cy.get('.oxd-button--label-danger').click();
   })
   
   Then("I should see Successfully update message", () =>{
      cy.get(".oxd-toast.oxd-toast--success.oxd-toast-container--toast").should("not.contain.text", "Unsuccessfully")
   })



   //Edit Steps
   

When("I click on edit Button", () => {
    cy.get("div:nth-of-type(8) > div[role='row'] > div:nth-of-type(9) > div > button:nth-of-type(2) > .bi-pencil-fill.oxd-icon").click({force:true});
})
When("I click on last Name field to edit", () => {
    cy.get("div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > .oxd-input-field-bottom-space.oxd-input-group  .oxd-input").click().type("899{enter}")})

When("I click on Save Button", () => {
    cy.get(".oxd-form-actions > .orangehrm-left-space.oxd-button.oxd-button--medium.oxd-button--secondary").click({multiple:true}).should("be.visible")
   })
Then("I should see a SuccessufulMessage", () =>{
    cy.get(".orangehrm-full-width-grid.oxd-grid-1 > .oxd-grid-item.oxd-grid-item--gutters > .oxd-input-group > .oxd-input-group__label-wrapper").should("have.text", "Employee Full Name")
})
// When("I click on last Name field to edit", () => {
//     cy.get("div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > .oxd-input-field-bottom-space.oxd-input-group  .oxd-input").click().type("899{enter}")
// })
// When("I click on Save Button", () => {
//     cy.get(".oxd-form-actions > .orangehrm-left-space.oxd-button.oxd-button--medium.oxd-button--secondary").click({multiple:true}).should("be.visible")
//    })
// Then("I should see a SuccessufulMessage", () =>{
//     cy.get(".orangehrm-full-width-grid.oxd-grid-1 > .oxd-grid-item.oxd-grid-item--gutters > .oxd-input-group > .oxd-input-group__label-wrapper").should("have.text", "Employee Full Name")
// })