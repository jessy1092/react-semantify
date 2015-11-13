"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Item      = require('../../../src/index.js').Item;

describe('Item', function () {
  it('should have .item class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Item></Item>
    );

    expect(instance.getDOMNode().className).toMatch('item');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Item>123</Item>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Item className="custom"></Item>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
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

    expect(instance.getDOMNode().getAttribute('data-value')).toMatch('1');
  });
});
