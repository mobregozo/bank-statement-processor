(function() {
    'use strict';

    angular
        .module('statementProcessor.statements', [])
        .config(config);
    
    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider.state('app.statements', {
            url: 'statements',
            views: {
                'content': {
                    templateUrl: 'statements/statements.html',
                    controller: 'StatementsCtrl',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();