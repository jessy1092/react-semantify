
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Rail}    from '../../../src/index';

describe('Rail', () => {
  it('should have .ui.rail class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Rail></Rail>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('rail');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Rail>123</Rail>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Rail className="custom"></Rail>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Rail name', () => {
    let Component = (
      <Rail></Rail>
    );

    expect(Component.type.displayName).toMatch('Rail');
  });
});
