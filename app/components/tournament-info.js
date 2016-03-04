(function () {
    'use strict';

    angular
    .module('app')
    .directive('tournamentInfo', function () {
        //Usage:
        //<tournament-info></tournament-info>
        return {
            restrict: 'E',
            templateUrl: 'app/components/tournament-info.html',
            scope: {},
            controller: function ($scope) {

            }
        };
    })
})();