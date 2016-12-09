/**
 * Created by Przemek on 2016-12-09.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .filter("secondsToDateTime", secondsToDateTime);

    function secondsToDateTime() {
        return function(seconds) {
            return new Date(1970, 0, 1).setSeconds(seconds);
        };
    }

})();