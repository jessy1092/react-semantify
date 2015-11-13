"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Sticky    = require('../../../src/index.js').Sticky;

describe('Sticky', function () {
  it('should have .ui.sticky class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Sticky></Sticky>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('sticky');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Sticky>123</Sticky>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Sticky className="custom"></Sticky>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
