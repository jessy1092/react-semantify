"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Rating    = require('../../../src/index.js').Rating;

describe('Rating', function () {
  it('should have .ui.rating class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Rating></Rating>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('rating');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Rating>123</Rating>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Rating className="custom"></Rating>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have rating for item data-rating', function () {
    var instance = TestUtils.renderIntoDocument(
      <Rating rating="1"></Rating>
    );

    expect(instance.getDOMNode().getAttribute('data-rating')).toMatch('1');
  });

  it('should have maxRating for item data-max-rating', function () {
    var instance = TestUtils.renderIntoDocument(
      <Rating maxRating="1"></Rating>
    );

    expect(instance.getDOMNode().getAttribute('data-max-rating')).toMatch('1');
  });
});
