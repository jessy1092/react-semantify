"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Items     = require('../../../src/index.js').Items;

describe('Items', function () {
  it('should have .ui.items class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Items></Items>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('items');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Items>123</Items>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Items className="custom"></Items>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have link class with type is link', function () {
    var instance = TestUtils.renderIntoDocument(
      <Items type='link'></Items>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('link');
  });

});
