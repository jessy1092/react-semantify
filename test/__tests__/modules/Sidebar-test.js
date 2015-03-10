"use strict";

jest.dontMock('../../../lib/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Sidebar   = require('../../../lib/index.js').Sidebar;

describe('Sidebar', function () {
  it('should have .ui.sidebar class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Sidebar></Sidebar>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('sidebar');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Sidebar>123</Sidebar>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Sidebar className="custom"></Sidebar>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
