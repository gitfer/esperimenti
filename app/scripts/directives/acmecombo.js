'use strict';

/**
 * @ngdoc directive
 * @name esperimentiApp.directive:acmeCombo.js
 * @description
 * # acmeCombo.js
 */
angular.module('esperimentiApp')
  .directive('acmeCombo', function () {
    return {
      require: '^acmeForm',
      scope: {
      	comboOptions: '@',
      	comboDataSource: '='
      },
      // template: ' <div><h3>Combo direttiva</h3><select kendo-combo-box' +
      //           'k-placeholder="\'Select product\'"' +
      //           'k-data-text-field="\'ProductName\'"' +
      //           'k-data-value-field="\'ProductID\'"' +
      //           'k-filter="\'contains\'"' +
      //           'k-auto-bind="false"' +
      //           'k-min-length="3"' +
      //           'k-data-source="comboDataSource"' +
      //           // 'k-options="comboOptions"' +
      //           'style="width: 300px;" >' +
      //   '</select></div>',
      template: '<div><h3>Combo direttiva</h3><select kendo-combo-box style="width: 300px;" k-data-source="{{comboDataSource}}"></select></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the acmeCombo.js directive');
        element.find('select').attr('kendo-combo-box', attrs.name);

	    scope.$on("kendoWidgetCreated", function(event, widget){
	        // the event is emitted for every widget; if we have multiple
	        // widgets in this controller, we need to check that the event
	        // is for the one we're interested in.
	        if (widget.element.attr('kendo-combo-box') === attrs.name) {
	        	if(attrs.name === 'comboStati') // TODO: astrarre logica
	            	widget.select(0);
	        }
	    });
      }
    };
  });
