"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var List      = require('../../../src/index.js').List;

describe('List', function () {
  it('should have .ui.list class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <List></List>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('list');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <List>123</List>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <List className="custom"></List>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
