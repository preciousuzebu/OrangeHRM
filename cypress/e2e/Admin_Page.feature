@regression
Feature: OrangeHRM - Admin Page

    Background: Pre conditions
        Given I navigate to the OrangeHRM homepage
        And I type a username
        And I type a password
        And I click on the login button
        And I click on Admin


    Scenario: Validate System Can Create Admin
        When I click on Add button
        And I enter a user role
        And I select a status
        And I enter a password
        And I enter employee name
        And I enter userName
        And I enter confirm password
        And I click on save button
        Then I should see a Successful message


    Scenario:  Validate Admin Username Can Be Edited
        When I click on deleteButton
        And I click on yesButton
        Then I should see successfully delete message


    Scenario:  Validate Admin Username Can Be Deleted
        When I click on deleteButton
        And I click on yesButton
        Then I should see successfully delete message