"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Flag      = require('../../../src/index.js').Flag;

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
});
