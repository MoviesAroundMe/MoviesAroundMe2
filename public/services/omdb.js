'use strict';


moviesAroundMe.factory('OMDb', ['$http', function($http) {
    return {
      makeRequest: function(title) {
        return $http.get('http://www.omdbapi.com/?t=' + title +'&y=&plot=short&r=json&tomatoes=true').then(function(response){
          var responseString, results;

          responseString = response.data;

          console.log(responseString);

          results = responseString.map(function(result){
            return result.Title
          });

          results = results.filter(function(element, position) {
            return results.indexOf(element) === position;
          });

          return results;
        });
      }
    };
  }]);
