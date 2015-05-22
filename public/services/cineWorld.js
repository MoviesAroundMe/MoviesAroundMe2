'use strict';

function angularcallbacks_0(data) {
  var cineWorldCinemas = data.cinemas.map(function(cinema){
    return [cinema.id, cinema.name, cinema.postcode];
  })
};

moviesAroundMe.factory('CineWorld', ['$http', function($http) {
  
  return {
    makeRequest: function() {
      return $http.jsonp('http://www.cineworld.co.uk/api/quickbook/cinemas?key=bHmPnV2t&full=true&callback=JSON_CALLBACK');
    }
  }


}]);
    
