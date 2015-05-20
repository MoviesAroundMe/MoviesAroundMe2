'use strict';
    
    var cinemas1

    function angularcallbacks_0(data) {
      var cinemas = data.cinemas.map(function(cinema){
        return [cinema.id, cinema.name, cinema.postcode];
      })

      cinemas1 = cinemas;
      console.log(cinemas1);
    };

moviesAroundMe.factory('CineWorld', ['$http', function($http) {

    return {
      makeRequest: function(array) {
        return $http.jsonp('http://www.cineworld.co.uk/api/quickbook/cinemas?key=bHmPnV2t&full=true&callback=JSON_CALLBACK');
      }
    }


}]);
    
