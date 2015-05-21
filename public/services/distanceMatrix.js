'use strict';

moviesAroundMe.factory('DistanceMatrix', ['$http', function($http) {
    
  return {
    makeRequest: function(array) {

      var service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: ["SW74LS"],
          destinations: ["SE19JY", "NW80RJ"],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        }, callback);
  
      function callback(response, status) {
        if (status != google.maps.DistanceMatrixStatus.OK) {
          alert('Error was: ' + status);   
          }
        else {
          console.log(response.rows)
          }   
        }
      }     
  };
}]);