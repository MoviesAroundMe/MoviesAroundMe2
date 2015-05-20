'use strict';

moviesAroundMe.factory('DistanceMatrix', ['$http', 'CineWorld', function($http, CineWorld) {

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
          console.log('in the callback')
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