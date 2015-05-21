'use strict';


moviesAroundMe.factory('OMDb', ['$http', function($http) {
    return {
      makeRequest: function(title) {
        return $http.get('http://www.omdbapi.com/?t=' + title +'&y=&plot=short&r=json&tomatoes=true').then(function(response){
          var titleString;
          var results;

          console.log(titleString);

          titleString = response.Title;

          console.log(titleString);

          results = titleString.map(function(result){
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
