
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Tab}     from '../../../src/index';

describe('Tab', () => {
  it('should have .ui.tab class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Tab></Tab>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('tab');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Tab>123</Tab>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Tab className="custom"></Tab>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have loading class with loading is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Tab loading={true}></Tab>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('loading');
  });

  it('should have active class with active is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Tab active={true}></Tab>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('active');
  });

  it('should have tab for item data-tab', () => {
    let instance = TestUtils.renderIntoDocument(
      <Tab tab="1"></Tab>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-tab')).toMatch('1');
  });

  it('should display Tab name', () => {
    let Component = (
      <Tab></Tab>
    );

    expect(Component.type.displayName).toMatch('Tab');
  });
});
