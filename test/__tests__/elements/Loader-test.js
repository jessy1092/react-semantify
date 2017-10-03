
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-dom/test-utils';
import {Loader}  from '../../../src/index';

describe('Loader', () => {
  it('should have .ui.loader class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Loader></Loader>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('loader');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Loader>123</Loader>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Loader className="custom"></Loader>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Loader disabled={true}></Loader>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should have active class with active is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Loader active={true}></Loader>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('active');
  });

  it('should display Loader name', () => {
    let Component = (
      <Loader></Loader>
    );

    expect(Component.type.displayName).toMatch('Loader');
  });
});
