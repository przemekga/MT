/**
 * Created by Przemek on 2017-04-18.
 */
(function () {

    angular
        .module('app')
        .controller('LoginCtrl', ['$location', 'authentication', LoginCtrl]);

    function LoginCtrl($location, authentication) {
        const vm = this;

        vm.credentials = {
            email : "",
            password : ""
        };

        vm.onSubmit = function () {
            authentication
                .login(vm.credentials)
                .error(function(err){
                    alert(err);
                })
                .then(function(){
                    $location.path('profile');
                });
        };

    }

})();