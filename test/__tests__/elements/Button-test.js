"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Button    = require('../../../src/index.js').Button;

describe('Button', function () {
  it('should have .ui.button class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Button></Button>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('button');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Button>123</Button>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Button className="custom"></Button>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have blue class with color is blue', function () {
    var instance = TestUtils.renderIntoDocument(
      <Button color="blue"></Button>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('blue');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Button disabled={true}></Button>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should have active class with active is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Button active={true}></Button>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('active');
  });

  it('should have loading class with loading is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Button loading={true}></Button>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('loading');
  });

  it('should call onClick callback when unit click', function () {

    var clickOp = jest.genMockFunction();

    var instance = TestUtils.renderIntoDocument(
      <Button onClick={clickOp}></Button>
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(instance));

    expect(clickOp).toBeCalled();
  });
});
