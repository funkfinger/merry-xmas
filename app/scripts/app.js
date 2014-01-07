'use strict';

var app = angular.module('merryXmasApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'merryXmasController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

// app.run(function($rootScope) {
//   $rootScope.$on('$viewContentLoaded', function () {
//     $(document).foundation();
//   });
// });
