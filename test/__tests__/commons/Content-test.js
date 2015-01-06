"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Content   = require('../../../src/index.js').Content;

describe('Content', function () {
  it('should have .content class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Content></Content>
    );

    expect(instance.getDOMNode().className).toMatch('content');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Content>123</Content>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Content className="custom"></Content>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
