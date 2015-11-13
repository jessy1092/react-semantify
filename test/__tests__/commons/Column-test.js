"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Column    = require('../../../src/index.js').Column;

describe('Column', function () {
  it('should have .column class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Column></Column>
    );

    expect(instance.getDOMNode().className).toMatch('column');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Column>123</Column>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Column className="custom"></Column>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
