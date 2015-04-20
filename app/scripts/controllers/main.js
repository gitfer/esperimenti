'use strict';

/**
 * @ngdoc function
 * @name esperimentiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the esperimentiApp
 */
angular.module('esperimentiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
