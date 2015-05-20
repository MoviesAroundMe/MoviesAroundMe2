var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource']);

moviesAroundMe.controller('moviesControl', ['Search', 'CineWorld', function(Search, CineWorld) {
  var self = this;

  console.log('Helllloooooooooooooooo!');
  console.log(Search);
  console.log(CineWorld);
}]);
