(function () {
    'use strict';

    angular
    .module('app')
    .directive('trainingNews', function () {
        //Usage:
        //<training-news></training-news>
        return {
            restrict: 'E',
            templateUrl: 'app/components/training-news.html',
            scope: {},
            controller: function ($scope) {

            }
        };
    })
})();