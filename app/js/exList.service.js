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
                groupName: "Warmup",
                exerciseGroupTotalTime: '0',
                exercises:
                [
                    {
                        exId: 1,
                        completed: false,
                        exerciseName: 'Tremolo',
                        duration: '',
                        minutes: 3,
                        seconds: 0,
                        bpm: 60,
                        tab: 'http://i.imgur.com/KNTmphr.png',
                        isPlaying: false,
                        isPaused: false
                    },
                    {exId: 2, completed: false, exerciseName: '1+2 Fingers', duration: '', minutes: 1, seconds: 45, bpm: 60, tab: 'http://i.imgur.com/Mpn6i1r.png', isPlaying: false},
                    {exId: 3, completed: false, exerciseName: '1+4 Fingers', duration: '', minutes: 1, seconds: 45, bpm: 60, tab: 'http://i.imgur.com/Mpn6i1r.png', isPlaying: false},
                    {exId: 4, completed: false, exerciseName: '1+3 Fingers', duration: '', minutes: 1, seconds: 45, bpm: 60, tab: 'http://i.imgur.com/Mpn6i1r.png', isPlaying: false},
                    {exId: 5, completed: false, exerciseName: '2+4 Fingers', duration: '', minutes: 1, seconds: 45, bpm: 60, tab: 'http://i.imgur.com/Mpn6i1r.png', isPlaying: false},
                    {exId: 6, completed: false, exerciseName: '2+3 Fingers', duration: '', minutes: 1, seconds: 45, bpm: 60, tab: 'http://i.imgur.com/Mpn6i1r.png', isPlaying: false},
                    {exId: 7, completed: false, exerciseName: '3+4 Fingers', duration: '', minutes: 1, seconds: 45, bpm: 60, tab: 'http://i.imgur.com/Mpn6i1r.png', isPlaying: false},
                    {exId: 8, completed: false, exerciseName: '4 Notes per string', duration: '', minutes: 3, seconds: 0, bpm: 90, tab: 'http://i.imgur.com/GO6MOiM.png', isPlaying: false},
                    {exId: 9, completed: false, exerciseName: 'Blues scale run', duration: '', minutes: 3, seconds: 0, bpm: 150, tab: 'http://i.imgur.com/NDCQ4gc.png', isPlaying: false},
                    {exId: 10, completed: false, exerciseName: 'Dorian blues scale run', duration: '', minutes: 3, seconds: 0, bpm: 150, tab: 'http://i.imgur.com/0mAWPT7.png', isPlaying: false},
                ]
            },
            {
                id: 2,
                groupName: "Licks and riffs",
                exerciseGroupTotalTime: '0',
                exercises:
                    [
                        {
                            exId: 1,
                            completed: false,
                            exerciseName: 'Django pedal point',
                            duration: '',
                            minutes: 3,
                            seconds: 0,
                            bpm: 80,
                            tab: 'http://i.imgur.com/ZifQ31Q.png',
                            isPlaying: false,
                            isPaused: false
                        },
                        {exId: 2, completed: false, exerciseName: 'Django D-major', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/RIHRFsb.png', isPlaying: false},
                        {exId: 3, completed: false, exerciseName: 'Vibrato', duration: '', minutes: 3, seconds: 0, bpm: 90, tab: 'http://i.imgur.com/Rsfziof.png', isPlaying: false},
                        {exId: 4, completed: false, exerciseName: 'Joe Walsh riff', duration: '', minutes: 3, seconds: 0, bpm: 150, tab: 'http://i.imgur.com/dAoM2ug.png', isPlaying: false},
                    ]
            },
            {
                id: 3,
                groupName: "String skipping arpeggios",
                exerciseGroupTotalTime: '0',
                exercises:
                    [
                        {
                            exId: 1,
                            completed: false,
                            exerciseName: 'G Major',
                            duration: '',
                            minutes: 3,
                            seconds: 0,
                            bpm: 80,
                            tab: 'http://i.imgur.com/ed3l8MU.png',
                            isPlaying: false,
                            isPaused: false
                        },
                        {exId: 2, completed: false, exerciseName: 'Em7', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/sLfjEWw.png', isPlaying: false},
                        {exId: 3, completed: false, exerciseName: 'Diminished', duration: '', minutes: 3, seconds: 0, bpm: 90, tab: 'http://i.imgur.com/L5cpzQT.png', isPlaying: false},
                        {exId: 4, completed: false, exerciseName: 'C major', duration: '', minutes: 3, seconds: 0, bpm: 150, tab: 'http://i.imgur.com/bdqrEsW.png', isPlaying: false},
                        {exId: 5, completed: false, exerciseName: 'Tapped arp', duration: '', minutes: 3, seconds: 0, bpm: 140, tab: 'http://i.imgur.com/5lQlJzN.png', isPlaying: false},
                    ]
            },
            {
                id: 4,
                groupName: "3 string arpeggios",
                exerciseGroupTotalTime: '0',
                exercises:
                    [
                        {
                            exId: 1,
                            completed: false,
                            exerciseName: 'Em shape',
                            duration: '',
                            minutes: 3,
                            seconds: 0,
                            bpm: 80,
                            tab: 'http://i.imgur.com/ddlsneC.png',
                            isPlaying: false,
                            isPaused: false
                        },
                        {exId: 2, completed: false, exerciseName: 'Dm shape', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/eVjjZs9.png', isPlaying: false},
                        {exId: 3, completed: false, exerciseName: 'Am shape', duration: '', minutes: 3, seconds: 0, bpm: 90, tab: 'http://i.imgur.com/XRkWIeV.png', isPlaying: false},
                        {exId: 4, completed: false, exerciseName: 'Diminished', duration: '', minutes: 3, seconds: 0, bpm: 150, tab: 'http://i.imgur.com/jxcp8eF.png', isPlaying: false},
                    ]
            },
            {
                id: 5,
                groupName: "5 String sweep arpeggios",
                exerciseGroupTotalTime: '0',
                exercises:
                    [
                        {
                            exId: 1,
                            completed: false,
                            exerciseName: 'Am shape',
                            duration: '',
                            minutes: 3,
                            seconds: 0,
                            bpm: 80,
                            tab: 'http://i.imgur.com/kwlgHCP.png',
                            isPlaying: false,
                            isPaused: false
                        },
                        {exId: 2, completed: false, exerciseName: 'Cm shape', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/xrWbyfp.png', isPlaying: false},
                        {exId: 3, completed: false, exerciseName: 'A shape', duration: '', minutes: 3, seconds: 0, bpm: 90, tab: 'http://i.imgur.com/A8T6P5x.png', isPlaying: false},
                        {exId: 4, completed: false, exerciseName: 'C shape', duration: '', minutes: 3, seconds: 0, bpm: 150, tab: 'http://i.imgur.com/5DqLnIj.png', isPlaying: false},
                    ]
            },
            {
                id: 6,
                groupName: "Hybrid picking",
                exerciseGroupTotalTime: '0',
                exercises:
                    [
                        {
                            exId: 1,
                            completed: false,
                            exerciseName: 'Ex 1',
                            duration: '',
                            minutes: 3,
                            seconds: 0,
                            bpm: 80,
                            tab: 'http://i.imgur.com/oI5DTFB.png',
                            isPlaying: false,
                            isPaused: false
                        },
                        {exId: 2, completed: false, exerciseName: 'Hybrid picking + legato', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/fVinF9w.png', isPlaying: false},
                    ]
            },
            {
                id: 7,
                groupName: "Economy picking",
                exerciseGroupTotalTime: '0',
                exercises:
                    [
                        {
                            exId: 1,
                            completed: false,
                            exerciseName: 'Ex1',
                            duration: '',
                            minutes: 3,
                            seconds: 0,
                            bpm: 80,
                            tab: 'http://i.imgur.com/IprMIQV.png',
                            isPlaying: false,
                            isPaused: false
                        },
                        {exId: 2, completed: false, exerciseName: 'Ex2', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/Cvh5KL4.png', isPlaying: false},
                    ]
            },
            {
                id: 8,
                groupName: "Progressions",
                exerciseGroupTotalTime: '0',
                exercises:
                    [
                        {
                            exId: 1,
                            completed: false,
                            exerciseName: 'Ex1',
                            duration: '',
                            minutes: 3,
                            seconds: 0,
                            bpm: 80,
                            tab: 'http://i.imgur.com/KgaZ7kV.png',
                            isPlaying: false,
                            isPaused: false
                        },
                        {exId: 2, completed: false, exerciseName: 'Ex2', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/cgxJYZ4.png', isPlaying: false},
                    ]
            },
            {
                id: 9,
                groupName: "Legato",
                exerciseGroupTotalTime: '0',
                exercises:
                    [
                        {
                            exId: 1,
                            completed: false,
                            exerciseName: 'Ex1',
                            duration: '',
                            minutes: 3,
                            seconds: 0,
                            bpm: 80,
                            tab: 'http://i.imgur.com/U0mHnpv.png',
                            isPlaying: false,
                            isPaused: false
                        },
                        {exId: 2, completed: false, exerciseName: 'Ex2', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/FivrwNa.png', isPlaying: false},
                        {exId: 3, completed: false, exerciseName: 'Ex3', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/2b0SSXa.png', isPlaying: false},
                    ]
            },
            {
                id: 10,
                groupName: "Scale runs",
                exerciseGroupTotalTime: '0',
                exercises:
                    [
                        {
                            exId: 1,
                            completed: false,
                            exerciseName: 'Ex1',
                            duration: '',
                            minutes: 3,
                            seconds: 0,
                            bpm: 80,
                            tab: 'http://i.imgur.com/YeOCiVo.png',
                            isPlaying: false,
                            isPaused: false
                        },
                        {exId: 2, completed: false, exerciseName: 'Ex2', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/D15kJ2k.png', isPlaying: false},
                        {exId: 3, completed: false, exerciseName: 'Ex3', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/yWrYRwx.png', isPlaying: false},
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
