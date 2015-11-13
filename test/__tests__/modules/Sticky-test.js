"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Sticky    = require('../../../src/index.js').Sticky;

describe('Sticky', function () {
  it('should have .ui.sticky class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Sticky></Sticky>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('sticky');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Sticky>123</Sticky>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Sticky className="custom"></Sticky>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
