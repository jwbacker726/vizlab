(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common', '$http', datacontext]);

    function datacontext(common, $http) {
        var $q = common.$q;

        var service = {
            getPopulationInfo: getPopulationInfo,
            getMessageCount: getMessageCount,
            getPeople: getPeople,
            getStates: getStates
        };

        return service;

        function getStates() {
            var promise = $http.get('/api/states')
                .then(function (resposne) {
                    return resposne.data;
                });

            return promise;
        }

        function getPopulationInfo(state) {
            var promise = $http.get('/api/population?state=' + state)
            .then(function (response) {
                return response.data;
            })

            return promise;
        }

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            var people = [
                { firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
                { firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
                { firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
                { firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
                { firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
                { firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
                { firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' }
            ];
            return $q.when(people);
        }
    }
})();