"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Ad        = require('../../../src/index.js').Ad;

describe('Ad', function () {
  it('should have .ui.ad class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Ad></Ad>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('ad');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Ad>123</Ad>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Ad className="custom"></Ad>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
