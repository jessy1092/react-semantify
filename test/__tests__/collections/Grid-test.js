"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Grid      = require('../../../src/index.js').Grid;

describe('Grid', function () {
  it('should have .ui.grid class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Grid></Grid>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('grid');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Grid>123</Grid>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Grid className="custom"></Grid>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
