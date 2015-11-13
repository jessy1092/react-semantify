"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM   = require('react-dom');
let React      = require('react');
let TestUtils = require('react-addons-test-utils');
let Feed      = require('../../../src/index.js').Feed;

describe('Feed', function () {
  it('should have .ui.feed class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Feed></Feed>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('feed');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Feed>123</Feed>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Feed className="custom"></Feed>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
