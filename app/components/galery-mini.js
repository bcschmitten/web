(function () {
    'use strict';

    angular
    .module('app')
    .directive('galeryMini', function () {
        //Usage:
        //<galery-mini></galery-mini>
        return {
            restrict: 'E',
            templateUrl: 'app/components/galery-mini.html',
            scope: {},
            controllerAs: 'vm',
            controller: function ($scope) {
                var vm = this;
                vm.images = [];
                vm.imageIndex = 0;
                vm.nextImage = nextImage;
                vm.imageUrl = function () { return '/images/startpage/' + vm.images[vm.imageIndex]; }

                load();
                return vm;


                function load() {
                    // ToDo: Load from server
                    vm.images = [];
                    vm.images.push('20140504_152431_P1080637_00678.jpg');
                    vm.images.push('20140504_090831_P1080104_00149.jpg');
                    vm.images.push('20140504_091216_P1080136_00181 (Custom).jpg');
                    vm.images.push('20140504_084759_P1070996_00042 (Custom).jpg');
                    vm.images.push('20140504_122509_P1080382_00426 (Custom).jpg');
                    vm.images.push('20140504_123155_P1080391_00435 (Custom).jpg');
                    vm.images.push('20140504_121828_P1080346_00390 (Custom).jpg');
                    vm.images.push('20140504_082201_P1070974_00020 (Custom).jpg');
                    vm.images.push('20140504_084844_P1070999_00045 (Custom).jpg');
                    vm.images.push('20140504_081820_P1070958_00004.jpg');
                    vm.images.push('20140504_151539_P1080598_00640.jpg');

                    vm.imageIndex = Math.floor((Math.random() * vm.images.length));
                }

                function nextImage() {
                    vm.imageIndex = (++vm.imageIndex % vm.images.length);
                }

            }
        };
    })
})();