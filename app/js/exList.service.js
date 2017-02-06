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
                exerciseGroupTotalTime: '0',
                exercises:
                [
                    {
                        exId: 1,
                        completed: false,
                        exerciseName: 'Rasgueo',
                        duration: '',
                        minutes: 0,
                        seconds: 4,
                        bpm: 60,
                        tab: './tabs/tab.jpg',
                        isPlaying: false,
                        isPaused: false
                    },
                    {exId: 2, completed: false, exerciseName: 'Picado', duration: '', minutes: 5, seconds: 0, bpm: 60, tab: './tabs/tab2.jpg', isPlaying: false},
                    {exId: 3, completed: false, exerciseName: 'Trill', duration: '5:00', minutes: 5, seconds: 0, bpm: 90, tab: '', isPlaying: false},
                    {exId: 4, completed: false, exerciseName: 'Scales', duration: '13:00', minutes: 5, seconds: 0, bpm: 150, tab: '', isPlaying: false},
                    {exId: 5, completed: false, exerciseName: '4 Note per String', duration: '10:00', minutes: 5, seconds: 0, bpm: 140, tab: '', isPlaying: false},
                    {exId: 6, completed: false, exerciseName: 'Arpeggios', duration: '24:00', minutes: 5, seconds: 0, bpm: 170, tab: '', isPlaying: false},
                    {exId: 7, completed: false, exerciseName: 'Tapping', duration: '10:00', minutes: 5, seconds: 0, bpm: 180, tab: '', isPlaying: false}

                ]
            },
            {
                id: 2,
                groupName: "abc",
                exerciseGroupTotalTime: '0',
                exercises:
                    [
                        {
                            exId: 1,
                            completed: false,
                            exerciseName: 'asdasd',
                            duration: '',
                            minutes: 0,
                            seconds: 10,
                            bpm: 60,
                            tab: './tabs/tab.jpg',
                            isPlaying: false,
                            isPaused: false
                        },
                        {exId: 2, completed: false, exerciseName: 'Picado', duration: '', minutes: 5, seconds: 0, bpm: 60, tab: './tabs/tab2.jpg', isPlaying: false},
                        {exId: 3, completed: false, exerciseName: 'Trill', duration: '5:00', minutes: 5, seconds: 0, bpm: 90, tab: '', isPlaying: false},
                        {exId: 4, completed: false, exerciseName: 'Scales', duration: '13:00', minutes: 5, seconds: 0, bpm: 150, tab: '', isPlaying: false},
                        {exId: 5, completed: false, exerciseName: '4 Note per String', duration: '10:00', minutes: 5, seconds: 0, bpm: 140, tab: '', isPlaying: false},
                        {exId: 6, completed: false, exerciseName: 'Arpeggios', duration: '24:00', minutes: 5, seconds: 0, bpm: 170, tab: '', isPlaying: false},
                        {exId: 7, completed: false, exerciseName: 'Tapping', duration: '10:00', minutes: 5, seconds: 0, bpm: 180, tab: '', isPlaying: false}

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

        exerciseService.clickStop = function (item) {
            exerciseService.clickTimeout = $timeout(function () {
                $interval.cancel(exerciseService.clicking);
                item.isPlaying = false;
                item.completed = true;
            }, item.duration);
        };


        exerciseService.metronome = function (bpm, exercise) {
            if(!exercise.isPaused) {
                exercise.duration = exerciseService.convertToMiliSeconds(exercise);
            }

            var interval = 60000 / bpm;

            exerciseService.clicking = $interval(function () {
                exerciseService.tick();
            }, interval);
        };

        exerciseService.stopIntervals = function () {
            $interval.cancel(exerciseService.clicking);
            $interval.cancel(exerciseService.durCtd);
        };

        exerciseService.stopTimeout = function () {
            $timeout.cancel(exerciseService.clickTimeout);
        };

        exerciseService.durationCountdown = function (exercise) {
            if(exercise.isPlaying) {
                exerciseService.durCtd = $interval(function () {
                    exercise.duration = exercise.duration - 1000;
                    if(exercise.duration === 0){$interval.cancel(exerciseService.durCtd);}
                }, 1000);
                exercise.isPaused = false;
            } else {
                exerciseService.stopIntervals();
                exercise.isPaused = true;
            }
        };

        exerciseService.convertNumbersToTime = function (minutes, seconds) {
            var totalMin = minutes.reduce((a, b) => a + b, 0);
            var totalSec = seconds.reduce((a, b) => a + b, 0);
            if (totalSec > 59) {
                totalMin = totalMin + Math.floor(totalSec / 60);
                totalSec = totalSec % 60;
            }
            return [totalMin, totalSec];
        };

        exerciseService.makeTimeArrays = function (group) {
            var minutes = group.exercises.map(function (exercise) {
                return parseInt(exercise.minutes);
            });

            var seconds = group.exercises.map(function (exercise) {
                return parseInt(exercise.seconds);
            });

            return [minutes, seconds];
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
