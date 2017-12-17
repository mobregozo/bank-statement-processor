(function() {

    'use strict';

    describe('Controller: HomeCtrl', function() {

        // load the controller's module
        beforeEach(module('statementProcessor'));

        var HomeCtrl, myScope ;

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope) {
            myScope = $rootScope.$new();
            HomeCtrl = $controller('HomeCtrl', {
                $scope: myScope
            });
        }));

        it('should Controller be injected', function() {
            expect(HomeCtrl).toBeDefined();
        });

        it('should HomeCtrl contain a welcome Message', function() {
            expect(HomeCtrl.welcomeMessage).toMatch('Welcome to the Bank Statement Processor');
        });

    });


})();