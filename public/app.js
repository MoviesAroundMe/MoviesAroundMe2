var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource']);

moviesAroundMe.controller('moviesControl', function() {
  self = this;

  movie1 = {Title:"Big",IMDb:"8.6",Rotten:"5.6",Distance:"0.2km", Cinema: "W149AX"};
  movie2 = {Title:"Home",IMDb:"8.6",Rotten:"5.6",Distance:"0.2km", Cinema: "E162RU"};
  movie3 = {Title:"Forrest",IMDb:"8.6",Rotten:"5.6",Distance:"0.2km", Cinema: "NN33NY"};

  self.updateMovies = function() {
    console.log('hello');
    self.movies = [movie1, movie2, movie3];
  }

  self.updateMap = function(cinema) {
  	$("#map-frame").attr('src', 'https://www.google.com/maps/embed/v1/directions?origin='+self.postcode+'&destination='+cinema+'&key=AIzaSyBCj5rD1yeJmhglY3eapLgqW1GC8WZDoP0')
  }

});
