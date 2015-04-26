'use strict';

/**
 * @ngdoc directive
 * @name esperimentiApp.directive:acmeForm
 * @description
 * # acmeForm
 */
angular.module('esperimentiApp')
  .directive('acmeForm', function () {
    return {
      restrict: 'E',
      scope: {
      	funzioni: '@'
      },
      controller: function ($scope) {
      	console.log('$scope.$parent.funzioni', $scope.$parent.funzioni);
      	var that = this;
      	angular.forEach( $scope.$parent.funzioni, function (item, index) {
      		that[item.nome] = item.funzione;
      	});
      },
      link: function postLink(scope, element, attrs, controlli) {
      	console.log('funzioni in link', scope);
        // element.text('this is the acmeForm directive');
      }
    };
  });
