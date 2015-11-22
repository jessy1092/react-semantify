"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Column    = require('../../../src/index.js').Column;

describe('Column', function () {
  it('should have .column class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Column></Column>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('column');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Column>123</Column>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Column className="custom"></Column>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
