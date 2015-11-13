"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Feed      = require('../../../src/index.js').Feed;

describe('Feed', function () {
  it('should have .ui.feed class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Feed></Feed>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('feed');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Feed>123</Feed>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Feed className="custom"></Feed>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
