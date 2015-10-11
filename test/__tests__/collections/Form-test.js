"use strict";

jest.dontMock('../../../src/collections/form.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Form      = require('../../../src/collections/form.js')(React);

describe('Form', function () {
  it('should have .ui.form class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Form></Form>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('form');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Form>123</Form>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Form className="custom"></Form>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
