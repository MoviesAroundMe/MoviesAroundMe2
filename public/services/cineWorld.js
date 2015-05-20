'use strict';

    function angularcallbacks_0(data) {
      console.log(data.cinemas[0].name);
      console.log(data.cinemas[1].name);
    }

moviesAroundMe.factory('CineWorld', ['$http', function($http) {
    return {
      makeRequest: function() {
        return $http.jsonp('http://www.cineworld.co.uk/api/quickbook/cinemas?key=bHmPnV2t&full=true&callback=JSON_CALLBACK');
      }
    };
}]);
    
