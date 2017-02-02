/**
 * Created by Przemek on 2017-01-25.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller("NavbarController", ['NavService', 'ExerciseListService', NavbarController]);

    function NavbarController(NavService, ExerciseListService) {
        var vm = this;
        vm.exerciseGroupList = ExerciseListService.exerciseGroupList;
        vm.exerciseList = ExerciseListService.exerciseList;

        vm.workoutDuration = function (exerciseGroups) {
            var minArr = exerciseGroups.map(function (min) {
               return min.exerciseGroupTotalTime[0];
            });

            var secArr = exerciseGroups.map(function (sec) {
                return sec.exerciseGroupTotalTime[1];
            });

            return ExerciseListService.convertNumbersToTime(minArr, secArr);
        }
    }
})();