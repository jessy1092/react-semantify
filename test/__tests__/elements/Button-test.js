"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Button    = require('../../../src/index.js').Button;

describe('Button', function () {
  it('should have .ui.button class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Button></Button>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('button');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Button>123</Button>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Button className="custom"></Button>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have blue class with color is blue', function () {
    var instance = TestUtils.renderIntoDocument(
      <Button color="blue"></Button>
    );

    expect(instance.getDOMNode().className).toMatch('blue');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Button disabled={true}></Button>
    );

    expect(instance.getDOMNode().className).toMatch('disabled');
  });

  it('should have active class with active is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Button active={true}></Button>
    );

    expect(instance.getDOMNode().className).toMatch('active');
  });

  it('should have loading class with loading is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Button loading={true}></Button>
    );

    expect(instance.getDOMNode().className).toMatch('loading');
  });

  it('should call onClick callback when button click', function (done) {

    var clickOp = function () {
      done();
    };

    var instance = TestUtils.renderIntoDocument(
      <Button onClick={clickOp}></Button>
    );

    var button = TestUtils.findRenderedDOMComponentWithClass(instance, 'button');

    TestUtils.Simulate.click(button);
  });
});
