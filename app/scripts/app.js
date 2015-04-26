'use strict';

/**
 * @ngdoc overview
 * @name esperimentiApp
 * @description
 * # esperimentiApp
 *
 * Main module of the application.
 */
angular
  .module('esperimentiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
     "kendo.directives"
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
