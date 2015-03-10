"use strict";

jest.dontMock('../../../lib/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Menu      = require('../../../lib/index.js').Menu;

describe('Menu', function () {
  it('should have .ui.menu class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Menu></Menu>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('menu');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Menu>123</Menu>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Menu className="custom"></Menu>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
