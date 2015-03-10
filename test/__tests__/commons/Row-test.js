"use strict";

jest.dontMock('../../../lib/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Row       = require('../../../lib/index.js').Row;

describe('Row', function () {
  it('should have .row class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Row></Row>
    );

    expect(instance.getDOMNode().className).toMatch('row');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Row>123</Row>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Row className="custom"></Row>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
