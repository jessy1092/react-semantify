"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Rail      = require('../../../src/index.js').Rail;

describe('Rail', function () {
  it('should have .ui.rail class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Rail></Rail>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('rail');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Rail>123</Rail>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Rail className="custom"></Rail>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
