
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Form}    from '../../../src/index';

describe('Form', () => {
  it('should have .ui.form class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Form></Form>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('form');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Form>123</Form>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Form className="custom"></Form>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Form name', () => {
    let Component = (
      <Form></Form>
    );

    expect(Component.type.displayName).toMatch('Form');
  });
});
