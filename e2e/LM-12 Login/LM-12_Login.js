describe('Login', function () {

    url: String;
    url = "localhost:8100/";

    it('works', function () {

        browser.waitForAngularEnabled(false);
        browser.get(url);

        //LOGOUT
        element(by.id('logout')).click();
        
        browser.driver.sleep(5000);

        element(By.id("email")).sendKeys("laura.meyer@hs-furtwangen.de");
        element(By.id("password")).sendKeys("123456789");


        browser.driver.sleep(5000);
        element(by.id('login')).click();

        browser.driver.sleep(5000);

        //expected Conditions

        let EC = protractor.ExpectedConditions;
        var logoutButton = element(by.id('logout'));
        browser.wait(EC.elementToBeClickable(logoutButton), 10000);


    });
});
