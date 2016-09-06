
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Feed}    from '../../../src/index';

describe('Feed', () => {
  it('should have .ui.feed class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Feed></Feed>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('feed');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Feed>123</Feed>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Feed className="custom"></Feed>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Feed name', () => {
    let Component = (
      <Feed></Feed>
    );

    expect(Component.type.displayName).toMatch('Feed');
  });
});
