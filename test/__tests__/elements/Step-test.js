"use strict";

jest.dontMock('../../../lib/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Step      = require('../../../lib/index.js').Step;

describe('Step', function () {
  it('should have .step class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Step></Step>
    );

    expect(instance.getDOMNode().className).toMatch('step');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Step>123</Step>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Step className="custom"></Step>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Step disabled={true}></Step>
    );

    expect(instance.getDOMNode().className).toMatch('disabled');
  });

  it('should have active class with active is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Step active={true}></Step>
    );

    expect(instance.getDOMNode().className).toMatch('active');
  });

  it('should have completed class with completed is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Step completed={true}></Step>
    );

    expect(instance.getDOMNode().className).toMatch('completed');
  });
});
