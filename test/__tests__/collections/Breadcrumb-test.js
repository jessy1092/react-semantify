"use strict";

jest.dontMock('../../../src/index.js');

var React       = require('react');
var TestUtils   = require('react/lib/ReactTestUtils');
var Breadcrumb = require('../../../src/index.js').Breadcrumb;

describe('Breadcrumb', function () {
  it('should have .ui.breadcrumb class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Breadcrumb></Breadcrumb>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('breadcrumb');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Breadcrumb>123</Breadcrumb>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Breadcrumb className="custom"></Breadcrumb>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
