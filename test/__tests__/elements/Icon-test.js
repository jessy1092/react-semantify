"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Icon      = require('../../../src/index.js').Icon;

describe('Icon', function () {
  it('should have .icon class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Icon></Icon>
    );

    expect(instance.getDOMNode().className).toMatch('icon');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Icon className="custom"></Icon>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have blue class with color is blue', function () {
    var instance = TestUtils.renderIntoDocument(
      <Icon color="blue"></Icon>
    );

    expect(instance.getDOMNode().className).toMatch('blue');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Icon disabled={true}></Icon>
    );

    expect(instance.getDOMNode().className).toMatch('disabled');
  });

  it('should have loading class with loading is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Icon loading={true}></Icon>
    );

    expect(instance.getDOMNode().className).toMatch('loading');
  });

  it('should be <i>', function () {
    var instance = TestUtils.renderIntoDocument(
      <Icon></Icon>
    );

    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'i')).toBeDefined();
  });
});
