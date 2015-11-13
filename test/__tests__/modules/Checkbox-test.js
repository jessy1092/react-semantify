"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Checkbox  = require('../../../src/index.js').Checkbox;

describe('Checkbox', function () {
  it('should have .ui.checkbox class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Checkbox></Checkbox>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('checkbox');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Checkbox>123</Checkbox>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Checkbox className="custom"></Checkbox>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Checkbox disabled={true}></Checkbox>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should have readOnly class with readOnly is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Checkbox readOnly={true}></Checkbox>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('read-only');
  });
});
