(function() {
    'use strict';

    angular.module('statementProcessor', 
        ['ui.router', 
        'templates',
        'ui.bootstrap',
        'statementProcessor.home',
        'statementProcessor.statements',
        'statementProcessor.services',
        'statementProcessor.directives']
    )

    .config(function($stateProvider, $urlRouterProvider) {

        // Abstract state of the app
        $stateProvider.state('app', {
            url: '/',
            abstract: true,
            templateUrl: 'header.html'
        });

        // Default route 
        $urlRouterProvider.otherwise('/home');
    });
})();