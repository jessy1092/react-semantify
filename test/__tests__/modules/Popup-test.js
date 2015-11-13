"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Popup     = require('../../../src/index.js').Popup;

describe('Popup', function () {
  it('should have .ui.popup class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Popup></Popup>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('popup');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Popup>123</Popup>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Popup className="custom"></Popup>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
