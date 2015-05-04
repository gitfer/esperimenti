'use strict';

/**
 * @ngdoc directive
 * @name esperimentiApp.directive:acmeCombo.js
 * @description
 * # acmeCombo.js
 */
angular.module('esperimentiApp')
  .directive('acmeCombo', function ($rootScope) {
    return {
      require: '^acmeForm',
      scope: {
      	comboOptions: '@',
      	comboDataSource: '=',
      	label: '@',
      	dependsOn: '@',
      	dependsOnFn: '&'
      },
      template: '<div><h3>{{label}}</h3><select kendo-combo-box="{{name}}" style="width: 300px;" k-data-source="{{comboDataSource}}"></select></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the acmeCombo.js directive');
        element.find('select').attr('name', attrs.name);

	    scope.$on("kendoWidgetCreated", function(event, widget){
	        // the event is emitted for every widget; if we have multiple
	        // widgets in this controller, we need to check that the event
	        // is for the one we're interested in.

			// function combobox_change(e) {
			//   var value = this.value();
			//   console.log('new val '+value)
			// }
	        if (widget.element.attr('kendo-combo-box') === attrs.name) {
	        	// if(attrs.name === 'comboStati') // TODO: astrarre logica
	         //    	widget.select(0);
	         //    if(scope.dependsOn){
	         //    	var depOnFn = scope.dependsOnFn || function(){ console.log('default fn'); };
		        //     element.find('select').on(scope.dependsOn+'changed', depOnFn);	
	         //    }
	        }

	        scope.$on(scope.dependsOn, function(evt, data){
	        		// console.log('CHANGED: ' + data.el + ' by ' + attrs.name, scope, widget);
	        		widget.select(data.el);

	        });
	            element.find('select').bind("change", function () {
	            	$rootScope.$broadcast(attrs.name, {el: this.selectedIndex});
	            });
	    });
      }
    };
  });
