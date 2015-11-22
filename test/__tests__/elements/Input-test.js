"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Input     = require('../../../src/index.js').Input;

describe('Input', function () {
  it('should have .ui.input class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Input></Input>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('input');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Input>
        <input placeholder="Search" type="text"/>
      </Input>
    );

    expect(ReactDOM.findDOMNode(instance).children[0].getAttribute('placeholder')).toMatch('Search');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Input className="custom"></Input>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have loading class with loading is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Input loading={true}></Input>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('loading');
  });

  it('should have focus class with focus is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Input focus={true}></Input>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('focus');
  });

  it('should have error class with error is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Input error={true}></Input>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('error');
  });

  it('should have <input> if children is null', function () {
    var instance = TestUtils.renderIntoDocument(
      <Input></Input>
    );

    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'input')).toBeDefined();
  });

  it('should have placeholder for input string', function () {

    var instance = TestUtils.renderIntoDocument(
      <Input placeholder="Search"></Input>
    );

    var input = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');

    expect(ReactDOM.findDOMNode(input).getAttribute('placeholder')).toMatch('Search');
  });

  it('should have type for input type', function () {

    var instance = TestUtils.renderIntoDocument(
      <Input type="text"></Input>
    );

    var input = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');

    expect(ReactDOM.findDOMNode(input).getAttribute('type')).toMatch('text');
  });
});
