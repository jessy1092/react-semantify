"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Steps     = require('../../../src/index.js').Steps;

describe('Steps', function () {
  it('should have .ui.steps class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Steps></Steps>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('steps');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Steps>123</Steps>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Steps className="custom"></Steps>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });


});
