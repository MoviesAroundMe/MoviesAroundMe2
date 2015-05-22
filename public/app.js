'use strict';

var moviesAroundMe = angular
  .module('MoviesAroundMe', [
    'ngResource',
    'ngRoute'
  ])
  .controller('moviesControl', function($scope, $routeParams, omdbApiService) {

    $scope.movie = omdbApiService.getMovieById($routeParams.id);

    // console.log("Hello")
    // console.log(service.getMovieByTitle(big));
    console.log(service.getMovieByTitle(big));

    $scope.goToSearchResult = function (title) {
     var movie = omdbApiService.getMovieByTitle(title);
     movie.$promise.then(
       function(movieData){
         if (movieData['imdbID'] === undefined) { return false; }
         $scope.goTo(movieData);
       }
     );
   }
  //  console.log(service.getMovieByTitle(big));
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/movies.html',
        controller: 'moviesControl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
