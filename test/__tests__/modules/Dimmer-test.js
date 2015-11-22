"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Dimmer    = require('../../../src/index.js').Dimmer;

describe('Dimmer', function () {
  it('should have .ui.dimmer class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dimmer></Dimmer>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('dimmer');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dimmer>123</Dimmer>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dimmer className="custom"></Dimmer>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dimmer disabled={true}></Dimmer>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should have active class with active is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dimmer active={true}></Dimmer>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('active');
  });
});
