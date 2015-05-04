'use strict';

/**
 * @ngdoc function
 * @name esperimentiApp.controller:FormcontrollerJsCtrl
 * @description
 * # FormcontrollerJsCtrl
 * Controller of the esperimentiApp
 */
angular.module('esperimentiApp')
  .controller('formController', function ($scope) {
  	$scope.comboDataSource = ["Algeria", "Germany", "Italy"];
  	$scope.funzioni =[
  		{
  		nome: 'onTextChange',
  		funzione: function(model){
  			 	if(true){
	  			return model + ' AAAA';
	  		}
	  		return model;
  		}
  	}];
  	$scope.comboProvinceFn = function () {
  		console.log('combo prov fn in ctrl');
  	}
  });
