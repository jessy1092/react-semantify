"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Section   = require('../../../src/index.js').Section;

describe('Section', function () {
  it('should have .section class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Section></Section>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('section');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Section>123</Section>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Section className="custom"></Section>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have blue class with color is blue', function () {
    var instance = TestUtils.renderIntoDocument(
      <Section color="blue"></Section>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('blue');
  });

  it('should be <a> with link type', function () {
    var instance = TestUtils.renderIntoDocument(
      <Section type='link'></Section>
    );

    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'a')).toBeDefined();
  });
});
