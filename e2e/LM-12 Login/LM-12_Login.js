describe('Login', function () {

    url: String;
    url = "localhost:8100/";

    it('works', function () {

        browser.waitForAngularEnabled(false);
        browser.get(url);

        //LOGOUT
        element(by.id('logout')).click();
    

        element(By.id("email")).sendKeys("laura.meyer@hs-furtwangen.de");
        element(By.id("password")).sendKeys("123456789");


        element(by.id('login')).click();


        //expected Conditions
        let EC = protractor.ExpectedConditions;
        var logoutButton = element(by.id('logout'));
        browser.wait(EC.elementToBeClickable(logoutButton), 10000);


    });
});
