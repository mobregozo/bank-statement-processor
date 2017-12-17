(function() {
    
    'use strict';

    describe('Controller: StatementsCtrl', function() {

        // load the controller's module
        beforeEach(module('statementProcessor'));

        var StatementsCtrl, myScope, state, service;

        // Initialize the controller and a mock scope
        beforeEach(inject(function($rootScope, recordValidator, $controller) {
            myScope = $rootScope.$new();
            service = recordValidator;
        }));

        it('scheck validateStatements service function', function() {

            var InputRecords =  [{"reference":"106627","accountNumber":"NL46ABNA0625805417","description":"Subscription for Erik de Vries","startBalance":80.76,"mutation":-2.23,"endBalance":78.53},{"reference":"112806","accountNumber":"NL74ABNA0248990274","description":"Candy from Jan de Vries","startBalance":109.75,"mutation":-23.94,"endBalance":85.81},{"reference":"124020","accountNumber":"NL27SNSB0917829871","description":"Flowers for Rik Theu�","startBalance":72.16,"mutation":-18.94,"endBalance":53.22},{"reference":"170175","accountNumber":"NL43AEGO0773393871","description":"Candy for Richard Dekker","startBalance":11.62,"mutation":45.38,"endBalance":57},{"reference":"112806","accountNumber":"NL91RABO0315273637","description":"Subscription from Vincent Dekker","startBalance":68.31,"mutation":-6.31,"endBalance":62},{"reference":"112806","accountNumber":"NL91RABO0315273637","description":"Clothes from Richard Theu�","startBalance":31.03,"mutation":0.27,"endBalance":31.3},{"reference":"158644","accountNumber":"NL90ABNA0585647886","description":"Clothes for Willem Dekker","startBalance":98.5,"mutation":-42.77,"endBalance":55.73},{"reference":"181855","accountNumber":"NL93ABNA0585619023","description":"Flowers for Rik King","startBalance":106.92,"mutation":8.29,"endBalance":115.21},{"reference":"131702","accountNumber":"NL91RABO0315273637","description":"Tickets from Rik Theu�","startBalance":109.68,"mutation":-21.68,"endBalance":88},{"reference":"184927","accountNumber":"NL43AEGO0773393871","description":"Flowers for Richard Dekker","startBalance":42.43,"mutation":-43.43,"endBalance":-1},null]
            
            var validationResult = service.validateStatements(InputRecords);
    
            var validReponse = [{"errors":[],"record":{"reference":"106627","accountNumber":"NL46ABNA0625805417","description":"Subscription for Erik de Vries","startBalance":80.76,"mutation":-2.23,"endBalance":78.53}},{"errors":["Transaction references should be unique"],"record":{"reference":"112806","accountNumber":"NL74ABNA0248990274","description":"Candy from Jan de Vries","startBalance":109.75,"mutation":-23.94,"endBalance":85.81}},{"errors":[],"record":{"reference":"124020","accountNumber":"NL27SNSB0917829871","description":"Flowers for Rik Theu�","startBalance":72.16,"mutation":-18.94,"endBalance":53.22}},{"errors":[],"record":{"reference":"170175","accountNumber":"NL43AEGO0773393871","description":"Candy for Richard Dekker","startBalance":11.62,"mutation":45.38,"endBalance":57}},{"errors":["Transaction references should be unique"],"record":{"reference":"112806","accountNumber":"NL91RABO0315273637","description":"Subscription from Vincent Dekker","startBalance":68.31,"mutation":-6.31,"endBalance":62}},{"errors":["Transaction references should be unique"],"record":{"reference":"112806","accountNumber":"NL91RABO0315273637","description":"Clothes from Richard Theu�","startBalance":31.03,"mutation":0.27,"endBalance":31.3}},{"errors":[],"record":{"reference":"158644","accountNumber":"NL90ABNA0585647886","description":"Clothes for Willem Dekker","startBalance":98.5,"mutation":-42.77,"endBalance":55.73}},{"errors":[],"record":{"reference":"181855","accountNumber":"NL93ABNA0585619023","description":"Flowers for Rik King","startBalance":106.92,"mutation":8.29,"endBalance":115.21}},{"errors":[],"record":{"reference":"131702","accountNumber":"NL91RABO0315273637","description":"Tickets from Rik Theu�","startBalance":109.68,"mutation":-21.68,"endBalance":88}},{"errors":[],"record":{"reference":"184927","accountNumber":"NL43AEGO0773393871","description":"Flowers for Richard Dekker","startBalance":42.43,"mutation":-43.43,"endBalance":-1}}]

            expect(validationResult).toEqual(jasmine.objectContaining(validReponse));
        });

    });

})();