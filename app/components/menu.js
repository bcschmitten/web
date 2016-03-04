(function () {
    'use strict';

    angular
    .module('app')
    .directive('menu', function () {
        //Usage:
        //<menu orientation="vertical"></menu>
        return {
            restrict: 'E',
            templateUrl: 'app/components/menu.html',
            scope: { orientation: '@' },
            controller: controller,
            controllerAs: "vm"
        };

        function controller($scope, $state, $filter, dataContext) {
            var vm = this;
            vm.menus = [];
            vm.navigateTo = navigateTo;
            vm.orientationVertical = ($scope.orientation === 'vertical');

            init($state);
            return vm;


            function init($state) {
                var states = $state.get();

                dataContext.getTeams()
                    .then(function (data) {
                        var teams = $filter('orderBy')(data, 'Name');
                        angular.forEach(teams, function (t) {
                            states.push({
                                menuSection: 'Interclub',
                                menuName: t.Name
                            });
                        });

                        vm.menus = [];
                        addSection(states, 'Club Info');
                        addSection(states, 'Interclub');
                        addSection(states, 'Junioren');
                        addSection(states, 'Agendas');
                        addSection(states, 'Galerie');
                        addSection(states, 'Über Badminton');
                        addSection(states, 'Sponsoren');
                        addSection(states, 'Links');
                    });
            }

            function addSection(states, name) {
                var statesBySection = $filter('filter')(states, { menuSection: name }, true);
                if (statesBySection.length > 0) vm.menus.push({ name: name, states: statesBySection });
            }

            function navigateTo(state) {
                $state.go(state);
            }
        }
    })
})();