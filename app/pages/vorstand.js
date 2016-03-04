(function () {
    'use strict';

    angular.module('app').controller('VorstandController', ControllerFactory);

    ControllerFactory.$inject = ['$q', '$mdMedia', 'dataContext'];

    function ControllerFactory($q, $mdMedia, dataContext) {
        var vm = this;
        vm.roleContacts = [];

        vm.media = function (query) {
            return $mdMedia(query);
        };
        vm.callPhone = callPhone;
        vm.sendMail = sendMail;

        init();
        return vm;


        function init() {
            vm.roleContacts = [];
            dataContext.getRoles().then(function () {
                var rolesSysNames = ['PRESIDENT', 'VICE_PRESIDENT', 'SECRETARY', 'ACCOUNTANT', 'MANAGER_TECHNICAL'];
                var promises = rolesSysNames.map(function (role) { return dataContext.getContactsByRole(role); });
                $q.all(promises)
                    .then(function (results) {
                        for (var i in results) {
                            if (results[i].length > 0)
                                vm.roleContacts.push({ role: dataContext.findRole(rolesSysNames[i]), contacts: results[i] });
                        }
                    });
            });
        }

        function callPhone(phoneNumber) {
            if (phoneNumber) window.location.href = 'tel:' + phoneNumber;
        }

        function sendMail(contact) {
            var clubMail = (contact.EMailAlias) ? contact.EMailAlias : contact.EMail;
            if (clubMail) window.location.href = 'mailto:' + clubMail;
        }
    };
})();
