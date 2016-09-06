
import ReactDOM   from 'react-dom';
import React      from 'react';
import TestUtils  from 'react-addons-test-utils';
import {Progress} from '../../../src/index';

describe('Progress', () => {
  it('should have .ui.progress class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Progress></Progress>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('progress');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Progress>123</Progress>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Progress className="custom"></Progress>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have value for item data-value', () => {
    let instance = TestUtils.renderIntoDocument(
      <Progress value="1"></Progress>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-value')).toMatch('1');
  });

  it('should have percent for item data-percent', () => {
    let instance = TestUtils.renderIntoDocument(
      <Progress percent="1"></Progress>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-percent')).toMatch('1');
  });

  it('should have total for item data-total', () => {
    let instance = TestUtils.renderIntoDocument(
      <Progress total="1"></Progress>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-total')).toMatch('1');
  });

  it('should display Progress name', () => {
    let Component = (
      <Progress></Progress>
    );

    expect(Component.type.displayName).toMatch('Progress');
  });
});
