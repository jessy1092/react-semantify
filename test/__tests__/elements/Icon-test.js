"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Icon      = require('../../../src/index.js').Icon;

describe('Icon', function () {
  it('should have .icon class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Icon></Icon>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('icon');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Icon className="custom"></Icon>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have blue class with color is blue', function () {
    var instance = TestUtils.renderIntoDocument(
      <Icon color="blue"></Icon>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('blue');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Icon disabled={true}></Icon>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should have loading class with loading is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Icon loading={true}></Icon>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('loading');
  });

  it('should be <i>', function () {
    var instance = TestUtils.renderIntoDocument(
      <Icon></Icon>
    );

    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'i')).toBeDefined();
  });

  it('should call onClick callback when unit click', function () {

    var clickOp = jest.genMockFunction();

    var instance = TestUtils.renderIntoDocument(
      <Icon onClick={clickOp}></Icon>
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(instance));

    expect(clickOp).toBeCalled();
  });
});
