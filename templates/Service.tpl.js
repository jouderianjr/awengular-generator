(function() {
    'use strict';

    angular
        .module('{{moduleName}}.service', [
        ])
        .factory('{{name}}', {{functionName}});

    /* @ngInject */
    function {{functionName}}(){
        return {

        };
    }
})();