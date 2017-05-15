/**
 * Created by Przemek on 2016-10-18.
 */

(function () {
    'use strict';

    angular.module('app', ['ngRoute']);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when("/",{
                templateUrl: "views/exercises.html",
                controller: "ExerciseListController",
                controllerAs: 'exList'
            })
            .when("/login",{
                templateUrl: "views/login.html",
                controller: "LoginCtrl",
                controllerAs: 'vm'
            })
            .when("/register",{
                templateUrl: "views/register.html",
                controller: "RegisterCtrl",
                controllerAs: 'vm'
            })
            .when('/profile', {
                templateUrl: '/views/profile.html',
                controller: 'profileCtrl',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/'});

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }

    function run($rootScope, $location, authentication) {
        $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
            if ($location.path() === '/profile' && !authentication.isLoggedIn()) {
                $location.path('/');
            }
        });
    }

    angular
        .module('app', ['ngRoute'])
        .config(['$routeProvider', '$locationProvider', config])
        .run(['$rootScope', '$location', 'authentication', run]);


})();
