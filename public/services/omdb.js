'use strict';

moviesAroundMe.factory('omdbApiService', function ($resource, $cacheFactory) {

  console.log("Hello")

  var service = {},
      omdb_api_endpoint = "http://www.omdbapi.com/",
      default_params = {i:"", t:"", r:"json"},
      Movie = $resource(
                          omdb_api_endpoint,
                          default_params,
                          {
                            query: {method: "GET", cache: true}
                          }
                       );

  service.getMovieByTitle = function(title) {
    console.log("Hello")
    return Movie.query({t: title})
  };

  service.getMovieById = function(id) {
    return Movie.query({i: id})
  };
  console.log("Hello")
  // console.log(service.getMovieByTitle(big));
  return service;
});
