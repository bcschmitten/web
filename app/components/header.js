(function () {
    'use strict';

    angular
    .module('app')
    .directive('header', function () {
        //Usage:
        //<header></header>
        return {
            restrict: 'E',
            templateUrl: 'app/components/header.html',
            scope: {},
            controller: controller,
            controllerAs: "vm"
        };

        function controller($scope) {
            var vm = this;
            vm.toggleMenu = toggleMenu;

            return vm;

            function toggleMenu() {
                $scope.$emit('Menu_Toggle');
            }
        }
    })
})();