(function () {
    'use strict';
    var controllerId = 'bar';
    angular.module('app').controller(controllerId, ['common', 'datacontext', '$q', bar]);

    // http://www.sitepoint.com/creating-charting-directives-using-angularjs-d3-js/

    function bar(common, datacontext, $q) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;

        vm.chartData = [];

        activate();

        function loadData() {
            datacontext.getPopulationInfo('Alabama')
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