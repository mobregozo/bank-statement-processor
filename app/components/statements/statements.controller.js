(function () {
    'use strict';

    angular
        .module('statementProcessor.statements')
        .controller('StatementsCtrl', StatementsCtrl);

        StatementsCtrl.$inject = ['recordValidator','$scope'];

    function StatementsCtrl(recordValidator, $scope) {
        var vm = this;
        vm.table = {
            orderBy: 'record.reference',
            statementsList: [],
            fileSelected : false,
            fileError: false
        };

        //Reset Table Configuration
        function resetValues(){
            vm.table.statementsList = [];
            vm.table.fileSelected = false;
        }

        //Method to handle output from file reade directive
        vm.handleFileContent = function(parsedFile, error){
            vm.table.fileError = error;
            resetValues();
            if (vm.table.fileError) return;
            vm.table.statementsList = recordValidator.validateStatements(parsedFile);
            vm.table.fileSelected = true;
        };       
        
    }

})();