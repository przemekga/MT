/**
 * Created by Przemek on 2016-11-08.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when("/",{
                templateUrl: "views/exercises.html",
                controller: "ExerciseListController",
                controllerAs: 'exList'
            })
            .when("/about",{
                templateUrl: "views/about.html",
                controller: "ExerciseListController"
            })
    }
})();