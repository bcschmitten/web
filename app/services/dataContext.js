(function () {
    'use strict';


    angular.module('app').factory('dataContext', ['$http', '$q', '$filter', factory]);

    function factory($http, $q, $filter) {

        var urlApiService = 'http://www.bcschmitten.ch/json/index.php';
        var OP_EQUAL = '%3D';
        var roles = null;
        var teams = null;

        var service = {
            getContacts: getContacts,
            getContactsByRole: getContactsByRole,
            getContactRoles: getContactRoles,
            getRoles: getRoles,
            getTeams: getTeams,

            findRole: findRole,
        };

        return service;


        // --------------------------------------------------------------------------- Translations

        function getContacts(id) {
            var url = urlApiService + '?op=GetContact';
            if (id) url += '&where=Id' + OP_EQUAL + id;

            return $http.get(url).then(function (result) { return result.data; });
        }

        function getContactsByRole(roleSysName) {
            return service.getRoles(roleSysName)
                .then(function (roles) {
                    return service.getContactRoles(roles[0].Id);
                })
                .then(function (contactRoles) {
                    var promises = contactRoles.map(function (contactRole) { return service.getContacts(contactRole.ContactId); });
                    return $q.all(promises);
                })
                .then(function (results) {
                    var contacts = [];
                    results.map(function (result) { if (result.length > 0) contacts.push(result[0]); });
                    return contacts;
                });
        }

        function getContactRoles(roleId) {
            var url = urlApiService + '?op=GetContactRole';
            if (roleId) url += '&where=RoleId' + OP_EQUAL + roleId;

            return $http.get(url).then(function (result) { return result.data; });
        }

        function getRoles(sysName) {
            var promise = $q.resolve(roles);
            if (!angular.isArray(roles)) {
                var url = urlApiService + '?op=GetRole';
                promise = $http.get(url).then(function (result) { roles = result.data; return roles; });
            }

            return promise.then(function (data) { return (sysName) ? [findRole(sysName)] : roles; });
        }

        function getTeams(id) {
            var promise = $q.resolve(teams);
            if (!angular.isArray(roles)) {
                var url = urlApiService + '?op=GetTeam';
                promise = $http.get(url).then(function (result) { teams = result.data; return teams; });
            }

            return promise.then(function (data) { return (id) ? $filter('filter')(data, { 'Id': id }, true) : teams; });
        }


        function findRole(sysName) {
            var result = $filter('filter')(roles, { 'SysName': sysName }, true);
            return (result.length > 0) ? result[0] : null;
        }
    }
})();