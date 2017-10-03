
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-dom/test-utils';
import {Divider} from '../../../src/index';

describe('Divider', () => {
  it('should have .ui.divider class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Divider></Divider>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('divider');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Divider>123</Divider>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Divider className="custom"></Divider>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should set custom id', () => {
    let instance = TestUtils.renderIntoDocument(
      <Divider id="custom"></Divider>
    );

    expect(ReactDOM.findDOMNode(instance).id).toEqual('custom');
  });

  it('should set custom attribute', () => {
    let instance = TestUtils.renderIntoDocument(
      <Divider data-custom="custom"></Divider>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-custom')).toEqual('custom');
  });

  it('should display Divider name', () => {
    let Component = (
      <Divider></Divider>
    );

    expect(Component.type.displayName).toMatch('Divider');
  });
});
