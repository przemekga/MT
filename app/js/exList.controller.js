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
        vm.exerciseList = ExerciseListService.exerciseList;

        vm.exercise = {
            id: 0,
            groupName: "",
            exercises:
                [
                    {exid: 1, completed: false, exerciseName: 'Legato', duration: '10:00', bpm: 120},
                    {exid: 2, completed: false, exerciseName: 'Staccato', duration: '12:00', bpm: 60},
                    {exid: 3, completed: false, exerciseName: 'Trill', duration: '5:00', bpm: 90},
                    {exid: 4, completed: false, exerciseName: 'Scales', duration: '13:00', bpm: 150},
                    {exid: 5, completed: false, exerciseName: '4 Note per String', duration: '10:00', bpm: 140},
                    {exid: 6, completed: false, exerciseName: 'Arpeggios', duration: '24:00', bpm: 170},
                    {exid: 7, completed: false, exerciseName: 'Tapping', duration: '10:00', bpm: 180}

                ]
        };

        vm.save = function () {
            ExerciseListService.save( vm.exercise );
            console.log(ExerciseListService.exerciseList);
        };

        console.log(vm.exercise);

        return vm;
    }
})();