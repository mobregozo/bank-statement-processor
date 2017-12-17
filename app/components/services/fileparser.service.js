(function() {
    'use strict';

    angular
        .module('statementProcessor.services.parser',[])
        .factory('fileParserService', factoryFunction);

    factoryFunction.$inject = [];

    function factoryFunction() {
        return {
            parseCSVFile: parseCSV,
            parseXMLFile: parseXML
        };

        // parse CSV File - return statements
        function parseCSV( fileContent ){            
            //           
            var lines = fileContent.split('\n');
            //Remove first line with Property names.
            lines.shift(); 
            return lines.map( function(element){
                var parsedLine = element.split(",");
                if (parsedLine.length <= 1 ) return null;
                return {
                    reference : parsedLine[0],
                    accountNumber: parsedLine[1],
                    description: parsedLine[2],
                    startBalance: Number(parsedLine[3]),
                    mutation: Number(parsedLine[4]),
                    endBalance: Number(parsedLine[5]),
                
                };
            });
        }

        // parse XML File - return statements
        function parseXML( fileContent ){            
            
            var parser = new DOMParser();
            var xmlDoc =  parser.parseFromString(fileContent,"text/xml");

            var records = xmlDoc.getElementsByTagName('records')[0].getElementsByTagName('record');
            records = Array.from(records);
            var result = [];            
            for (var r in records){
                result.push ({
                    reference : records[r].getAttribute('reference'),
                    description: records[r].getElementsByTagName("description")[0].childNodes[0].nodeValue,
                    accountNumber: records[r].getElementsByTagName("accountNumber")[0].childNodes[0].nodeValue,
                    startBalance: Number(records[r].getElementsByTagName("startBalance")[0].childNodes[0].nodeValue),
                    mutation: Number(records[r].getElementsByTagName("mutation")[0].childNodes[0].nodeValue),
                    endBalance: Number(records[r].getElementsByTagName("endBalance")[0].childNodes[0].nodeValue),
                });
                
            }

            return result;

        }
    }
})();