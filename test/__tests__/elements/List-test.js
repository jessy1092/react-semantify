"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let List      = require('../../../src/index.js').List;

describe('List', function () {
  it('should have .ui.list class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <List></List>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('list');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <List>123</List>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <List className="custom"></List>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
