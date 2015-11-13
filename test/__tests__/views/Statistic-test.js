"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Statistic = require('../../../src/index.js').Statistic;

describe('Statistic', function () {
  it('should have .ui.statistic class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Statistic></Statistic>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('statistic');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Statistic>123</Statistic>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Statistic className="custom"></Statistic>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
