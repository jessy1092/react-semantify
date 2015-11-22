"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Steps     = require('../../../src/index.js').Steps;

describe('Steps', function () {
  it('should have .ui.steps class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Steps></Steps>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('steps');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Steps>123</Steps>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Steps className="custom"></Steps>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
