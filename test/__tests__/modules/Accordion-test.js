"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Accordion = require('../../../src/index.js').Accordion;

describe('Accordion', function () {
  it('should have .ui.accordion class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Accordion></Accordion>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('accordion');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Accordion>123</Accordion>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Accordion className="custom"></Accordion>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
