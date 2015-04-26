'use strict';

describe('Directive: acmeCombo.js', function () {

  // load the directive's module
  beforeEach(module('esperimentiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<acme-combo.js></acme-combo.js>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the acmeCombo.js directive');
  }));
});
