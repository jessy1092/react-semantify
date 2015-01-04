"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Comment   = require('../../../src/index.js').Comment;

describe('Comment', function () {
  it('should have .comment class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Comment></Comment>
    );

    expect(instance.getDOMNode().className).toMatch('comment');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Comment>123</Comment>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Comment className="custom"></Comment>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
