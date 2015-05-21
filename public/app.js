'use strict';

var moviesAroundMe = angular.module('MoviesAroundMe', []);
moviesAroundMe.controller('moviesControl', ['OMDb', function(OMDb) {
  self = this;
  omdbData: Object;


moviesAroundMe.controller('moviesControl', ['$rootScope', '$scope', 'OMDb', function($rootScope, $scope, OMDb) {
  var self = this;

  $rootScope.showTitle = true;
  $rootScope.page_title = "Movies Around Me"
  $rootScope.page_description = "Enter your postcode"

  self.updateMovieRating = function(){
    console.log('Movie title: ' + self.movieTitle)
    OMDb.makeRequest(self.movieTitle).then(function(response) {
      self.imdbRating = response.data.imdbRating;
    });
  };

}]);
