(function() {
    'use strict';

    angular
        .module('{{moduleName}}', [
        ])
        .factory('{{name}}', {{functionName}});

    /* @ngInject */
    function {{functionName}}(){
        return {

        };
    }
})();