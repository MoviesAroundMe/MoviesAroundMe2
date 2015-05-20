var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource']);

moviesAroundMe.controller('moviesControl', ['Search', 'CineWorld', function(Search, CineWorld) {
  var self = this;
  
  console.log('Sammy :-)');
  CineWorld.makeRequest().then(function(data) {
    // console.log("after the then");
    // console.log(data);
  });

}]);
