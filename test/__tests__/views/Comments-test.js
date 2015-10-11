"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Comments  = require('../../../src/index.js').Comments;

describe('Comments', function () {
  it('should have .ui.comments class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Comments></Comments>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('comments');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Comments>123</Comments>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Comments className="custom"></Comments>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
