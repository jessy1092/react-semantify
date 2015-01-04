"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Segment   = require('../../../src/index.js').Segment;

describe('Segment', function () {
  it('should have .ui.segment class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Segment></Segment>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('segment');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Segment>123</Segment>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Segment className="custom"></Segment>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have blue class with color is blue', function () {
    var instance = TestUtils.renderIntoDocument(
      <Segment color="blue"></Segment>
    );

    expect(instance.getDOMNode().className).toMatch('blue');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Segment disabled={true}></Segment>
    );

    expect(instance.getDOMNode().className).toMatch('disabled');
  });

  it('should have loading class with loading is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Segment loading={true}></Segment>
    );

    expect(instance.getDOMNode().className).toMatch('loading');
  });
});
