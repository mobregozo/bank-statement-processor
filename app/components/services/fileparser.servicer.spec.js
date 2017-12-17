(function() {
    
    'use strict';

    describe('Controller: fileParserService', function() {

        // load the controller's module
        beforeEach(module('statementProcessor'));

        var service;

        // Initialize the service fileParserService
        beforeEach(inject(function(fileParserService) {
            service = fileParserService;
        }));

        it('scheck parseXMLFile service function', function() {

            var inputRecordsXML =  '<records>\
                <record reference="168036">\
                    <accountNumber>NL91RABO0315273637</accountNumber>\
                    <description>Tickets for Rik Bakker</description>\
                    <startBalance>85.69</startBalance>\
                    <mutation>-19.48</mutation>\
                    <endBalance>66.21</endBalance>\
                </record>\
            </records>\
            ';            

            var validationResultXML = service.parseXMLFile(inputRecordsXML);
            
            var validReponseXML = [{"reference":"168036","accountNumber":"NL91RABO0315273637","description":"Tickets for Rik Bakker","startBalance":85.69,"mutation":-19.48,"endBalance":66.21}];

            expect(validationResultXML).toEqual(jasmine.objectContaining(validReponseXML));
        });


        it('scheck parseCSVFile service function', function() {
            
            var inputRecordsCSV = 'Reference,Account Number,Description,Start Balance,Mutation,End Balance\n106627,NL46ABNA0625805417,Subscription for Erik de Vries,80.76,-2.23,78.53\
            ';

            var validationResultCSV = service.parseCSVFile(inputRecordsCSV);
            
            var validReponseCSV = [{"reference":"106627","accountNumber":"NL46ABNA0625805417","description":"Subscription for Erik de Vries","startBalance":80.76,"mutation":-2.23,"endBalance":78.53}]

            expect(validationResultCSV).toEqual(jasmine.objectContaining(validReponseCSV));
        });

    });

})();