(function () {
    'use strict';

    var app = angular.module('app');

    // new
    if (!d3.chart) d3.chart = {};

    d3.chart.barchart = function () {
        var g;
        var data;
        var width = 900;
        var height = 500;
        var margin = { top: 10, bottom: 10, right: 10, left: 10 };
        var dispatch = d3.dispatch(chart, "hover");

        function chart(container) {
            g = container;
            update();
        }

        chart.update = update;

        function update() {

            var maxPopulation = d3.max(data, function (d) {
                return d.categoryValue;
            });

            var yScale = d3.scale.linear()
                .domain([0, maxPopulation])
                .range([0, height - margin.top - margin.bottom]);

            var rects = g.selectAll("rect.item")
                .data(data, function (d) {
                    return d.categoryType;
                });

            rects
                .enter()
                .append("rect")
                .classed('item', true);

            rects.exit().remove();

            rects
                .attr({
                    height: function (d, i) {
                        var w = yScale(d.categoryValue);
                        return w;
                    },
                    width: function (d, i) {
                        return 20;
                    },
                    x: function (d, i) {
                        var x = i * (width / data.length);
                        return x;
                    },
                    y: function (d, i) {
                        return height - yScale(d.categoryValue);
                    },
                    fill: 'green'
                });

            rects.transition() //NOT WORKING! :((
                .duration(2000)
                .attr({
                    height: function (d, i) {
                        var w = yScale(d.categoryValue);
                        return w;
                    }
                });

            g.selectAll("text")
                .data(data)
                .enter()
                .append("text")
                .text(function (d, i) {
                    return d.categoryType;
                })
                .attr({
                    "text-anchor": "start",
                    dx: function (d, i) {
                        return 10;
                    },
                    dy: function (d, i) {
                        return (i * 50) + 14;
                    },
                    transform: "translate(0,500)rotate(-90)",
                    "font-family": "sans-serif",
                    stroke: "white"
                });
        }

        chart.data = function (value) {
            if (!arguments.length) return data;
            data = value;
            return chart;
        }
        chart.width = function (value) {
            if (!arguments.length) return width;
            width = value;
            return chart;
        }
        chart.height = function (value) {
            if (!arguments.length) return height;
            height = value;
            return chart;
        }

        return d3.rebind(chart, dispatch, "on");
    }

    // endnew

    function drawChart(d3, data) {

        var height = 500;
        var width = 900;
        var margin = { top: 10, bottom: 10, right: 10, left: 10 };

        var svg = d3.select("#barchart-host")
            .append('svg')
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom);

        svg.append("rect")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("fill", "pink");

        var g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var barchart = d3.chart.barchart()
            .data(data);

        barchart(g);
        return barchart;
    }

    app.directive("barChart", function ($parse, $window) {
        console.warn('directive called');

        return {
            restrict: "EAC",
            template: "<div id='barchart-host'></div>",
            link: function (scope, elem, attrs) {
                var exp = $parse(attrs.chartData);
                var data = exp(scope);
                var chart = drawChart($window.d3, data);
                scope.$watchCollection(exp, function (newVal, oldVal) {
                    if (newVal && newVal.length > 0) {
                        console.log('updating chart');
                        chart.data(newVal);
                        chart.update();
                    }
                });
            }
        }
    });

})();