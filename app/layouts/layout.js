(function () {
    'use strict';

    angular.module('app').controller('LayoutController', ControllerFactory);

    ControllerFactory.$inject = ['$scope', '$mdSidenav'];

    function ControllerFactory($scope, $mdSidenav) {
        var vm = this;

        $scope.$on('$stateChangeStart', onStateChangeStart);
        $scope.$on('Menu_Toggle', onMenuToggle);
        return vm;


        function onStateChangeStart() {
            $mdSidenav('MenuLeft').close();
        }

        function onMenuToggle() {
            $mdSidenav('MenuLeft').toggle();
        }
    };
})();
