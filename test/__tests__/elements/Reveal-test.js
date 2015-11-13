"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Reveal    = require('../../../src/index.js').Reveal;

describe('Reveal', function () {
  it('should have .ui.reveal class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Reveal></Reveal>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('reveal');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Reveal>123</Reveal>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Reveal className="custom"></Reveal>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Reveal disabled={true}></Reveal>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });
});
