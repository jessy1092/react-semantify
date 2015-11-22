"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Comments  = require('../../../src/index.js').Comments;

describe('Comments', function () {
  it('should have .ui.comments class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Comments></Comments>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('comments');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Comments>123</Comments>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Comments className="custom"></Comments>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
