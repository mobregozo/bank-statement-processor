(function () {
    'use strict';

    angular
        .module('statementProcessor.directives',[])
        .directive('fileHandler', dataservice);

    dataservice.$inject = ['fileParserService'];

    function dataservice(fileParserService) {
        return {
            link: linkfunction,
            restrcit: 'A',
            scope: {
                fileHandler: '&'
            }
        };

        function linkfunction(scope, element, attrs) {  
            element.bind("change", function(e){          
              var fileContent = e.target.files[0];
              if (fileContent) {
                var value = {};
                var reader = new FileReader();                
                reader.onload = function (e) {
                    switch(fileContent.name.split('.').pop()){
                        case 'csv':
                            value = fileParserService.parseCSVFile(e.target.result);
                            scope.fileHandler({file: value });
                            break;
                        case 'xml':
                            value = fileParserService.parseXMLFile(e.target.result);
                            scope.fileHandler({file: value });
                            break;
                        default: {                        
                            scope.fileHandler({file:null, error:true});
                            break;
                        }
                    }
                    scope.$apply();
                };
                reader.readAsText(e.target.files[0]);    
              }
            });        
        } 
    }
})();