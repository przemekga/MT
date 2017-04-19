/**
 * Created by Przemek on 2017-01-25.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller("NavbarController", ['NavService', 'ExerciseListService', '$location', 'authentication', NavbarController]);

    function NavbarController(NavService, ExerciseListService, $location, authentication) {
        const vm = this;
        vm.exerciseGroupList = ExerciseListService.exerciseGroupList;
        vm.exerciseList = ExerciseListService.exerciseList;

        vm.workoutDuration = function (exerciseGroups) {
            let minArr = exerciseGroups.map(function (min) {
               return min.exerciseGroupTotalTime[0];
            });

            let secArr = exerciseGroups.map(function (sec) {
                return sec.exerciseGroupTotalTime[1];
            });

            return ExerciseListService.convertNumbersToTime(minArr, secArr);
        };

        vm.isLoggedIn = authentication.isLoggedIn();
        vm.currentUser = authentication.currentUser();
    }
})();