(function() {
    'use strict';

    angular
        .module('statementProcessor.home', [])
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider.state('app.home', {
            url: 'home',
            views: {
                'content': {
                    templateUrl: 'home/home.html',
                    controller: 'HomeCtrl',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();