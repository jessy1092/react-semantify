"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Input     = require('../../../src/index.js').Input;

describe('Input', function () {
  it('should have .ui.input class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Input></Input>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('input');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Input>
        <input placeholder="Search" type="text"/>
      </Input>
    );

    expect(instance.getDOMNode().children[0].getAttribute('placeholder')).toMatch('Search');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Input className="custom"></Input>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have loading class with loading is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Input loading={true}></Input>
    );

    expect(instance.getDOMNode().className).toMatch('loading');
  });

  it('should have focus class with focus is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Input focus={true}></Input>
    );

    expect(instance.getDOMNode().className).toMatch('focus');
  });

  it('should have error class with error is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Input error={true}></Input>
    );

    expect(instance.getDOMNode().className).toMatch('error');
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

    expect(input.getDOMNode().getAttribute('placeholder')).toMatch('Search');
  });

  it('should have type for input type', function () {

    var instance = TestUtils.renderIntoDocument(
      <Input type="text"></Input>
    );

    var input = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');

    expect(input.getDOMNode().getAttribute('type')).toMatch('text');
  });
});
