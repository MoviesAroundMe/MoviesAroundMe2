'use strict';

moviesAroundMe.factory('CineWorld', ['$http', function($http) {
    return {
      makeRequest: function() {
        console.log("inside the factory");
        return $http({        
        method: 'JSONP',
        url: 'http://www.cineworld.co.uk/api/quickbook/cinemas?key=bHmPnV2t&full=true&callback=JSON_CALLBACK'
      }).then(function(data){
        console.log(data);
      });
      return 1
    }
  };
}]);
