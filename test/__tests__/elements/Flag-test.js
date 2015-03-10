"use strict";

jest.dontMock('../../../lib/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Flag      = require('../../../lib/index.js').Flag;

describe('Flag', function () {
  it('should have .flag class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Flag></Flag>
    );

    expect(instance.getDOMNode().className).toMatch('flag');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Flag className="custom"></Flag>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should call onClick callback when unit click', function () {

    var clickOp = jest.genMockFunction();

    var instance = TestUtils.renderIntoDocument(
      <Flag onClick={clickOp}></Flag>
    );

    TestUtils.Simulate.click(instance.getDOMNode());

    expect(clickOp).toBeCalled();
  });
});
