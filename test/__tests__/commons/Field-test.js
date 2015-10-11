"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Field     = require('../../../src/index.js').Field;

describe('Field', function () {
  it('should have .field class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Field></Field>
    );

    expect(instance.getDOMNode().className).toMatch('field');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Field>123</Field>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Field className="custom"></Field>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
