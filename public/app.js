'use strict';

var moviesAroundMe = angular
  .module('MoviesAroundMe', [
    'ngResource',
    'ngRoute'
  ])
  .controller('moviesControl', function($scope, $http) {

  //   $scope.movie = omdbApiService.getMovieById($routeParams.id);
  //   console.log("Hello")
  //   console.log(omdbApiService.getMovieById($routeParams.tt0094737));
  //   console.log("Hello")
   //
  //   $scope.goToSearchResult = function (title) {
  //    var movie = omdbApiService.getMovieByTitle(title);
  //    movie.$promise.then(
  //      function(movieData){
  //        if (movieData['imdbID'] === undefined) { return false; }
  //        $scope.goTo(movieData);
  //      }
  //    );
  //  }
    console.log("Hello");
    console.log($scope.search(big));

      $scope.search = function(searchMovie) {
    			$scope.api = 'http://www.omdbapi.com/?t=' + $scope.searchMovie + '&y=&plot=short&r=json';

    			$http.get($scope.api)
    				.success(function(data) {
    					$scope.name = data.Title;
    					$scope.release = data.Released;
    					$scope.length = data.Runtime;
    					$scope.description = data.Plot;
    					$scope.rating = data.imdbRating;
    				});
    		}
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
