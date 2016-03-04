(function () {
    'use strict';

    angular
    .module('app')
    .directive('footer', function () {
        //Usage:
        //<footer></footer>
        return {
            restrict: 'E',
            templateUrl: 'app/components/footer.html',
            scope: {},
            controller: function ($scope) {
                $scope.year = new Date().getFullYear();
            }
        };
    })
})();