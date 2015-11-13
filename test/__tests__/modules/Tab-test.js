"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Tab       = require('../../../src/index.js').Tab;

describe('Tab', function () {
  it('should have .ui.tab class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Tab></Tab>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('tab');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Tab>123</Tab>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Tab className="custom"></Tab>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have loading class with loading is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Tab loading={true}></Tab>
    );

    expect(instance.getDOMNode().className).toMatch('loading');
  });

  it('should have active class with active is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Tab active={true}></Tab>
    );

    expect(instance.getDOMNode().className).toMatch('active');
  });

  it('should have tab for item data-tab', function () {
    var instance = TestUtils.renderIntoDocument(
      <Tab tab="1"></Tab>
    );

    expect(instance.getDOMNode().getAttribute('data-tab')).toMatch('1');
  });
});
