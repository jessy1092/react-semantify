"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Sidebar   = require('../../../src/index.js').Sidebar;

describe('Sidebar', function () {
  it('should have .ui.sidebar class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Sidebar></Sidebar>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('sidebar');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Sidebar>123</Sidebar>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Sidebar className="custom"></Sidebar>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
