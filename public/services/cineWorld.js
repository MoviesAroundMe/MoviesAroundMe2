'use strict';
    
function angularcallbacks_0(data) {
  var cineWorldCinemas = data.cinemas.map(function(cinema){
    return [cinema.id, cinema.name, cinema.postcode];
  })

  console.log(cineWorldCinemas);

};

moviesAroundMe.factory('CineWorld', ['$http', function($http) {

  return {
    makeRequest: function(array) {
      return $http.jsonp('http://www.cineworld.co.uk/api/quickbook/cinemas?key=bHmPnV2t&full=true&callback=JSON_CALLBACK');
    }
  }


}]);
    
