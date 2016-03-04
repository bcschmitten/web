(function () {
    'use strict';

    angular
        .module('app.admin')
        .directive('mainMenu', function () {
            //Usage:
            //<main-menu></main-menu>
            return {
                restrict: 'E',
                scope: {},
                templateUrl: '../app/admin/components/mainMenu.html',
                controller: controller,
                controllerAs: "vm"
            };

            function controller($scope, $state, $filter, dialogs, authService) {
                var vm = this;
                vm.sections = [];
                vm.userDisplayName = function () { return authService.authentication.displayName; };
                vm.isAuthenticated = function () { return authService.authentication.isAuthenticated; };

                vm.logout = logout;

                init($state);
                return vm;


                function navigateTo(state) {
                    $state.go(state);
                }

                function newRealEstate() {
                    dialogs.editRealEstate(0, '{{\'lbl.realEstate\' | translate}}')
                        .then(function (response) {
                            if (response.dialogResult === 'OK') $state.go('realEstate', { id: response.data.Id });
                        });
                }

                function newUser() {
                    dialogs.editUser(0, '{{\'lbl.user\' | translate}}')
                        .then(function (response) {
                            if (response.dialogResult === 'OK') $state.go('user', { id: response.data.Id });
                        });
                }

                function logout() {
                    authService.logout();
                    $state.go('login', null, { location: "replace" });
                }

                function init($state) {
                    var states = $state.get();
                    states.splice(0, 0, {
                        menuName: 'lbl.realEstate',
                        menuIcon: '&#xE145;',
                        menuSection: 'lbl.add',
                        action: newRealEstate
                    });
                    states.splice(1, 0, {
                        menuName: 'lbl.user',
                        menuIcon: '&#xE145;',
                        menuSection: 'lbl.add',
                        action: newUser
                    });

                    addSection(states, null);
                    addSection(states, 'lbl.add');
                }

                function addSection(states, name) {
                    var statesBySection = $filter('filter')(states, { menuSection: name }, true);
                    var menuItems = [];
                    angular.forEach(statesBySection, function (state) {
                        menuItems.push({
                            icon: state.menuIcon,
                            name: (angular.isDefined(state.menuName)) ? state.menuName : state.name,
                            state: state,
                            action: (angular.isDefined(state.action)) ? state.action : function () { navigateTo(state); },
                            isCurrent: function () { return (state == $state.current); }
                        });
                    });

                    if (menuItems.length > 0) {
                        var sectionName = name;
                        vm.sections.push({ name: sectionName, menuItems: menuItems });
                    }
                }
            }
        })
})();