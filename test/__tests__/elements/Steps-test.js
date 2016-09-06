
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Steps}   from '../../../src/index';

describe('Steps', () => {
  it('should have .ui.steps class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Steps></Steps>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('steps');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Steps>123</Steps>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Steps className="custom"></Steps>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Steps name', () => {
    let Component = (
      <Steps></Steps>
    );

    expect(Component.type.displayName).toMatch('Steps');
  });
});
