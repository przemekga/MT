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

        vm.workoutDuration = function (exercises) {
            var arrs = exerciseGroupList.exerciseGroupTotalTime.map(function (total) {
               //TODO: glowny licznik, zliczanie minut i sekund z calych grup
            });
            return ExerciseListService.convertNumbersToTime(arrs[0], arrs[1]);
        }
    }
})();