
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-dom/test-utils';
import {Message} from '../../../src/index';

describe('Message', () => {
  it('should have .ui.message class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Message></Message>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('message');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Message>123</Message>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Message className="custom"></Message>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Message name', () => {
    let Component = (
      <Message></Message>
    );

    expect(Component.type.displayName).toMatch('Message');
  });
});
