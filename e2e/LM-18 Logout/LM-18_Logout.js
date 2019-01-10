describe('Logout', function () {

    url: String;
    url = "localhost:8100/";

    it('works', function () {

        browser.waitForAngularEnabled(false);
        browser.get(url);

        //LOGOUT
        element(by.id('logout')).click();

        // expected Conditions
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.urlContains('localhost:8100/'), 10000);

        var loginButton = element(by.id('login'));
        browser.wait(EC.elementToBeClickable(loginButton), 10000);

        var registerButton = element(by.id('register'));
        browser.wait(EC.elementToBeClickable(registerButton), 10000);

        var forgotPasswordButton = element(by.id('forgot_password'));
        browser.wait(EC.elementToBeClickable(forgotPasswordButton), 10000);

    });
});
