Feature: To test the login functionality in Survey Sparrows app

    @login
    Scenario: Login to the Survey Sparrows App
        Given the user is on the login window
        When the user submits the login action with valid credentials
        Then user is logged in and homepage is displayed