"use strict";

jest.dontMock('../../../lib/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Accordion = require('../../../lib/index.js').Accordion;

describe('Accordion', function () {
  it('should have .ui.accordion class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Accordion></Accordion>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('accordion');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Accordion>123</Accordion>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Accordion className="custom"></Accordion>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
