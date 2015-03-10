"use strict";

jest.dontMock('../../../lib/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Rail      = require('../../../lib/index.js').Rail;

describe('Rail', function () {
  it('should have .ui.rail class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Rail></Rail>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('rail');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Rail>123</Rail>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Rail className="custom"></Rail>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
