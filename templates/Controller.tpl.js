(function() {
    'use strict';

    angular
        .module('{{moduleName}}.controller', [

        ])
        .controller('{{name}}', {{functionName}});

    /* @ngInject */
    function {{functionName}}($scope){
        var vm = this;

        initialize();

        function initialize(){

        }
    }
})();
