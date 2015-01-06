"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Search    = require('../../../src/index.js').Search;

describe('Search', function () {
  it('should have .ui.search class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Search></Search>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('search');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Search>123</Search>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Search className="custom"></Search>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have loading class with loading is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Search loading={true}></Search>
    );

    expect(instance.getDOMNode().className).toMatch('loading');
  });
});
