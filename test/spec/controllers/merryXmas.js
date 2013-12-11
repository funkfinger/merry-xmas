'use strict';

describe('controller: merryXmasController', function () {

  // load the controller's module
  beforeEach(module('merryXmasApp'));

  var ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('merryXmasController', {
      $scope: scope
    });
  }));

  it('should have the Jasmine testing framework working', function() {
    expect(true).toBe(true);
  });

});
