"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Card      = require('../../../src/index.js').Card;

describe('Card', function () {
  it('should have .ui.card class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Card></Card>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('card');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Card>123</Card>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Card className="custom"></Card>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
