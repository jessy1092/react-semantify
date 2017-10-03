
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-dom/test-utils';
import {Shape}   from '../../../src/index';

describe('Shape', () => {
  it('should have .ui.shape class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Shape></Shape>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('shape');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Shape>123</Shape>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Shape className="custom"></Shape>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Shape name', () => {
    let Component = (
      <Shape></Shape>
    );

    expect(Component.type.displayName).toMatch('Shape');
  });
});
