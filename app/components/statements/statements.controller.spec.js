(function() {
    
    'use strict';

    describe('Controller: StatementsCtrl', function() {

        // load the controller's module
        beforeEach(module('statementProcessor'));

        var StatementsCtrl, myScope, state, service;

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope, $stateParams, recordValidator) {
            myScope = $rootScope.$new();
            state = $stateParams;
            service = recordValidator;
            StatementsCtrl = $controller('StatementsCtrl', {
                $scope: myScope
            });
        }));

        it('should Controller be injected', function() {
            expect(StatementsCtrl).toBeDefined();
        });

        var tableDefaultConfig =  {
            orderBy: 'record.reference',
            statementsList: [],
            fileSelected : false,
            fileError: false
        };

        it('should StatementsCtrl contain default table configuration', function() {
            expect(StatementsCtrl.table).toEqual(jasmine.objectContaining(tableDefaultConfig));
        });

    });


})();