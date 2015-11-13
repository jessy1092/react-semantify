"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Grid      = require('../../../src/index.js').Grid;

describe('Grid', function () {
  it('should have .ui.grid class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Grid></Grid>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('grid');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Grid>123</Grid>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Grid className="custom"></Grid>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
