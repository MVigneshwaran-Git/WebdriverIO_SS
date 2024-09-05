const { Given, When, Then } = require("@wdio/cucumber-framework")
const loginPage = require("../page-objects/ss-login-page")
Given('the user is on the login window', function () {

    var application_url = "https://app.surveysparrow.com/"
    browser.url(application_url);
    browser.maximizeWindow();


});

When('the user submits the login action with valid credentials', function () {
    var username = "vickydmist@gmail.com"
    var pass = "VigneshDmist20$"
    loginPage.enterCredentials(username, pass)
    loginPage.clickLogin()




});

Then('user is logged in and homepage is displayed', function () {
    loginPage.verifyLogin()

});