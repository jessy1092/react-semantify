"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Segment   = require('../../../src/index.js').Segment;

describe('Segment', function () {
  it('should have .ui.segment class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Segment></Segment>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('segment');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Segment>123</Segment>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Segment className="custom"></Segment>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have blue class with color is blue', function () {
    var instance = TestUtils.renderIntoDocument(
      <Segment color="blue"></Segment>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('blue');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Segment disabled={true}></Segment>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should have loading class with loading is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Segment loading={true}></Segment>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('loading');
  });

  it('should call onClick callback when unit click', function () {

    var clickOp = jest.genMockFunction();

    var instance = TestUtils.renderIntoDocument(
      <Segment onClick={clickOp}></Segment>
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(instance));

    expect(clickOp).toBeCalled();
  });
});
