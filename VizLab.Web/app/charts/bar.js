(function() {
    'use strict';
    var controllerId = 'bar';
    angular.module('app').controller(controllerId, ['common', 'datacontext', '$q', bar]);

    function bar(common, datacontext, $q) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function() { log('Activated Bar View'); });
        }

        d3.select(".chart-host")
        .append("g")
        .attr({
            height: 300,
            width: 400
        });

        d3.json("/api/population?state=Minnesota", function () {
            alert('you');
        });
    }
})();