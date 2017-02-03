(function() {
    'use strict';

    angular
        .module('{{moduleName}}.controller', [

        ])
        .controller('{{name}}', {{functionName}});

    /* @ngInject */
    function {{functionName}}($scope){

        initialize();

        function initialize(){

        }
    }
})();
