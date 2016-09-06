
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Step}    from '../../../src/index';

describe('Step', () => {
  it('should have .step class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Step></Step>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('step');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Step>123</Step>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Step className="custom"></Step>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Step disabled={true}></Step>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should have active class with active is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Step active={true}></Step>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('active');
  });

  it('should have completed class with completed is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Step completed={true}></Step>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('completed');
  });

  it('should display Step name', () => {
    let Component = (
      <Step></Step>
    );

    expect(Component.type.displayName).toMatch('Step');
  });
});
