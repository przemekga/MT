/**
 * Created by Przemek on 2016-11-08.
 */
(function () {
    'use strict';
    
    angular
        .module('app')
        .service('ExerciseListService', ExerciseListService);
    
    function ExerciseListService() {
        var exerciseService = {};

        exerciseService.exerciseGroupList = [
            // {
            //     id: 1,
            //     groupName: "Group 1",
            //     exercises:
            //     [
            //         {exId: 1, completed: false, exerciseName: 'Legato', duration: '10:00', bpm: 120},
            //         {exId: 2, completed: false, exerciseName: 'Staccato', duration: '12:00', bpm: 60},
            //         {exId: 3, completed: false, exerciseName: 'Trill', duration: '5:00', bpm: 90},
            //         {exId: 4, completed: false, exerciseName: 'Scales', duration: '13:00', bpm: 150},
            //         {exId: 5, completed: false, exerciseName: '4 Note per String', duration: '10:00', bpm: 140},
            //         {exId: 6, completed: false, exerciseName: 'Arpeggios', duration: '24:00', bpm: 170},
            //         {exId: 7, completed: false, exerciseName: 'Tapping', duration: '10:00', bpm: 180}
            //
            //     ]
            // }
        ];

        exerciseService.getNewId = function () {
            var maxId = exerciseService.exerciseGroupList.length;
            exerciseService.newId = maxId + 1;
            return exerciseService.newId;
        };

        exerciseService.getNewExId = function (exercise) {
            var maxId = exerciseService.exerciseGroupList[exercise.group].exercises.length;
            exerciseService.newExId = maxId + 1;
            return exerciseService.newExId;
        };

        exerciseService.save = function (entry) {
            entry.id = exerciseService.getNewId();
            exerciseService.exerciseGroupList.push(entry);
        };
        
        exerciseService.addExercise = function (exercise) {
            exercise.exId = exerciseService.getNewExId(exercise);
            exerciseService.exerciseGroupList[exercise.group].exercises.push(exercise);
            // exerciseService.exerciseGroupList.exercises.push(exercise);
        };

        return exerciseService;
    }
})();


// {
//     id: 1,
//     groupName: "Group 1",
//     exercises:
//         [
//             {exid: 1, completed: false, exerciseName: 'Legato', duration: '10:00', bpm: 120},
//             {exid: 2, completed: false, exerciseName: 'Staccato', duration: '12:00', bpm: 60},
//             {exid: 3, completed: false, exerciseName: 'Trill', duration: '5:00', bpm: 90},
//             {exid: 4, completed: false, exerciseName: 'Scales', duration: '13:00', bpm: 150},
//             {exid: 5, completed: false, exerciseName: '4 Note per String', duration: '10:00', bpm: 140},
//             {exid: 6, completed: false, exerciseName: 'Arpeggios', duration: '24:00', bpm: 170},
//             {exid: 7, completed: false, exerciseName: 'Tapping', duration: '10:00', bpm: 180}
//
//         ]
// }
