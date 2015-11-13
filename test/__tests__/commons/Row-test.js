"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Row       = require('../../../src/index.js').Row;

describe('Row', function () {
  it('should have .row class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Row></Row>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('row');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Row>123</Row>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Row className="custom"></Row>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
