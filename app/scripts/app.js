'use strict';

angular
  .module('angularTestAppApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'angularTestAppApp.services'
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
      .when('/drivers/:id', {
        templateUrl: 'views/driver.html',
        controller: 'DriverController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
