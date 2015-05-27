var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource']);

moviesAroundMe.controller('moviesControl', function() {
  self = this;

  movie1 = {Title:"Big",IMDb:"8.6",Rotten:"5.6",Distance:"0.2km"};
  movie2 = {Title:"Home",IMDb:"8.6",Rotten:"5.6",Distance:"0.2km"};
  movie3 = {Title:"Forrest",IMDb:"8.6",Rotten:"5.6",Distance:"0.2km"};
  self.movies = [movie1, movie2, movie3];

  updateMovies = function() {
    //update self.movies to service call
  }

});
