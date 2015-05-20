'use strict';
var cinemas = [];

    function angularcallbacks_0(data) {
      console.log(data.cinemas[0].name);
      console.log(data.cinemas.length);
      for (var i = 0; i < data.cinemas.length; i++) {
  		cinemas.push([]);
  		cinemas[i].push(data.cinemas[i].id);
  		cinemas[i].push(data.cinemas[i].name);
  		cinemas[i].push(data.cinemas[i].postcode);
  	  }
  	  console.log(cinemas);
    }

moviesAroundMe.factory('CineWorld', ['$http', function($http) {
    return {
      makeRequest: function() {
        return $http.jsonp('http://www.cineworld.co.uk/api/quickbook/cinemas?key=bHmPnV2t&full=true&callback=JSON_CALLBACK');
      }
    };
}]);
    
