var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource']);

moviesAroundMe.controller('moviesControl', ['Aggregator', function(Aggregator) {
  var self = this;
  self.array = [];
   
  this.updateArray = function() {
    Aggregator.getName()
      .then(
      /* success function */
      function(name) {
        self.array.push(name.data);
      }).then(function() {
        console.log(self.array);
      });
  };

  this.getCinemas = function() {

  };

  this.updateArray();


}]);

