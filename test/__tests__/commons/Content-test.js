"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Content   = require('../../../src/index.js').Content;

describe('Content', function () {
  it('should have .content class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Content></Content>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('content');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Content>123</Content>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Content className="custom"></Content>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
