"use strict";

jest.dontMock('../../../src/collections/table.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Table     = require('../../../src/collections/table.js')(React);

describe('Table', function () {
  it('should have .ui.table class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Table></Table>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('table');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Table><tbody><tr></tr></tbody></Table>
    );

    expect(instance.getDOMNode().children[0].children[0].tagName).toMatch('TR');
    expect(instance.getDOMNode().children[0].tagName).toMatch('TBODY');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Table className="custom"></Table>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
