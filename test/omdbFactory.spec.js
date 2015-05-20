'use strict';

describe('OMDb', function(){
  beforeEach(module('MoviesAroundMe'));

  var omdbFactory, httpBackend;

  beforeEach(inject(function(_omdbFactory_, $httpBackend){
    omdbFactory = _omdbFactory_;
    httpBackend = $httpBackend;
  }));

  it("should do something", function() {
    httpBackend.whenGET('http://www.omdbapi.com/?t=big&y=&plot=short&r=json&tomatoes=true').respond({
      Title: "Big"
    });
    omdbFactory.makeRequest("big").then(function(Title){
      expect(Title).toEqual(["Big"]);
    });
    httpBackend.flush();
  });
});
