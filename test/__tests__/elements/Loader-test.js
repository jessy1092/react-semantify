"use strict";

jest.dontMock('../../../lib/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Loader    = require('../../../lib/index.js').Loader;

describe('Loader', function () {
  it('should have .ui.loader class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Loader></Loader>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('loader');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Loader>123</Loader>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Loader className="custom"></Loader>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Loader disabled={true}></Loader>
    );

    expect(instance.getDOMNode().className).toMatch('disabled');
  });

  it('should have active class with active is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Loader active={true}></Loader>
    );

    expect(instance.getDOMNode().className).toMatch('active');
  });
});
