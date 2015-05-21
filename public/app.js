'use strict';

<<<<<<< HEAD
var moviesAroundMe = angular.module('MoviesAroundMe', []);
=======
moviesAroundMe.controller('moviesControl', ['OMDb', function(OMDb) {
  self = this;
  omdbData: Object;
>>>>>>> dc945dd1b3c0863cdd0783dc77fe89f5aa8c1542

moviesAroundMe.controller('moviesControl', ['$rootScope', '$scope', 'OMDb', function($rootScope, $scope, OMDb) {
  var self = this;

<<<<<<< HEAD
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
=======
  self.updateMovieRating = function(){
    console.log('Movie title: ' + self.movieTitle)
    OMDb.makeRequest(self.movieTitle).then(function(response) {
      self.imdbRating = response.data.imdbRating;
    });
  };
>>>>>>> dc945dd1b3c0863cdd0783dc77fe89f5aa8c1542
}]);
