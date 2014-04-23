'use strict';

angular
  .module('angularTestAppApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/drivers', {
        templateUrl: 'views/driversList.html',
        controller: 'DriversController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
