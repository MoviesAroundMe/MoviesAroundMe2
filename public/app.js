var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource']);

moviesAroundMe.controller('moviesControl', ['Search', 'CineWorld', 'DistanceMatrix', function(Search, CineWorld, DistanceMatrix) {
  var self = this;
  
  CineWorld.makeRequest();
  DistanceMatrix.makeRequest();

}]);
