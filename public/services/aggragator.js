
moviesAroundMe.factory('Aggregator', ['$http', function($http) {

  function Aggregator() {

    var self = this;

    self.getName = function() {
        return $http.get('http://localhost:3000/name');
    };
 
  }
  
  return new Aggregator();
}]);
