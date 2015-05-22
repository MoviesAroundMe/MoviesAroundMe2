'use strict';

describe('moviesControl', function(){
  beforeEach(module("MoviesAroundMe"));

  var root, scope, ctrl, search, omdb;

  beforeEach(inject(function(_$rootScope_, _$controller_) {
    root = _$rootScope_;
    scope = root.$new();
    ctrl = _$controller_;
    // search = _Search_;
    // omdb = _OMDb_;
    ctrl('moviesControl', {'$rootScope' : root, '$scope' : scope, 'OMDb' : omdb});
  }));

  // it('it should show title', function() {
  //   expect(root.showTitle == true);
  // });
  //
  // it('should have a correct page title', function() {
  //   expect(root.page_title).toEqual('Movies Around Me');
  // });
  //
  // it('should have a correct page description', function(){
  //   expect(root.page_description).toEqual('Enter your postcode');
  // });
});
