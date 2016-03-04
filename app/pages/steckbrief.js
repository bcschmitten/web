(function () {
    'use strict';

    angular.module('app').controller('SteckbriefController', ControllerFactory);

    ControllerFactory.$inject = ['$mdMedia', 'dataContext'];

    function ControllerFactory($mdMedia, dataContext) {
        var vm = this;
        vm.contactClubAddress = null;
        vm.hasClubAddressMail = false;
        vm.hasClubAddressPhonePrivate = false;
        vm.contactsTrainer = null;
        vm.teams = null;

        vm.media = function (query) {
            return $mdMedia(query);
        };
        vm.callPhone = callPhone;
        vm.sendMail = sendMail;

        init();
        return vm;


        function init() {
            var contactId = 705;                    // Contact: Rete Meuwly
            dataContext.getContacts(contactId)
                .then(function (data) {
                    vm.contactClubAddress = data[0];
                    vm.hasClubAddressMail = angular.isString(vm.contactClubAddress.EMailAlias) || angular.isString(vm.contactClubAddress.EMail);
                    vm.hasClubAddressPhonePrivate = angular.isString(vm.contactClubAddress.PhonePrivate);
                });
            dataContext.getTeams()
                .then(function (data) {
                    vm.teams = data;
                });
            dataContext.getContactsByRole('TRAINER')
                .then(function (data) {
                    vm.contactsTrainer = data;
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
