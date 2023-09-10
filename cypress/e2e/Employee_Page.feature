@regression
Feature: OrangeHRM - Admin Page

    Background: Pre conditions
        Given I navigate to the OrangeHRM homepage
        And I type a username
        And I type a password
        And I click on the login button
        And I click on PIM button




    Scenario: Validate System Can Create Employee
        When I click on create button
        And I enter a FirstName
        And I enter a MiddleName
        And I enter a LastName
        And I enter EmployerID
        And I click create login details
        And I enter a UserName
        And I type a PassWord
        And I type a ConfirmPassWord
        And I click on Save button
        Then I should see a Successful Message


    Scenario:  Validate Employee Username Can Be Deleted
        When I click on DeleteButton
        And I click on yes Button
        Then I should see Successfully update message



    Scenario:  Validate Employee Can Be Edited
        When I click on edit Button
        And I click on last Name field to edit
        And I click on Save Button
        Then I should see a SuccessufulMessage
