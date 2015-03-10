"use strict";

jest.dontMock('../../../lib/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Divider   = require('../../../lib/index.js').Divider;

describe('Divider', function () {
  it('should have .ui.divider class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Divider></Divider>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('divider');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Divider>123</Divider>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Divider className="custom"></Divider>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
