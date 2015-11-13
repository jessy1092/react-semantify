"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Step      = require('../../../src/index.js').Step;

describe('Step', function () {
  it('should have .step class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Step></Step>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('step');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Step>123</Step>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Step className="custom"></Step>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Step disabled={true}></Step>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should have active class with active is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Step active={true}></Step>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('active');
  });

  it('should have completed class with completed is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Step completed={true}></Step>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('completed');
  });
});
