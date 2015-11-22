"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Dropdown  = require('../../../src/index.js').Dropdown;

describe('Dropdown', function () {
  it('should have .ui.dropdown class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dropdown></Dropdown>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('dropdown');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dropdown>123</Dropdown>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dropdown className="custom"></Dropdown>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dropdown disabled={true}></Dropdown>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('simple');
  });

  it('should have active class with active is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dropdown active={true}></Dropdown>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('active');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('simple');
  });

  it('should have error class with error is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dropdown error={true}></Dropdown>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('error');
  });
});
