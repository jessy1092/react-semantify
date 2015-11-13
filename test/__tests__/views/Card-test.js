"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Card      = require('../../../src/index.js').Card;

describe('Card', function () {
  it('should have .ui.card class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Card></Card>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('card');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Card>123</Card>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Card className="custom"></Card>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
