"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Items      = require('../../../src/index.js').Items;

describe('Items', function () {
  it('should have .ui.items class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Items></Items>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('items');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Items>123</Items>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Items className="custom"></Items>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have link class with type is link', function () {
    var instance = TestUtils.renderIntoDocument(
      <Items type='link'></Items>
    );

    expect(instance.getDOMNode().className).toMatch('link');
  });

});
