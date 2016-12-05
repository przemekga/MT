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

        exerciseService.exerciseList = [
            {
                id: 1,
                groupName: "Group 1",
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
            },
            {
                id: 2,
                groupName: "Group 2",
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
            },
            {
                id: 3,
                groupName: "Group 3",
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
            }
        ];

        exerciseService.getNewId = function () {

            if(exerciseService.newId) {
                exerciseService.newId++;
                return exerciseService.newId;
            } else {
                var maxId = _.max(exerciseService.exerciseList, function (entry) {return entry.id;});
                exerciseService.newId = maxId.id + 1;
                return exerciseService.newId;
            }
        };

        exerciseService.save = function (entry) {
            entry.id = exerciseService.getNewId();
            exerciseService.exerciseList.push(entry);
        };

        return exerciseService;
    }
})();