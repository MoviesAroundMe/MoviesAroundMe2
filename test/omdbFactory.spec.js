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
      Title: "Big"
    });
    omdbFactory.makeRequest("big").then(function(results){
      expect(results).toEqual("Big");
    });
    httpBackend.flush();
  });
});
