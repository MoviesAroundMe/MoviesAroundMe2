'use strict';

describe('OMDb', function(){
  beforeEach(module('MoviesAroundMe'));

  var omdbFactory, httpBackend;

  beforeEach(inject(function(OMDb, $httpBackend){
    omdbFactory = OMDb;
    httpBackend = $httpBackend;
  }));

  it("should do something", function() {
    httpBackend.whenGET('http://www.omdbapi.com/?t=big&y=&plot=short&r=json&tomatoes=true').respond({
      Title: "Big",
      Year: "1998"
    });
    omdbFactory.makeRequest("big").then(function(responseString){
      expect(responseString).toEqual(Object({ Title: 'Big', Year: '1998' }));
    });
    httpBackend.flush();
  });
});
