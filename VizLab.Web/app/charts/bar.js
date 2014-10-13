(function () {
    'use strict';
    var controllerId = 'bar';
    angular.module('app').controller(controllerId, ['common', 'datacontext', '$q', '$routeParams', bar]);

    function bar(common, datacontext, $q, $routeParams) {
        console.warn('constructing bar');
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;

        vm.chartData = [];
        vm.state = $routeParams.state;

        activate();

        function loadData() {
            console.log("loading data for " + $routeParams.state);
            datacontext.getPopulationInfo($routeParams.state)
                .then(function (data) {
                    vm.chartData = vm.chartData.concat(data);
                });
        }

        function activate() {
            console.log('activating view');
            common.activateController([], controllerId)
                .then(function () { log('Activated Bar View'); });

            loadData();
        }
    }
})();