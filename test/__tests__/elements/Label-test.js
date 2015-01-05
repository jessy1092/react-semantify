"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Label     = require('../../../src/index.js').Label;

describe('Label', function () {
  it('should have .ui.label class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Label></Label>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('label');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Label>123</Label>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Label className="custom"></Label>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have blue class with color is blue', function () {
    var instance = TestUtils.renderIntoDocument(
      <Label color="blue"></Label>
    );

    expect(instance.getDOMNode().className).toMatch('blue');
  });

  it('should be <div> if type is div', function () {
    var instance = TestUtils.renderIntoDocument(
      <Label type="div"></Label>
    );

    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'div')).toBeDefined();
  });
});
