
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Ad}      from '../../../src/index';

describe('Ad', () => {
  it('should have .ui.ad class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Ad></Ad>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('ad');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Ad>123</Ad>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Ad className="custom"></Ad>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Ad name', () => {
    let Component = (
      <Ad></Ad>
    );

    expect(Component.type.displayName).toMatch('Ad');
  });
});
