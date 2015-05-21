'use strict';

var moviesAroundMe = angular.module('MoviesAroundMe', []);

moviesAroundMe.controller('moviesControl', ['$rootScope', '$scope', 'OMDb', function($rootScope, $scope, OMDb) {
  var self = this;

  $rootScope.showTitle = true;
  $rootScope.page_title = "Movies Around Me"
  $rootScope.page_description = "Enter your postcode"

  // OMDb.makeRequest("big").then(function(results) {
  //   $scope.results = results;
  // });

  // omdbData: Object;
  //
  // OMDb.makeRequest('big').then(function(results) {
  //   console.log(data);
  // });
}]);
