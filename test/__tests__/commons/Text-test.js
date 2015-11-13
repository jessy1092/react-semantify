"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Text      = require('../../../src/index.js').Text;

describe('Text', function () {
  it('should have .text class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Text></Text>
    );

    expect(instance.getDOMNode().className).toMatch('text');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Text>123</Text>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Text className="custom"></Text>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
