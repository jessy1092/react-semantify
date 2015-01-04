"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Reveal    = require('../../../src/index.js').Reveal;

describe('Reveal', function () {
  it('should have .ui.reveal class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Reveal></Reveal>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('reveal');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Reveal>123</Reveal>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Reveal className="custom"></Reveal>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Reveal disabled={true}></Reveal>
    );

    expect(instance.getDOMNode().className).toMatch('disabled');
  });
});
