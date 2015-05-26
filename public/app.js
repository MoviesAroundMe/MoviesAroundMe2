var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource']);

var angularcallbacks_0 = function (data) {
  cineWorldCinemas = data.cinemas.map(function(cinema){
    return [cinema.id, cinema.name, cinema.postcode];
  });

  cineWorldCinemas.forEach(function(i) {
    this.cinemasArray.push(i[2]);
  });
};
moviesAroundMe.controller('moviesControl', ['$resource', 'Aggregator', 'CineWorld', '$http', function($resource, Aggregator, CineWorld, $http) {
  var self = this;
  var cineWorldAPI;
   
  // this.updateArray = function() {
  //   console.log("1");
  //   CineWorld.makeRequest()
  //     .then(
  //     /* success function */
  //     function(name) {
  //       console.log("2");
  //       self.array.push(name.data);
  //     }).then(function() {
  //       onsole.log("3");
  //       console.log(self.array);
  //     });
  // };


  // this.updateArray()

  cineWorldAPI = $resource('http://www.cineworld.co.uk/api/quickbook/cinemas',
    {callback: "JSON_CALLBACK"},
    {key: 'bHmPnV2t'},
    {full: true},
    {get: {
      method: "JSONP"
      }
    }
   );
        
  // self.cineWorldCinemas = cineWorldAPI.get();

  // .then(functon(data) {
  //   console.log(data);
  // });
     // var url = "https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK";

     var url = "http://www.cineworld.co.uk/api/quickbook/cinemas?key=bHmPnV2t&full=true&format=json&jsoncallback=JSON_CALLBACK";

     $http.jsonp(url)
      .then(function(data) {
        console.log('data: ' + data)
      });

}]);


  // this.updateArray = function() {
  //   Aggregator.getName()
  //     .then(
  //     /* success function */
  //     function(name) {
  //       self.array.push(name.data);
  //     }).then(function() {
  //       console.log(self.array);
  //     });
  // };

  // this.getCinemas = function() {

  // };