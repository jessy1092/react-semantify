"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Label     = require('../../../src/index.js').Label;

describe('Label', function () {
  it('should have .ui.label class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Label></Label>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('label');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Label>123</Label>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Label className="custom"></Label>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have blue class with color is blue', function () {
    var instance = TestUtils.renderIntoDocument(
      <Label color="blue"></Label>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('blue');
  });

  it('should be <div> if type is div', function () {
    var instance = TestUtils.renderIntoDocument(
      <Label type="div"></Label>
    );

    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'div')).toBeDefined();
  });

  it('should call onClick callback when unit click', function () {

    var clickOp = jest.genMockFunction();

    var instance = TestUtils.renderIntoDocument(
      <Label onClick={clickOp}></Label>
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(instance));

    expect(clickOp).toBeCalled();
  });
});
