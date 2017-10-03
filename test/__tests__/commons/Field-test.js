
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-dom/test-utils';
import {Field}   from '../../../src/index';

describe('Field', () => {
  it('should have .field class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Field></Field>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('field');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Field>123</Field>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Field className="custom"></Field>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Field name', () => {
    let Component = (
      <Field></Field>
    );

    expect(Component.type.displayName).toMatch('Field');
  });
});
