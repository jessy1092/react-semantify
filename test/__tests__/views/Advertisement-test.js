"use strict";

jest.dontMock('../../../lib/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Ad        = require('../../../lib/index.js').Ad;

describe('Ad', function () {
  it('should have .ui.ad class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Ad></Ad>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('ad');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Ad>123</Ad>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Ad className="custom"></Ad>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
