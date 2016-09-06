
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Buttons}   from '../../../src/index';

describe('Buttons', () => {
  it('should have .ui.buttons class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Buttons></Buttons>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('buttons');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Buttons>123</Buttons>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Buttons className="custom"></Buttons>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Buttons name', () => {
    let Component = (
      <Buttons></Buttons>
    );

    expect(Component.type.displayName).toMatch('Buttons');
  });
});
