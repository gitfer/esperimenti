'use strict';

describe('Directive: watcher', function () {

  // load the directive's module
  beforeEach(module('esperimentiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<watcher></watcher>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the watcher directive');
  }));
});
