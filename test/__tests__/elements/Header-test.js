"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Header    = require('../../../src/index.js').Header;

describe('Header', function () {
  it('should have .ui.header class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Header></Header>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('header');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Header>123</Header>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Header className="custom"></Header>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have blue class with color is blue', function () {
    var instance = TestUtils.renderIntoDocument(
      <Header color="blue"></Header>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('blue');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Header disabled={true}></Header>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should be <a> with link', function () {
    var instance = TestUtils.renderIntoDocument(
      <Header type='link'></Header>
    );

    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'a')).toBeDefined();
  });

  it('should call onClick callback when unit click', function () {

    var clickOp = jest.genMockFunction();

    var instance = TestUtils.renderIntoDocument(
      <Header onClick={clickOp}></Header>
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(instance));

    expect(clickOp).toBeCalled();
  });
});
