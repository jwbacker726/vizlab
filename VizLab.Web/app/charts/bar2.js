(function () {
    'use strict';
    var controllerId = 'bar2';
    angular.module('app').controller(controllerId, ['common', 'datacontext', '$scope', bar2]);

    // http://www.sitepoint.com/creating-charting-directives-using-angularjs-d3-js/

    function bar2(common, datacontext, $scope) {
        console.warn('constructing bar2');
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var vm = this;

        vm.states = [];
        vm.selectedState = "";
        vm.chartData = [];

        $scope.$watch('vm.selectedState', function () {
            loadData();
        }, false);

        activate();

        function loadData() {
            while (vm.chartData.length > 0) {
                vm.chartData.pop();
            }

            console.log("loading data for " + vm.selectedState);
            datacontext.getPopulationInfo(vm.selectedState)
                .then(function (data) {
                    vm.maxPop = data.maxPop;
                    vm.chartData = vm.chartData.concat(data.ageGroupInfos);
                });
        }

        function loadStates() {
            datacontext.getStates()
                .then(function (data) {
                    vm.states = vm.states.concat(data);
                });
        }

        function activate() {
            console.log('activating view');
            common.activateController([], controllerId)
                .then(function () { log('Activated Bar View'); });

            loadStates();
        }
    }
})();