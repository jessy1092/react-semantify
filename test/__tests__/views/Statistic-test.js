"use strict";

jest.dontMock('../../../lib/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Statistic = require('../../../lib/index.js').Statistic;

describe('Statistic', function () {
  it('should have .ui.statistic class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Statistic></Statistic>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('statistic');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Statistic>123</Statistic>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Statistic className="custom"></Statistic>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
