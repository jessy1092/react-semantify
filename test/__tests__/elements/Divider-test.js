"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Divider   = require('../../../src/index.js').Divider;

describe('Divider', function () {
  it('should have .ui.divider class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Divider></Divider>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('divider');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Divider>123</Divider>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Divider className="custom"></Divider>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
