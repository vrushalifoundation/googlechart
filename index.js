
var chart_directive = require('./build/src/ng2-googlechart.directive');
var combo_chart_directive = require('./build/src/ng2-googlechart-combo.directive');
var chart_module = require('./build/src/ng2-googlechart.module');
var wrapper=require('./build/src/ng2-googlechart-wrapper.directive');

exports.ChartDirective = chart_directive.ChartDirective;
exports.ComboChartDirective = combo_chart_directive.ComboChartDirective;
exports.Ng2GoogleChartModule = chart_module.Ng2GoogleChartModule;
exports.GoogleChartDirective=wrapper.GoogleChartDirective;