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

  it('should have blue class with color is blue ', function () {
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
});
