"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Fields    = require('../../../src/index.js').Fields;

describe('Fields', function () {
  it('should have .fields class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Fields></Fields>
    );

    expect(instance.getDOMNode().className).toMatch('fields');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Fields>123</Fields>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Fields className="custom"></Fields>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
