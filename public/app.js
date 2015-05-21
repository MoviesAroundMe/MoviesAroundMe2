var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource']);

moviesAroundMe.controller('moviesControl', ['Search', 'CineWorld', 'DistanceMatrix', 'Aggragator', function(Search, CineWorld, DistanceMatrix, Aggragator) {
  var self = this;
  
  Aggragator.makeRequest();

}]);
