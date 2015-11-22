"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Loader    = require('../../../src/index.js').Loader;

describe('Loader', function () {
  it('should have .ui.loader class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Loader></Loader>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('loader');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Loader>123</Loader>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Loader className="custom"></Loader>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Loader disabled={true}></Loader>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should have active class with active is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Loader active={true}></Loader>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('active');
  });
});
