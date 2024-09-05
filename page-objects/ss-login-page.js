const elementFinder = require('../utilities/helper');
const performAction = require("../utilities/actions_on_elements"); // perform action holds methods used to perform actions on webelements


const SS_LoginPage_Locators = [

    { element: "emailbox", locator: "css", value: "//label[text()='Email Address']" },
    { element: "passwordbox", locator: "id", value: "#loginPassword" },
    { element: "loginbutton", locator: "id", value: "#loginButton" }
]

class SSLogin {

    get EmailBox() { return $(elementFinder(SS_LoginPage_Locators, "emailbox")); }
    get PasswordBox() { return $(elementFinder(SS_LoginPage_Locators, "passwordbox")); }
    get LoginButton() { return $(elementFinder(SS_LoginPage_Locators, "loginbutton")); }



    async enterCredentials(username, password) {
        var title = await browser.getTitle();
        console.log(username);
        console.log(title);

        const text = await this.EmailBox.getText();
        console.log(text);
        // await this.EmailBox.setValue(username)
        // await this.LoginButton.click()
        // await this.PasswordBox.setValue(password)


    }
    async clickLogin() {
        // await this.LoginButton.click()
        console.log("hi");

    }
    async verifyLogin() {
        console.log("done now")

    }
}

module.exports = new SSLogin();