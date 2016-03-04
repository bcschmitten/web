(function () {
    'use strict';

    angular
    .module('app')
    .directive('search', function () {
        //Usage:
        //<search></search>
        return {
            restrict: 'E',
            templateUrl: 'app/components/search.html',
            scope: {},
            controller: controller
        };

        function controller($scope) {
            $scope.search = GoogleSearch;
            return $scope;

            function GoogleSearch(event) {
                var s = event.srcElement.value;
                if (s.length == 0) return;

                s = s.replace(/ /g, "%20");
                s = s.replace(/ä|Ä/g, "%C3%A4");
                s = s.replace(/ö|Ö/g, "%C3%B6");
                s = s.replace(/ü|Ü/g, "%C3%BC");
                s = s.replace(/:/g, "%3A");
                s = s.replace(/\//g, "%2F");
                //    document.location.href = "http://www.google.ch/search?q=" + s;
                document.location.href = "?q=" + s + '#/Suchergebnisse';
            }
        }
    })
})();