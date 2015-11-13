"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Search    = require('../../../src/index.js').Search;

describe('Search', function () {
  it('should have .ui.search class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Search></Search>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('search');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Search>123</Search>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Search className="custom"></Search>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have loading class with loading is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Search loading={true}></Search>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('loading');
  });
});
