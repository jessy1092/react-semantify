"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Tab       = require('../../../src/index.js').Tab;

describe('Tab', function () {
  it('should have .ui.tab class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Tab></Tab>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('tab');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Tab>123</Tab>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Tab className="custom"></Tab>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have loading class with loading is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Tab loading={true}></Tab>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('loading');
  });

  it('should have active class with active is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Tab active={true}></Tab>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('active');
  });

  it('should have tab for item data-tab', function () {
    var instance = TestUtils.renderIntoDocument(
      <Tab tab="1"></Tab>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-tab')).toMatch('1');
  });
});
