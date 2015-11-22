"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Menu      = require('../../../src/index.js').Menu;

describe('Menu', function () {
  it('should have .ui.menu class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Menu></Menu>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('menu');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Menu>123</Menu>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Menu className="custom"></Menu>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
