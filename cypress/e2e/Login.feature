@regression
Feature:  OrangeHRM- Login Page

    Scenario: Validate Login Form submission
        Given I navigate to the OrangeHRM homepage
        And I type a username
        And I type a password
        And I click on the login button