"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Flag      = require('../../../src/index.js').Flag;

describe('Flag', function () {
  it('should have .flag class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Flag></Flag>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('flag');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Flag className="custom"></Flag>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should call onClick callback when unit click', function () {

    var clickOp = jest.genMockFunction();

    var instance = TestUtils.renderIntoDocument(
      <Flag onClick={clickOp}></Flag>
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(instance));

    expect(clickOp).toBeCalled();
  });
});
