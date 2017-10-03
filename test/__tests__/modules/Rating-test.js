
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-dom/test-utils';
import {Rating}  from '../../../src/index';

describe('Rating', () => {
  it('should have .ui.rating class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Rating></Rating>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('rating');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Rating>123</Rating>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Rating className="custom"></Rating>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have rating for item data-rating', () => {
    let instance = TestUtils.renderIntoDocument(
      <Rating rating="1"></Rating>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-rating')).toEqual('1');
  });

  it('should have maxRating for item data-max-rating', () => {
    let instance = TestUtils.renderIntoDocument(
      <Rating maxRating="1"></Rating>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-max-rating')).toEqual('1');
  });

  it('should display Rating name', () => {
    let Component = (
      <Rating></Rating>
    );

    expect(Component.type.displayName).toMatch('Rating');
  });
});
