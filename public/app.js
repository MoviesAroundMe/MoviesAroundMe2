'use strict';

var moviesAroundMe = angular.module('MoviesAroundMe', []);

moviesAroundMe.controller('moviesControl', ['$rootScope', '$scope', function($rootScope, $scope) {
  var self = this;

  var movie1 = {Title:"Big",IMDb:"8.6",Rotten:"5.6",Distance:"0.2km", Cinema: "W149AX"};
  var movie2 = {Title:"Home",IMDb:"8.6",Rotten:"5.6",Distance:"0.2km", Cinema: "E162RU"};
  var movie3 = {Title:"Forrest",IMDb:"8.6",Rotten:"5.6",Distance:"0.2km", Cinema: "NN33NY"};

  self.updateMovies = function() {
    self.movies = [movie1, movie2, movie3];
  }

  self.updateMap = function(cinema) {
  	$("#map-frame").attr('src', 'https://www.google.com/maps/embed/v1/directions?origin='+self.postcode+'&destination='+cinema+'&key=AIzaSyBCj5rD1yeJmhglY3eapLgqW1GC8WZDoP0')
  }

  $rootScope.showTitle = true;
  $rootScope.page_title = "Movies Around Me"
  $rootScope.page_description = "Enter your postcode"

  // self.updateMovieRating = function(){
  //   console.log('Movie title: ' + self.movieTitle)
  //   OMDb.makeRequest(self.movieTitle).then(function(response) {
  //     self.imdbRating = response.data.imdbRating;
  //   });
  // };

}]);
