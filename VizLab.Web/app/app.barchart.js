(function () {
    'use strict';

    var app = angular.module('app');

    function drawChart(d3, data) {

        if (!data || !data.length) {
            return;
        }

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

        var maxPopulation = d3.max(data, function (d) {
            return d.categoryValue;
        });

        var yScale = d3.scale.linear()
            .domain([0, maxPopulation])
            .range([0, height - margin.top - margin.bottom]);

        var rects = g.selectAll("rect")
            .data(data);

        rects.enter()
            .append("rect")
            .transition()
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

        g.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text(function(d, i) {
                return d.categoryType;
            })
            .attr({
                "text-anchor": "start",
                dx: function(d, i) {
                    return 10;
                },
                dy: function(d, i) {
                    return (i * 50) + 14;
                },
                transform: "translate(0,500)rotate(-90)",
                "font-family": "sans-serif",
                stroke: "white"
            });
    }


    app.directive("barChart", function ($parse, $window) {
        return {
            restrict: "EA",
            template: "<div id='barchart-host'></div>",
            link: function (scope, elem, attrs) {
                var exp = $parse(attrs.chartData);
                var data = exp(scope);

                scope.$watchCollection(exp, function (newVal, oldVal) {
                    if (newVal) {
                        drawChart($window.d3, newVal);
                    }
                });

            }
        }
    });
})();