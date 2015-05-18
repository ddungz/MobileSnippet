// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'brantwills.paging'])

.controller("GridviewCtr", function($scope) {
  $scope.images = [];
  $scope.loadImages = function() {
    for(var i = 0; i < 30; i++) {
        $scope.images.push({ id: i, src: "http://placehold.it/50x50" });
	}
  };

  $scope.currentPage = 0;
  $scope.pageSize = 12;
  $scope.numberOfPage = function() {
    return Math.ceil($scope.images.length/$scope.pageSize);
  }
})
.filter('startFrom', function() {
  return function(input, start) {
    start  = +start;
    return input.slice(start);
  }
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
