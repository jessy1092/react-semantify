"use strict";

jest.dontMock('../../../lib/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Section   = require('../../../lib/index.js').Section;

describe('Section', function () {
  it('should have .section class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Section></Section>
    );

    expect(instance.getDOMNode().className).toMatch('section');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Section>123</Section>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Section className="custom"></Section>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have blue class with color is blue', function () {
    var instance = TestUtils.renderIntoDocument(
      <Section color="blue"></Section>
    );

    expect(instance.getDOMNode().className).toMatch('blue');
  });

  it('should be <a> with link type', function () {
    var instance = TestUtils.renderIntoDocument(
      <Section type='link'></Section>
    );

    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'a')).toBeDefined();
  });
});
