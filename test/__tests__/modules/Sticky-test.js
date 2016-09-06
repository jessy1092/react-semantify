
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Sticky}  from '../../../src/index';

describe('Sticky', () => {
  it('should have .ui.sticky class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Sticky></Sticky>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('sticky');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Sticky>123</Sticky>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Sticky className="custom"></Sticky>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Sticky name', () => {
    let Component = (
      <Sticky></Sticky>
    );

    expect(Component.type.displayName).toMatch('Sticky');
  });
});
