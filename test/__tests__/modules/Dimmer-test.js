"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Dimmer    = require('../../../src/index.js').Dimmer;

describe('Dimmer', function () {
  it('should have .ui.dimmer class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dimmer></Dimmer>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('dimmer');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dimmer>123</Dimmer>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dimmer className="custom"></Dimmer>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dimmer disabled={true}></Dimmer>
    );

    expect(instance.getDOMNode().className).toMatch('disabled');
  });

  it('should have active class with active is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dimmer active={true}></Dimmer>
    );

    expect(instance.getDOMNode().className).toMatch('active');
  });
});
