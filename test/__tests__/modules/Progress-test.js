"use strict";

jest.dontMock('../../../lib/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Progress  = require('../../../lib/index.js').Progress;

describe('Progress', function () {
  it('should have .ui.progress class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Progress></Progress>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('progress');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Progress>123</Progress>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Progress className="custom"></Progress>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have value for item data-value', function () {
    var instance = TestUtils.renderIntoDocument(
      <Progress value="1"></Progress>
    );

    expect(instance.getDOMNode().getAttribute('data-value')).toMatch('1');
  });

  it('should have percent for item data-percent', function () {
    var instance = TestUtils.renderIntoDocument(
      <Progress percent="1"></Progress>
    );

    expect(instance.getDOMNode().getAttribute('data-percent')).toMatch('1');
  });

  it('should have total for item data-total', function () {
    var instance = TestUtils.renderIntoDocument(
      <Progress total="1"></Progress>
    );

    expect(instance.getDOMNode().getAttribute('data-total')).toMatch('1');
  });
});
