"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Title     = require('../../../src/index.js').Title;

describe('Title', function () {
  it('should have .title class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Title></Title>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('title');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Title>123</Title>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Title className="custom"></Title>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have active class with active is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Title active={true}></Title>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('active');
  });
});
