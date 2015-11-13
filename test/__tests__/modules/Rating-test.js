"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Rating    = require('../../../src/index.js').Rating;

describe('Rating', function () {
  it('should have .ui.rating class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Rating></Rating>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('rating');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Rating>123</Rating>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Rating className="custom"></Rating>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have rating for item data-rating', function () {
    var instance = TestUtils.renderIntoDocument(
      <Rating rating="1"></Rating>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-rating')).toEqual('1');
  });

  it('should have maxRating for item data-max-rating', function () {
    var instance = TestUtils.renderIntoDocument(
      <Rating maxRating="1"></Rating>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-max-rating')).toEqual('1');
  });
});
