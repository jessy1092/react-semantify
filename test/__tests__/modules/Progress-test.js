"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM   = require('react-dom');
let React      = require('react');
let TestUtils = require('react-addons-test-utils');
let Progress   = require('../../../src/index.js').Progress;

describe('Progress', function () {
  it('should have .ui.progress class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Progress></Progress>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('progress');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Progress>123</Progress>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Progress className="custom"></Progress>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have value for item data-value', function () {
    var instance = TestUtils.renderIntoDocument(
      <Progress value="1"></Progress>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-value')).toMatch('1');
  });

  it('should have percent for item data-percent', function () {
    var instance = TestUtils.renderIntoDocument(
      <Progress percent="1"></Progress>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-percent')).toMatch('1');
  });

  it('should have total for item data-total', function () {
    var instance = TestUtils.renderIntoDocument(
      <Progress total="1"></Progress>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-total')).toMatch('1');
  });
});
