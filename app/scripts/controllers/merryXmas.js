'use strict';

angular.module('merryXmasApp')
  .controller('merryXmasController', function ($scope, $http) {
    $scope.myTest = 'hello';
    $http.get('xmas_albums.json').success(function(data) {
      $scope.albums = data;
    });
  });
