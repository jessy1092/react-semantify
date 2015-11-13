"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Shape     = require('../../../src/index.js').Shape;

describe('Shape', function () {
  it('should have .ui.shape class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Shape></Shape>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('shape');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Shape>123</Shape>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Shape className="custom"></Shape>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
