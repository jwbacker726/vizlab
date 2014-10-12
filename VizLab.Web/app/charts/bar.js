(function () {
    'use strict';
    var controllerId = 'bar';
    angular.module('app').controller(controllerId, ['common', 'datacontext', '$q', '$routeParams', bar]);

    // http://www.sitepoint.com/creating-charting-directives-using-angularjs-d3-js/

    function bar(common, datacontext, $q, $routeParams) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;

        vm.chartData = [];

        activate();

        function loadData() {
            console.log("loading data for " + $routeParams.state);
            datacontext.getPopulationInfo($routeParams.state)
                .then(function (data) {
                    vm.chartData = vm.chartData.concat(data);
                });
        }

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Bar View'); });

            loadData();
        }
    }
})();