"use strict";

jest.dontMock('../../../lib/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Checkbox  = require('../../../lib/index.js').Checkbox;

describe('Checkbox', function () {
  it('should have .ui.checkbox class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Checkbox></Checkbox>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('checkbox');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Checkbox>123</Checkbox>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Checkbox className="custom"></Checkbox>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Checkbox disabled={true}></Checkbox>
    );

    expect(instance.getDOMNode().className).toMatch('disabled');
  });

  it('should have readOnly class with readOnly is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Checkbox readOnly={true}></Checkbox>
    );

    expect(instance.getDOMNode().className).toMatch('read-only');
  });
});
