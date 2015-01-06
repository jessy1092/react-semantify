"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Dropdown  = require('../../../src/index.js').Dropdown;

describe('Dropdown', function () {
  it('should have .ui.dropdown class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dropdown></Dropdown>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('dropdown');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dropdown>123</Dropdown>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dropdown className="custom"></Dropdown>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dropdown disabled={true}></Dropdown>
    );

    expect(instance.getDOMNode().className).toMatch('disabled');
    expect(instance.getDOMNode().className).toMatch('simple');
  });

  it('should have active class with active is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dropdown active={true}></Dropdown>
    );

    expect(instance.getDOMNode().className).toMatch('active');
    expect(instance.getDOMNode().className).toMatch('simple');
  });

  it('should have error class with error is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Dropdown error={true}></Dropdown>
    );

    expect(instance.getDOMNode().className).toMatch('error');
  });
});
