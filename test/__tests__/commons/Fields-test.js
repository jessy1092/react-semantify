
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-dom/test-utils';
import {Fields}  from '../../../src/index';

describe('Fields', () => {
  it('should have .fields class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Fields></Fields>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('fields');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Fields>123</Fields>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Fields className="custom"></Fields>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Fields name', () => {
    let Component = (
      <Fields></Fields>
    );

    expect(Component.type.displayName).toMatch('Fields');
  });
});
