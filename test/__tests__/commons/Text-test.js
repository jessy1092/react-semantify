"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Text      = require('../../../src/index.js').Text;

describe('Text', function () {
  it('should have .text class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Text></Text>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('text');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Text>123</Text>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Text className="custom"></Text>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
