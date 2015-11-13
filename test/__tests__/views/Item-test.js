"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Item      = require('../../../src/index.js').Item;

describe('Item', function () {
  it('should have .item class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Item></Item>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('item');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Item>123</Item>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Item className="custom"></Item>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should be <a> with link', function () {
    var instance = TestUtils.renderIntoDocument(
      <Item type='link'></Item>
    );

    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'a')).toBeDefined();
  });

  it('should have value for item data-value', function () {
    var instance = TestUtils.renderIntoDocument(
      <Item value="1"></Item>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-value')).toEqual('1');
  });
});
