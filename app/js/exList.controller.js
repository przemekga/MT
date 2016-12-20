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
            minutes: '',
            seconds: '',
            duration: '',
            bpm: '',
            tab: ''
        };

        vm.preview = {
            name: '',
            tab: ''
        };

        vm.showDetails = function (item) {
            vm.preview.name = item.exerciseName;
            vm.preview.tab = item.tab;
        };

        vm.save = function () {
            ExerciseListService.save(angular.copy(vm.exerciseGroup));
            console.log(vm.exerciseGroupList);
        };

        vm.addExercise = function (index) {
            var temp = vm.exercise;
            temp.group = index;
            ExerciseListService.addExercise(angular.copy(temp));
            console.log(vm.exerciseGroupList);
        };

        vm.play = function (bpm, item) {
            ExerciseListService.metronome(bpm, item);
            ExerciseListService.clickStop(item.duration);
        };

        console.log(vm.exerciseGroup);

    }
})();