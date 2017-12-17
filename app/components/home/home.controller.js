(function() {
    'use strict';

    angular
        .module('statementProcessor.home')
        .controller('HomeCtrl', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        
        var vm = this;
        vm.welcomeMessage = 'Welcome to the Bank Statement Processor';
    }

})();