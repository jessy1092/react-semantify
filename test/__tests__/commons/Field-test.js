"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Field     = require('../../../src/index.js').Field;

describe('Field', function () {
  it('should have .field class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Field></Field>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('field');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Field>123</Field>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Field className="custom"></Field>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
