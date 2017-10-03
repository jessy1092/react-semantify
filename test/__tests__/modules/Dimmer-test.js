
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-dom/test-utils';
import {Dimmer}  from '../../../src/index';

describe('Dimmer', () => {
  it('should have .ui.dimmer class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Dimmer></Dimmer>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('dimmer');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Dimmer>123</Dimmer>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Dimmer className="custom"></Dimmer>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Dimmer disabled={true}></Dimmer>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should have active class with active is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Dimmer active={true}></Dimmer>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('active');
  });

  it('should display Dimmer name', () => {
    let Component = (
      <Dimmer></Dimmer>
    );

    expect(Component.type.displayName).toMatch('Dimmer');
  });
});
