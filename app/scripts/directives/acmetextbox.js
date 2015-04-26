'use strict';

/**
 * @ngdoc directive
 * @name esperimentiApp.directive:acmeTextbox.js
 * @description
 * # acmeTextbox.js
 */
angular.module('esperimentiApp')
  .directive('acmeTextbox', function () {
    return {
      require: ['^acmeForm'],
      template: '<input type="text" ng-model="prova" />',
      restrict: 'E',
      link: function postLink(scope, element, attrs, controllers) {
      	
      	var acmeForm = controllers[0];
        element.bind('change', function (evt) {
        	var result = acmeForm.onTextChange(scope.prova);
        	scope.$apply(function(){
        		scope.prova = result;
        	});
        });
      }
    };
  });
