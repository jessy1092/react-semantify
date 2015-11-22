"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Message   = require('../../../src/index.js').Message;

describe('Message', function () {
  it('should have .ui.message class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Message></Message>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('message');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Message>123</Message>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Message className="custom"></Message>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
