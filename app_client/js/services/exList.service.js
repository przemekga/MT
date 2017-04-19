/**
 * Created by Przemek on 2016-11-08.
 */
(function () {
    'use strict';
    
    angular
        .module('app')
        .service('ExerciseListService', ['$interval', '$timeout', ExerciseListService]);
    
    function ExerciseListService($interval, $timeout) {
        const exerciseService = {};


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
                            exerciseName: 'No space between fingers',
                            duration: '',
                            minutes: 1,
                            seconds: 0,
                            bpm: 60,
                            tab: 'http://i.imgur.com/uUH6kdS.png',
                            isPlaying: false,
                            isPaused: false
                        },
                        {exId: 2, completed: false, exerciseName: 'One fret space pinky', duration: '', minutes: 1, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/uUH6kdS.png', isPlaying: false},
                        {exId: 3, completed: false, exerciseName: 'One fret space index', duration: '', minutes: 1, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/uUH6kdS.png', isPlaying: false},
                        {exId: 4, completed: false, exerciseName: 'One fret space pinky + index', duration: '', minutes: 1, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/uUH6kdS.png', isPlaying: false},
                        {exId: 5, completed: false, exerciseName: 'One fret space middle', duration: '', minutes: 1, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/uUH6kdS.png', isPlaying: false},
                        {exId: 6, completed: false, exerciseName: 'One fret space all', duration: '', minutes: 1, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/uUH6kdS.png', isPlaying: false},
                        {exId: 7, completed: false, exerciseName: 'Bigger stretch 1', duration: '', minutes: 1, seconds: 45, bpm: 60, tab: 'http://i.imgur.com/WkCxtfJ.png', isPlaying: false},
                        {exId: 8, completed: false, exerciseName: 'Bigger stretch 2', duration: '', minutes: 1, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/8kc1crV.png', isPlaying: false},
                        {exId: 9, completed: false, exerciseName: 'Big as fuck stretch ', duration: '', minutes: 1, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/O41GD3R.png', isPlaying: false},
                        {exId: 10, completed: false, exerciseName: 'Right hand', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/luVYta4.png', isPlaying: false},
                    ]
            },
            {
                id: 2,
                groupName: "Exercises left and right hand",
                exerciseGroupTotalTime: '0',
                exercises:
                    [
                        {
                            exId: 1,
                            completed: false,
                            exerciseName: 'Ex. 1',
                            duration: '',
                            minutes: 3,
                            seconds: 0,
                            bpm: 60,
                            tab: 'http://i.imgur.com/Y4F8Q3B.png',
                            isPlaying: false,
                            isPaused: false
                        },
                        {exId: 2, completed: false, exerciseName: 'Ex. 2', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/OH8PqLI.png', isPlaying: false},
                    ]
            },
            {
                id: 3,
                groupName: "Speed and Accuracy",
                exerciseGroupTotalTime: '0',
                exercises:
                    [
                        {
                            exId: 1,
                            completed: false,
                            exerciseName: 'Major scale 1 note per click',
                            duration: '',
                            minutes: 1,
                            seconds: 30,
                            bpm: 80,
                            tab: 'http://i.imgur.com/bNSABns.png',
                            isPlaying: false,
                            isPaused: false
                        },
                        {exId: 2, completed: false, exerciseName: 'Major scale 2 note per click', duration: '', minutes: 1, seconds: 30, bpm: 60, tab: 'http://i.imgur.com/bNSABns.png', isPlaying: false},
                        {exId: 3, completed: false, exerciseName: 'Major scale 3 note per click', duration: '', minutes: 1, seconds: 30, bpm: 60, tab: 'http://i.imgur.com/bNSABns.png', isPlaying: false},
                        {exId: 4, completed: false, exerciseName: 'Major scale 4 note per click', duration: '', minutes: 1, seconds: 30, bpm: 60, tab: 'http://i.imgur.com/bNSABns.png', isPlaying: false},
                        {exId: 5, completed: false, exerciseName: 'Major scale 5 note per click', duration: '', minutes: 1, seconds: 30, bpm: 60, tab: 'http://i.imgur.com/bNSABns.png', isPlaying: false},
                        {exId: 6, completed: false, exerciseName: 'Major scale 6 note per click', duration: '', minutes: 1, seconds: 30, bpm: 60, tab: 'http://i.imgur.com/bNSABns.png', isPlaying: false},
                        {exId: 7, completed: false, exerciseName: 'Major scale 7 note per click', duration: '', minutes: 1, seconds: 30, bpm: 60, tab: 'http://i.imgur.com/bNSABns.png', isPlaying: false},
                        {exId: 8, completed: false, exerciseName: 'Major scale 8 note per click', duration: '', minutes: 1, seconds: 30, bpm: 60, tab: 'http://i.imgur.com/bNSABns.png', isPlaying: false},
                        {exId: 9, completed: false, exerciseName: '4 Notes Per String', duration: '', minutes: 5, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/8mzrQPg.png', isPlaying: false},
                        {exId: 10, completed: false, exerciseName: 'Scale run', duration: '', minutes: 5, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/mbLvDrl.png', isPlaying: false},
                    ]
            },
            {
                id: 4,
                groupName: "Scale Fragments",
                exerciseGroupTotalTime: '0',
                exercises:
                    [
                        {
                            exId: 1,
                            completed: false,
                            exerciseName: 'Fragment 1',
                            duration: '',
                            minutes: 3,
                            seconds: 0,
                            bpm: 80,
                            tab: 'http://i.imgur.com/xc9Imr5.png',
                            isPlaying: false,
                            isPaused: false
                        },
                        {exId: 2, completed: false, exerciseName: 'Fragment 2', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/XPCvbNh.png', isPlaying: false},
                        {exId: 3, completed: false, exerciseName: 'Fragment 3', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/ZoJEkqB.png', isPlaying: false},
                        {exId: 4, completed: false, exerciseName: 'Fragment 4', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/zCGtkS8.png', isPlaying: false},
                        {exId: 5, completed: false, exerciseName: 'Fragment 5', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/jd0WK9t.png', isPlaying: false},
                        {exId: 6, completed: false, exerciseName: 'Fragment 6', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/qLdNTue.png', isPlaying: false},
                        {exId: 7, completed: false, exerciseName: 'Fragment 7', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/IItQu13.png', isPlaying: false},
                        {exId: 8, completed: false, exerciseName: 'Fragment 8', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/oOWwUgo.png', isPlaying: false},
                        {exId: 9, completed: false, exerciseName: 'Fragment 9', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/w9Hix7j.png', isPlaying: false},
                        {exId: 10, completed: false, exerciseName: 'Fragment 10', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/sqLD4Qi.png', isPlaying: false},
                        {exId: 11, completed: false, exerciseName: 'Fragment 11', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/ApU0oJG.png', isPlaying: false},
                        {exId: 12, completed: false, exerciseName: 'Fragment 12', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/FcylNes.png', isPlaying: false},
                        {exId: 13, completed: false, exerciseName: 'Fragment 13', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/d2ig5qh.png', isPlaying: false},
                        {exId: 14, completed: false, exerciseName: 'Fragment 14', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/F5maLA6.png', isPlaying: false},
                        {exId: 15, completed: false, exerciseName: 'Fragment 15', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/ZF25U0L.png', isPlaying: false},
                        {exId: 16, completed: false, exerciseName: 'Fragment 16', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/jyIWhvn.png', isPlaying: false},
                        {exId: 17, completed: false, exerciseName: 'Fragment 17', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/gU12aCW.png', isPlaying: false},
                        {exId: 18, completed: false, exerciseName: 'Fragment 18', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/2VRMbMw.png', isPlaying: false},
                        {exId: 19, completed: false, exerciseName: 'Scale sequence 1', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/mNeWcai.png', isPlaying: false},
                        {exId: 20, completed: false, exerciseName: 'Scale sequence 2', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/yGCGzYG.png', isPlaying: false},
                        {exId: 21, completed: false, exerciseName: 'Scale sequence 3', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/fPetwol.png', isPlaying: false},
                        {exId: 22, completed: false, exerciseName: 'Scale sequence 4', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/faW2trv.png', isPlaying: false},
                        {exId: 23, completed: false, exerciseName: 'Solo', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/faW2trv.png', isPlaying: false},
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

// exerciseService.exerciseGroupList = [
//     {
//         id: 1,
//         groupName: "Warmup",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'No space between fingers',
//                     duration: '',
//                     minutes: 1,
//                     seconds: 0,
//                     bpm: 60,
//                     tab: 'http://i.imgur.com/uUH6kdS.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'One fret space pinky', duration: '', minutes: 1, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/uUH6kdS.png', isPlaying: false},
//                 {exId: 3, completed: false, exerciseName: 'One fret space index', duration: '', minutes: 1, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/uUH6kdS.png', isPlaying: false},
//                 {exId: 4, completed: false, exerciseName: 'One fret space pinky + index', duration: '', minutes: 1, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/uUH6kdS.png', isPlaying: false},
//                 {exId: 5, completed: false, exerciseName: 'One fret space middle', duration: '', minutes: 1, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/uUH6kdS.png', isPlaying: false},
//                 {exId: 6, completed: false, exerciseName: 'One fret space all', duration: '', minutes: 1, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/uUH6kdS.png', isPlaying: false},
//                 {exId: 7, completed: false, exerciseName: 'Bigger stretch 1', duration: '', minutes: 1, seconds: 45, bpm: 60, tab: 'http://i.imgur.com/WkCxtfJ.png', isPlaying: false},
//                 {exId: 8, completed: false, exerciseName: 'Bigger stretch 2', duration: '', minutes: 1, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/8kc1crV.png', isPlaying: false},
//                 {exId: 9, completed: false, exerciseName: 'Big as fuck stretch ', duration: '', minutes: 1, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/O41GD3R.png', isPlaying: false},
//                 {exId: 10, completed: false, exerciseName: 'Right hand', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/luVYta4.png', isPlaying: false},
//             ]
//     },
//     {
//         id: 2,
//         groupName: "Exercises left and right hand",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'Ex. 1',
//                     duration: '',
//                     minutes: 3,
//                     seconds: 0,
//                     bpm: 60,
//                     tab: 'http://i.imgur.com/Y4F8Q3B.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'Ex. 2', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/OH8PqLI.png', isPlaying: false},
//             ]
//     },
//     {
//         id: 3,
//         groupName: "Speed and Accuracy",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'Major scale 1 note per click',
//                     duration: '',
//                     minutes: 1,
//                     seconds: 30,
//                     bpm: 80,
//                     tab: 'http://i.imgur.com/bNSABns.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'Major scale 2 note per click', duration: '', minutes: 1, seconds: 30, bpm: 60, tab: 'http://i.imgur.com/bNSABns.png', isPlaying: false},
//                 {exId: 3, completed: false, exerciseName: 'Major scale 3 note per click', duration: '', minutes: 1, seconds: 30, bpm: 60, tab: 'http://i.imgur.com/bNSABns.png', isPlaying: false},
//                 {exId: 4, completed: false, exerciseName: 'Major scale 4 note per click', duration: '', minutes: 1, seconds: 30, bpm: 60, tab: 'http://i.imgur.com/bNSABns.png', isPlaying: false},
//                 {exId: 5, completed: false, exerciseName: 'Major scale 5 note per click', duration: '', minutes: 1, seconds: 30, bpm: 60, tab: 'http://i.imgur.com/bNSABns.png', isPlaying: false},
//                 {exId: 6, completed: false, exerciseName: 'Major scale 6 note per click', duration: '', minutes: 1, seconds: 30, bpm: 60, tab: 'http://i.imgur.com/bNSABns.png', isPlaying: false},
//                 {exId: 7, completed: false, exerciseName: 'Major scale 7 note per click', duration: '', minutes: 1, seconds: 30, bpm: 60, tab: 'http://i.imgur.com/bNSABns.png', isPlaying: false},
//                 {exId: 8, completed: false, exerciseName: 'Major scale 8 note per click', duration: '', minutes: 1, seconds: 30, bpm: 60, tab: 'http://i.imgur.com/bNSABns.png', isPlaying: false},
//                 {exId: 9, completed: false, exerciseName: '4 Notes Per String', duration: '', minutes: 5, seconds: 00, bpm: 60, tab: 'http://i.imgur.com/8mzrQPg.png', isPlaying: false},
//                 {exId: 10, completed: false, exerciseName: 'Scale run', duration: '', minutes: 5, seconds: 00, bpm: 60, tab: 'http://i.imgur.com/mbLvDrl.png', isPlaying: false},
//             ]
//     },
//     {
//         id: 4,
//         groupName: "Scale Fragments",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'Fragment 1',
//                     duration: '',
//                     minutes: 3,
//                     seconds: 0,
//                     bpm: 80,
//                     tab: 'http://i.imgur.com/xc9Imr5.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'Fragment 2', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/eVjjZs9.png', isPlaying: false},
//                 {exId: 3, completed: false, exerciseName: 'Fragment 3', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/XRkWIeV.png', isPlaying: false},
//                 {exId: 4, completed: false, exerciseName: 'Fragment 4', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/jxcp8eF.png', isPlaying: false},
//                 {exId: 5, completed: false, exerciseName: 'Fragment 5', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/jxcp8eF.png', isPlaying: false},
//                 {exId: 6, completed: false, exerciseName: 'Fragment 6', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/jxcp8eF.png', isPlaying: false},
//                 {exId: 7, completed: false, exerciseName: 'Fragment 7', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/jxcp8eF.png', isPlaying: false},
//                 {exId: 8, completed: false, exerciseName: 'Fragment 8', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/jxcp8eF.png', isPlaying: false},
//                 {exId: 9, completed: false, exerciseName: 'Fragment 9', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/jxcp8eF.png', isPlaying: false},
//                 {exId: 10, completed: false, exerciseName: 'Fragment 10', duration: '', minutes: 3, seconds: 0, bpm: 60, tab: 'http://i.imgur.com/jxcp8eF.png', isPlaying: false},
//             ]
//     },
//     {
//         id: 5,
//         groupName: "5 String sweep arpeggios",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'Am shape',
//                     duration: '',
//                     minutes: 3,
//                     seconds: 0,
//                     bpm: 80,
//                     tab: 'http://i.imgur.com/kwlgHCP.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'Cm shape', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/xrWbyfp.png', isPlaying: false},
//                 {exId: 3, completed: false, exerciseName: 'A shape', duration: '', minutes: 3, seconds: 0, bpm: 90, tab: 'http://i.imgur.com/A8T6P5x.png', isPlaying: false},
//                 {exId: 4, completed: false, exerciseName: 'C shape', duration: '', minutes: 3, seconds: 0, bpm: 150, tab: 'http://i.imgur.com/5DqLnIj.png', isPlaying: false},
//             ]
//     },
//     {
//         id: 6,
//         groupName: "Hybrid picking",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'Ex 1',
//                     duration: '',
//                     minutes: 3,
//                     seconds: 0,
//                     bpm: 80,
//                     tab: 'http://i.imgur.com/oI5DTFB.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'Hybrid picking + legato', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/fVinF9w.png', isPlaying: false},
//             ]
//     },
//     {
//         id: 7,
//         groupName: "Economy picking",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'Ex1',
//                     duration: '',
//                     minutes: 3,
//                     seconds: 0,
//                     bpm: 80,
//                     tab: 'http://i.imgur.com/IprMIQV.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'Ex2', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/Cvh5KL4.png', isPlaying: false},
//             ]
//     },
//     {
//         id: 8,
//         groupName: "Progressions",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'Ex1',
//                     duration: '',
//                     minutes: 3,
//                     seconds: 0,
//                     bpm: 80,
//                     tab: 'http://i.imgur.com/KgaZ7kV.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'Ex2', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/cgxJYZ4.png', isPlaying: false},
//             ]
//     },
//     {
//         id: 9,
//         groupName: "Legato",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'Ex1',
//                     duration: '',
//                     minutes: 3,
//                     seconds: 0,
//                     bpm: 80,
//                     tab: 'http://i.imgur.com/U0mHnpv.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'Ex2', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/FivrwNa.png', isPlaying: false},
//                 {exId: 3, completed: false, exerciseName: 'Ex3', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/2b0SSXa.png', isPlaying: false},
//             ]
//     },
//     {
//         id: 10,
//         groupName: "Scale runs",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'Ex1',
//                     duration: '',
//                     minutes: 3,
//                     seconds: 0,
//                     bpm: 80,
//                     tab: 'http://i.imgur.com/YeOCiVo.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'Ex2', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/D15kJ2k.png', isPlaying: false},
//                 {exId: 3, completed: false, exerciseName: 'Ex3', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/yWrYRwx.png', isPlaying: false},
//             ]
//     }
// ];

// exerciseService.exerciseGroupList = [
//     {
//         id: 1,
//         groupName: "Warmup",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'Tremolo',
//                     duration: '',
//                     minutes: 3,
//                     seconds: 0,
//                     bpm: 60,
//                     tab: 'http://i.imgur.com/KNTmphr.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: '1+2 Fingers', duration: '', minutes: 1, seconds: 45, bpm: 60, tab: 'http://i.imgur.com/Mpn6i1r.png', isPlaying: false},
//                 {exId: 3, completed: false, exerciseName: '1+4 Fingers', duration: '', minutes: 1, seconds: 45, bpm: 60, tab: 'http://i.imgur.com/Mpn6i1r.png', isPlaying: false},
//                 {exId: 4, completed: false, exerciseName: '1+3 Fingers', duration: '', minutes: 1, seconds: 45, bpm: 60, tab: 'http://i.imgur.com/Mpn6i1r.png', isPlaying: false},
//                 {exId: 5, completed: false, exerciseName: '2+4 Fingers', duration: '', minutes: 1, seconds: 45, bpm: 60, tab: 'http://i.imgur.com/Mpn6i1r.png', isPlaying: false},
//                 {exId: 6, completed: false, exerciseName: '2+3 Fingers', duration: '', minutes: 1, seconds: 45, bpm: 60, tab: 'http://i.imgur.com/Mpn6i1r.png', isPlaying: false},
//                 {exId: 7, completed: false, exerciseName: '3+4 Fingers', duration: '', minutes: 1, seconds: 45, bpm: 60, tab: 'http://i.imgur.com/Mpn6i1r.png', isPlaying: false},
//                 {exId: 8, completed: false, exerciseName: '4 Notes per string', duration: '', minutes: 3, seconds: 0, bpm: 90, tab: 'http://i.imgur.com/GO6MOiM.png', isPlaying: false},
//                 {exId: 9, completed: false, exerciseName: 'Blues scale run', duration: '', minutes: 3, seconds: 0, bpm: 150, tab: 'http://i.imgur.com/NDCQ4gc.png', isPlaying: false},
//                 {exId: 10, completed: false, exerciseName: 'Dorian blues scale run', duration: '', minutes: 3, seconds: 0, bpm: 150, tab: 'http://i.imgur.com/0mAWPT7.png', isPlaying: false},
//             ]
//     },
//     {
//         id: 2,
//         groupName: "Licks and riffs",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'Django pedal point',
//                     duration: '',
//                     minutes: 3,
//                     seconds: 0,
//                     bpm: 80,
//                     tab: 'http://i.imgur.com/ZifQ31Q.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'Django D-major', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/RIHRFsb.png', isPlaying: false},
//                 {exId: 3, completed: false, exerciseName: 'Vibrato', duration: '', minutes: 3, seconds: 0, bpm: 90, tab: 'http://i.imgur.com/Rsfziof.png', isPlaying: false},
//                 {exId: 4, completed: false, exerciseName: 'Joe Walsh riff', duration: '', minutes: 3, seconds: 0, bpm: 150, tab: 'http://i.imgur.com/dAoM2ug.png', isPlaying: false},
//             ]
//     },
//     {
//         id: 3,
//         groupName: "String skipping arpeggios",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'G Major',
//                     duration: '',
//                     minutes: 3,
//                     seconds: 0,
//                     bpm: 80,
//                     tab: 'http://i.imgur.com/ed3l8MU.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'Em7', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/sLfjEWw.png', isPlaying: false},
//                 {exId: 3, completed: false, exerciseName: 'Diminished', duration: '', minutes: 3, seconds: 0, bpm: 90, tab: 'http://i.imgur.com/L5cpzQT.png', isPlaying: false},
//                 {exId: 4, completed: false, exerciseName: 'C major', duration: '', minutes: 3, seconds: 0, bpm: 150, tab: 'http://i.imgur.com/bdqrEsW.png', isPlaying: false},
//                 {exId: 5, completed: false, exerciseName: 'Tapped arp', duration: '', minutes: 3, seconds: 0, bpm: 140, tab: 'http://i.imgur.com/5lQlJzN.png', isPlaying: false},
//             ]
//     },
//     {
//         id: 4,
//         groupName: "3 string arpeggios",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'Em shape',
//                     duration: '',
//                     minutes: 3,
//                     seconds: 0,
//                     bpm: 80,
//                     tab: 'http://i.imgur.com/ddlsneC.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'Dm shape', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/eVjjZs9.png', isPlaying: false},
//                 {exId: 3, completed: false, exerciseName: 'Am shape', duration: '', minutes: 3, seconds: 0, bpm: 90, tab: 'http://i.imgur.com/XRkWIeV.png', isPlaying: false},
//                 {exId: 4, completed: false, exerciseName: 'Diminished', duration: '', minutes: 3, seconds: 0, bpm: 150, tab: 'http://i.imgur.com/jxcp8eF.png', isPlaying: false},
//             ]
//     },
//     {
//         id: 5,
//         groupName: "5 String sweep arpeggios",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'Am shape',
//                     duration: '',
//                     minutes: 3,
//                     seconds: 0,
//                     bpm: 80,
//                     tab: 'http://i.imgur.com/kwlgHCP.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'Cm shape', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/xrWbyfp.png', isPlaying: false},
//                 {exId: 3, completed: false, exerciseName: 'A shape', duration: '', minutes: 3, seconds: 0, bpm: 90, tab: 'http://i.imgur.com/A8T6P5x.png', isPlaying: false},
//                 {exId: 4, completed: false, exerciseName: 'C shape', duration: '', minutes: 3, seconds: 0, bpm: 150, tab: 'http://i.imgur.com/5DqLnIj.png', isPlaying: false},
//             ]
//     },
//     {
//         id: 6,
//         groupName: "Hybrid picking",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'Ex 1',
//                     duration: '',
//                     minutes: 3,
//                     seconds: 0,
//                     bpm: 80,
//                     tab: 'http://i.imgur.com/oI5DTFB.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'Hybrid picking + legato', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/fVinF9w.png', isPlaying: false},
//             ]
//     },
//     {
//         id: 7,
//         groupName: "Economy picking",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'Ex1',
//                     duration: '',
//                     minutes: 3,
//                     seconds: 0,
//                     bpm: 80,
//                     tab: 'http://i.imgur.com/IprMIQV.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'Ex2', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/Cvh5KL4.png', isPlaying: false},
//             ]
//     },
//     {
//         id: 8,
//         groupName: "Progressions",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'Ex1',
//                     duration: '',
//                     minutes: 3,
//                     seconds: 0,
//                     bpm: 80,
//                     tab: 'http://i.imgur.com/KgaZ7kV.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'Ex2', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/cgxJYZ4.png', isPlaying: false},
//             ]
//     },
//     {
//         id: 9,
//         groupName: "Legato",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'Ex1',
//                     duration: '',
//                     minutes: 3,
//                     seconds: 0,
//                     bpm: 80,
//                     tab: 'http://i.imgur.com/U0mHnpv.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'Ex2', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/FivrwNa.png', isPlaying: false},
//                 {exId: 3, completed: false, exerciseName: 'Ex3', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/2b0SSXa.png', isPlaying: false},
//             ]
//     },
//     {
//         id: 10,
//         groupName: "Scale runs",
//         exerciseGroupTotalTime: '0',
//         exercises:
//             [
//                 {
//                     exId: 1,
//                     completed: false,
//                     exerciseName: 'Ex1',
//                     duration: '',
//                     minutes: 3,
//                     seconds: 0,
//                     bpm: 80,
//                     tab: 'http://i.imgur.com/YeOCiVo.png',
//                     isPlaying: false,
//                     isPaused: false
//                 },
//                 {exId: 2, completed: false, exerciseName: 'Ex2', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/D15kJ2k.png', isPlaying: false},
//                 {exId: 3, completed: false, exerciseName: 'Ex3', duration: '', minutes: 3, seconds: 0, bpm: 80, tab: 'http://i.imgur.com/yWrYRwx.png', isPlaying: false},
//             ]
//     }
// ];