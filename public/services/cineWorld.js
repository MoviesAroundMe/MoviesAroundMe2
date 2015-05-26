'use strict';



moviesAroundMe.factory('CineWorld', ['$http', function($http) {
  // var self = this;
  // var cineWorldCinemas = [];
  // var cinemas = [];

  // function angularcallbacks_0(data) {
  //   cineWorldCinemas = data.cinemas.map(function(cinema){
  //     return [cinema.id, cinema.name, cinema.postcode];
  //   });

  //   cineWorldCinemas.forEach(function(i) {
  //     cinemas.push(i[2]);
  //   });
  //   return cinemas;
  // };
  return {
    makeRequest: function() {
      // $http.jsonp('http://www.cineworld.co.uk/api/quickbook/cinemas?key=bHmPnV2t&full=true&jsoncallback=JSON_CALLBACK')
      //   .success(function(data) {
      //     self.c
          
      //   })

     var url = "https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK";

     $http.jsonp(url)
      .success(function(data) {
        $scope.photos = (data.items);
      });
    },



  }

}]);
    
