'use strict';

describe('Controller: FormcontrollerJsCtrl', function () {

  // load the controller's module
  beforeEach(module('esperimentiApp'));

  var FormcontrollerJsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormcontrollerJsCtrl = $controller('FormcontrollerJsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
