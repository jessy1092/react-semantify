
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-dom/test-utils';
import {Content} from '../../../src/index';

describe('Content', () => {
  it('should have .content class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Content></Content>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('content');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Content>123</Content>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Content className="custom"></Content>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Content name', () => {
    let Component = (
      <Content></Content>
    );

    expect(Component.type.displayName).toMatch('Content');
  });
});
