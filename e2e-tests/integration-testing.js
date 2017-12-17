//jshint strict: false

//Check a common flow in the App between the different views
describe('Common App Navigation', function() {
    var EC = protractor.ExpectedConditions;

    it('Should browse between views', function() {
        browser.get('http://localhost:9000/');

        expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/home');

        //Click the staments processor item form the nav bar
        element.all(By.tagName('a')).get(2).click().then(function(elm) {
            //Assertion check if URL changed correctly
            expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/statements');
            
            //Check if the Statement Box is present
            var stamentesBox = element(by.css('.statement-container'));
            expect(stamentesBox.isPresent()).toBeTruthy();
        });

    });
});