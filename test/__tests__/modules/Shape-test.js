"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Shape     = require('../../../src/index.js').Shape;

describe('Shape', function () {
  it('should have .ui.shape class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Shape></Shape>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('shape');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Shape>123</Shape>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Shape className="custom"></Shape>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
