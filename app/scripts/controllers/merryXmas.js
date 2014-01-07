'use strict';

angular.module('merryXmasApp')
  .controller('merryXmasController', function ($scope, $http) {
    $scope.myTest = 'hello';
    $scope.playTrack = function(item){
      console.log(item.song.url);
      var sound;
      sound = new Howl({
        urls: [item.song.url]
      }).play();
    };
    $http.get('xmas_albums.json').success(function(data) {
      $scope.albumsObj = data;
    });
  });
