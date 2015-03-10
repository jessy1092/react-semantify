"use strict";

jest.dontMock('../../../lib/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Table     = require('../../../lib/index.js').Table;

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
      <Table>123</Table>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Table className="custom"></Table>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
