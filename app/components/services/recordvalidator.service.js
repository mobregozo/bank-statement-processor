(function() {
    'use strict';

    angular
        .module('statementProcessor.services.validator',[])
        .factory('recordValidator', recordValidator);

    recordValidator.$inject = [];

    function recordValidator() {
        return {
            validateStatements: validateFn
        };

        function checkUniqueIds(statements){
            var counts = {};
            for (var i = 0; i < statements.length; i++) {
                var refrence = statements[i].reference;
                counts[refrence] = counts[refrence] ? counts[refrence] + 1 : 1;
            }
            return counts;
        }

        function checkErrors(statement, ids){

            var errors = [];

            //Check Balance
            if ( Number((statement.startBalance + statement.mutation).toFixed(2)) !== Number(statement.endBalance)){
                errors.push('Incorrect Balance');
            }

            //cechk Duplicates
            if (ids[statement.reference] > 1){
                errors.push('Transaction references should be unique');
            }

            return errors;

        }

        //statements validator
        function validateFn(statements) {
            if (statements.length === 0) return;
            
            //Remove empty lines
            var filteredStatements = statements.filter( function(element){
                return element;
            });

            var referencesCount = checkUniqueIds(filteredStatements);

            return filteredStatements.map(function(stamentElement){
                var errors = checkErrors(stamentElement, referencesCount);
                return{
                    errors: errors,
                    record: stamentElement
                };
            });

        }
    }
})();