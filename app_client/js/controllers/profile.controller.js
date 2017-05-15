/**
 * Created by Przemek on 2017-04-18.
 */
(function() {

    angular
        .module('app')
        .controller('profileCtrl', ['$location', 'meanData', profileCtrl]);

    function profileCtrl($location, meanData) {
        const vm = this;

        vm.user = {};

        meanData.getProfile()
            .success(function(data) {
                vm.user = data;
            })
            .error(function (e) {
                console.log(e);
            });
    }

})();