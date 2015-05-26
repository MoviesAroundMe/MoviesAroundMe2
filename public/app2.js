var moviesAroundMe = angular.module('MoviesAroundMe',['ngResource']);

moviesAroundMe.controller('moviesControl', function() {
  self = this;

  data = { "records":[ {"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"}, {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"}, {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"}, {"Name":"Around the Horn","City":"London","Country":"UK"}, {"Name":"B's Beverages","City":"London","Country":"UK"}, {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"}, {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"}, {"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"}, {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"}, {"Name":"Bon app'","City":"Marseille","Country":"France"}, {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"}, {"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"}, {"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"}, {"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"}, {"Name":"Comércio Mineiro","City":"São Paulo","Country":"Brazil"} ] };

  movie1 = {Title:"Big",IMDb:"8.6",Rotten:"5.6",Distance:"0.2km"};
  movie2 = {Title:"Home",IMDb:"8.6",Rotten:"5.6",Distance:"0.2km"};
  movie3 = {Title:"Forrest",IMDb:"8.6",Rotten:"5.6",Distance:"0.2km"};
  self.movies = [movie1, movie2, movie3];
  self.names = data.records;

  updateMovies = function() {
    //update self.movies to service call
  }

});
