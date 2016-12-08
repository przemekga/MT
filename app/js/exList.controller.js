/**
 * Created by Przemek on 2016-10-25.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller("ExerciseListController", ['ExerciseListService', ExerciseListController]);


    function ExerciseListController(ExerciseListService) {
        var vm = this;
        vm.exerciseGroupList = ExerciseListService.exerciseGroupList;
        vm.exerciseList = ExerciseListService.exerciseList;

        vm.exerciseGroup = {
            id: 0,
            groupName: '',
            exercises: []
        };

        vm.exercise = {
            group: 0,
            exId: 0,
            completed: false,
            exerciseName: '',
            duration: '',
            bpm: ''
        };

        vm.save = function () {
            ExerciseListService.save(angular.copy(vm.exerciseGroup));
            console.log(vm.exerciseGroupList);
        };

        vm.addExercise = function (index) {
            var temp = vm.exercise;
            temp.group = index;
            ExerciseListService.addExercise(angular.copy(temp));
            console.log(vm.exerciseList);
        };

        console.log(vm.exerciseGroup);

    }
})();