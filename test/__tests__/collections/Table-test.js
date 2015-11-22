"use strict";

jest.dontMock('../../../src/collections/table.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Table     = require('../../../src/index.js').Table;

describe('Table', function () {
  it('should have .ui.table class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Table></Table>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('table');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Table><tbody><tr></tr></tbody></Table>
    );

    expect(ReactDOM.findDOMNode(instance).children[0].children[0].tagName).toEqual('TR');
    expect(ReactDOM.findDOMNode(instance).children[0].tagName).toEqual('TBODY');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Table className="custom"></Table>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
