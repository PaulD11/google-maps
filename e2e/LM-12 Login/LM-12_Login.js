describe('Login', function () {

    url: String;
    url = "localhost:8100/";

    it('works', function () {

        browser.waitForAngularEnabled(false);
        browser.get(url);

        //LOGOUT
        element(by.id('logout')).click();
        browser.driver.sleep(5000);


        element(By.name("password")).click();
        browser.driver.sleep(5000);


        inputField = element(By.name("password"));
      browser.driver.executeScript("arguments[0].setAttribute('value', '" + 123456 + "')", inputField);
        browser.driver.sleep(5000);
        /*    
         .value("123456789");
    element(by.ioninput[name='email']).sendKeys("test");



 
  element(by.ionInput('email')).sendKeys("12345678");
 
      actions = new Actions(driver);
    actions.moveToElement(element.by.id("email"));
    actions.click();
    actions.sendKeys("Some Name");
    actions.build().perform();element(By.id("email")).click();
    element(By.id("email")).sendKeys("laura.meyer@hs-furtwangen.de");

    


    // LOGIN
    element(by.id('login')).click();
/*
    // expected Conditions
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('localhost:8100/'), 10000);
    var logoutButton = element(by.id('logout'));
    browser.wait(EC.elementToBeClickable(logoutButton), 10000);*/

    });
});
