describe('Logout', function () {

    url: String;
    url = "localhost:8100/";

    it('works', function () {

        browser.waitForAngularEnabled(false);
        browser.get(url);

        //LOGOUT
        element(by.id('logout')).click();
      /*  element(by.linkText("Logout")).click();

        //LOGIN
        element(by.id('dropdownBasic1')).click();
        element(By.xpath("//a[contains(@href, '/login')]")).click();
        element(By.id("inputEmail")).clear();
        element(By.id("inputEmail")).sendKeys("laura.2002@web.de");
        element(By.id("inputPassword")).clear();
        element(By.id("inputPassword")).sendKeys("123456");
        element(By.xpath("//form/div/div")).click();*/

        let EC = protractor.ExpectedConditions;
         browser.wait(EC.urlContains('localhost:8100/'), 10000);
    });
});
