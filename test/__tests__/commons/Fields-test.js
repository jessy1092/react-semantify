"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Fields    = require('../../../src/index.js').Fields;

describe('Fields', function () {
  it('should have .fields class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Fields></Fields>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('fields');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Fields>123</Fields>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Fields className="custom"></Fields>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
