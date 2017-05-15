/**
 * Created by Przemek on 2017-04-18.
 */
(function () {

    angular
        .module('app')
        .controller('RegisterCtrl', ['$location', 'authentication', RegisterCtrl]);

    function RegisterCtrl($location, authentication) {
        const vm = this;

        vm.credentials = {
            name : "",
            email : "",
            password : ""
        };

        vm.onSubmit = function () {
            console.log('Submitting registration');
            authentication
                .register(vm.credentials)
                .error(function(err){
                    alert(err);
                })
                .then(function(){
                    $location.path('profile');
                });
        };

    }

})();