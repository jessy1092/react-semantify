"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Title     = require('../../../src/index.js').Title;

describe('Title', function () {
  it('should have .title class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Title></Title>
    );

    expect(instance.getDOMNode().className).toMatch('title');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Title>123</Title>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Title className="custom"></Title>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have active class with active is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Title active={true}></Title>
    );

    expect(instance.getDOMNode().className).toMatch('active');
  });
});
