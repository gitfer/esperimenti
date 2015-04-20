'use strict';

/**
 * @ngdoc directive
 * @name esperimentiApp.directive:watcher
 * @description
 * # watcher
 */
angular.module('esperimentiApp')
.directive('watcher', function ($rootScope) {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        element.text('this is the watcher directive');
        scope[attrs.ngModel] = 'aaa';
        scope.$watch(attrs.ngModel, function(newVal, oldVal){
        	if(newVal !== oldVal)
        	$rootScope.$broadcast('aachanged', {data: attrs.ngModel});
        });

        scope.$on('aachanged', function(evt, data){
        	if(data.data !== attrs.ngModel){
        		console.log('data', data)
        		console.log('attrs.ngModel', attrs.ngModel);
        		element.val(data.data)
     			// scope[attrs.ngModel] = data;   			
        	}
        });
      }
    };
  });