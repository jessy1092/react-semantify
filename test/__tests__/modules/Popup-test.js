"use strict";

jest.dontMock('../../../lib/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Popup     = require('../../../lib/index.js').Popup;

describe('Popup', function () {
  it('should have .ui.popup class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Popup></Popup>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('popup');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Popup>123</Popup>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Popup className="custom"></Popup>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });
});
