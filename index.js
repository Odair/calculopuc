$(function () {

    $("#eq1").hide();
    $("#eq2").hide();
    $("#eq3").hide();
    $("#eq4").hide();


    var dataSource = [];

    var types = ["line", "stackedline", "fullStackedArea"];


    var chartOptions = {
        dataSource: dataSource,
        commonSeriesSettings: {
            type: types[0],
            argumentField: "year"
        },
        commonAxisSettings: {
            grid: {
                visible: true
            }
        },
        margin: {
            bottom: 20
        },
        series: [
            { valueField: "smp", name: "Eq. 1" },
            { valueField: "mmp", name: "Eq. 2" }
        ],
        tooltip: {
            enabled: true

        },
        legend: {
            verticalAlignment: "top",
            horizontalAlignment: "right"
        },
        title: "Regiao viavel"
    };

    var chart = $("#chart").dxChart(chartOptions).dxChart("instance");

    $("#types").dxSelectBox({
        dataSource: types,
        value: "line",
        onValueChanged: function (e) {
            chart.option("commonSeriesSettings.type", e.value);
        }
    });


    $("#botao").click(function () {
        dataSource.push({
            year: 0,
            smp: 1800
        },
        {
            year: 600,
            smp: 0
        });

        var chartOptions = {
            dataSource: dataSource,
            commonSeriesSettings: {
                type: types[0],
                argumentField: "year"
            },
            commonAxisSettings: {
                grid: {
                    visible: true
                }
            },
            margin: {
                bottom: 20
            },
            series: [
                { valueField: "smp", name: "Eq. 1" },
                { valueField: "mmp", name: "Eq. 2" }
            ],
            tooltip: {
                enabled: true
            },
            legend: {
                verticalAlignment: "top",
                horizontalAlignment: "right"
            },
            title: "Regiao viavel"
        };

        var chart = $("#chart").dxChart(chartOptions).dxChart("instance");

        $("#types").dxSelectBox({
            dataSource: types,
            value: "line",
            onValueChanged: function (e) {
                chart.option("commonSeriesSettings.type", e.value);
            }
        });

        $("#eq1").show();
        $("#botao").hide();
    });


    $("#botao2").click(function () {
        dataSource.push({
            year: 0,
            smp: 1800,
            mmp: 1500
        }, {
            year: 600,
            smp: 0
        }, {
            year: 3000,
            mmp: 0
        });

        var chartOptions = {
            dataSource: dataSource,
            commonSeriesSettings: {
                type: types[0],
                argumentField: "year"
            },
            commonAxisSettings: {
                grid: {
                    visible: true
                }
            },
            margin: {
                bottom: 20
            },
            series: [
                { valueField: "smp", name: "Eq. 1" },
                { valueField: "mmp", name: "Eq. 2" }
            ],
            tooltip: {
                enabled: true
            },
            legend: {
                verticalAlignment: "top",
                horizontalAlignment: "right"
            },
            title: "Regiao viavel"
        };

        var chart = $("#chart").dxChart(chartOptions).dxChart("instance");

        $("#types").dxSelectBox({
            dataSource: types,
            value: "line",
            onValueChanged: function (e) {
                chart.option("commonSeriesSettings.type", e.value);
            }
        });

        $("#eq2").show();
        $("#botao2").hide();
    });

    $("#botao3").click(function () {
  

        dataSource = [{
            year: 0,
            mmp: 1500
        }, {
            year: 120,
            mmp: 1440
        }, {
            year: 600,
            mmp: 0
        }];

        var chartOptions = {
            dataSource: dataSource,
            commonSeriesSettings: {
                type: types[0],
                argumentField: "year"
            },
            commonAxisSettings: {
                grid: {
                    visible: true
                }
            },
            margin: {
                bottom: 20
            },
            series: [
                { valueField: "mmp", name: "Eq. 2" }
            ],
            tooltip: {
                enabled: true
            },
            legend: {
                verticalAlignment: "top",
                horizontalAlignment: "right"
            },
            title: "Regiao viavel"
        };

        var chart = $("#chart").dxChart(chartOptions).dxChart("instance");

        $("#types").dxSelectBox({
            dataSource: types,
            value: "line",
            onValueChanged: function (e) {
                chart.option("commonSeriesSettings.type", e.value);
            }
        });

        $("#eq3").show();
        $("#eq1").hide();
        $("#eq2").hide();
        $("#botao3").hide();
    });

    $("#botao4").click(function () {

        $("#eq4").show();
        $("#eq3").hide();
        $("#eq1").hide();
        $("#eq2").hide();
        $("#botao4").hide();

    });
});

