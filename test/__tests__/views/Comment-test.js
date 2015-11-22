"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Comment   = require('../../../src/index.js').Comment;

describe('Comment', function () {
  it('should have .comment class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Comment></Comment>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('comment');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Comment>123</Comment>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Comment className="custom"></Comment>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
