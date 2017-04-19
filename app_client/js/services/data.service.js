/**
 * Created by Przemek on 2017-04-19.
 */
(function() {

    angular
        .module('app')
        .service('meanData', ['$http', 'authentication', meanData]);

    function meanData ($http, authentication) {

        const getProfile = function () {
            return $http.get('/api/profile', {
                headers: {
                    Authorization: 'Bearer '+ authentication.getToken()
                }
            });
        };

        return {
            getProfile : getProfile
        };
    }

})();