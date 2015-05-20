var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource']);

moviesAroundMe.controller('moviesControl', ['Search', 'CineWorld', function(Search, CineWorld) {
  var self = this;
  
  console.log('In the controller');
  CineWorld.makeRequest();

}]);
