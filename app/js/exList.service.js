/**
 * Created by Przemek on 2016-11-08.
 */
(function () {
    'use strict';
    
    angular
        .module('app')
        .service('ExerciseListService', ['$interval', '$timeout', ExerciseListService]);
    
    function ExerciseListService($interval, $timeout) {
        var exerciseService = {};


        exerciseService.exerciseGroupList = [
            {
                id: 1,
                groupName: "Flamenco",
                exercises:
                [
                    {
                        exId: 1,
                        completed: false,
                        exerciseName: 'Rasgueo',
                        duration: '',
                        minutes: 5,
                        seconds: 0,
                        bpm: 45,
                        tab: './tabs/tab.jpg'
                    },
                    {exId: 2, completed: false, exerciseName: 'Picado', duration: '', minutes: 5, seconds: 0, bpm: 60, tab: './tabs/tab2.jpg'},
                    {exId: 3, completed: false, exerciseName: 'Trill', duration: '5:00', bpm: 90, tab: ''},
                    {exId: 4, completed: false, exerciseName: 'Scales', duration: '13:00', bpm: 150, tab: ''},
                    {exId: 5, completed: false, exerciseName: '4 Note per String', duration: '10:00', bpm: 140, tab: ''},
                    {exId: 6, completed: false, exerciseName: 'Arpeggios', duration: '24:00', bpm: 170, tab: ''},
                    {exId: 7, completed: false, exerciseName: 'Tapping', duration: '10:00', bpm: 180, tab: ''}

                ]
            }
        ];

        exerciseService.getNewId = function () {
            var maxId = exerciseService.exerciseGroupList.length;
            exerciseService.newId = maxId + 1;
            return exerciseService.newId;
        };

        exerciseService.convertToMiliSeconds = function (exercise) {
            var minutes = parseInt(exercise.minutes);
            var seconds = parseInt(exercise.seconds);
            exerciseService.durationSeconds = (minutes * 60 + seconds) * 1000;

            return exerciseService.durationSeconds;
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
            //exercise.duration = exerciseService.convertToSeconds(exercise);
        };

        exerciseService.tick = function (isPlaying) {
            var audio = new Audio();
            audio.src = "../audio/click.mp3";
            if (!isPlaying) {
                audio.play();
            } else {
                audio.pause();
            }
        };

        exerciseService.clickStop = function (duration) {
            $timeout(function () {$interval.cancel(exerciseService.clicking)}, duration);

        };

        exerciseService.metronome = function (bpm, exercise) {
            exercise.duration = exerciseService.convertToMiliSeconds(exercise);
            var interval = 60000 / bpm;

            exerciseService.clicking = $interval(function () {
                exerciseService.tick();
            }, interval);

        };


        return exerciseService;
    }
})();
//
//
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
