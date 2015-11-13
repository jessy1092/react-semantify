"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Header    = require('../../../src/index.js').Header;

describe('Header', function () {
  it('should have .ui.header class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Header></Header>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('header');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Header>123</Header>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Header className="custom"></Header>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have blue class with color is blue', function () {
    var instance = TestUtils.renderIntoDocument(
      <Header color="blue"></Header>
    );

    expect(instance.getDOMNode().className).toMatch('blue');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Header disabled={true}></Header>
    );

    expect(instance.getDOMNode().className).toMatch('disabled');
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

    TestUtils.Simulate.click(instance.getDOMNode());

    expect(clickOp).toBeCalled();
  });
});
