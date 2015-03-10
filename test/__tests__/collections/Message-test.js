"use strict";

jest.dontMock('../../../lib/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Message   = require('../../../lib/index.js').Message;

describe('Message', function () {
  it('should have .ui.message class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Message></Message>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('message');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Message>123</Message>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Message className="custom"></Message>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
