(function() {
    'use strict';

    angular
        .module('app.pictures')
        .controller('List', controller);

    controller.$inject = ['Instagram'];

    function controller(Instagram) {
        /* jshint validthis:true */
        var vm = this;

        vm.formatDate = formatDate;
        vm.pictures = [];

        activate();

        function activate() {
            getPictures();
        }

        function formatDate(time) {
            var date = new Date(Number(time));
            return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        }

        function getPictures() {
            return Instagram
                .getRecentMediaForTag('bodyboarding')
                .then(function(pictures) {
                    vm.pictures = pictures;
                    return pictures;
                });
        }
    }
})();
