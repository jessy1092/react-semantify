
jest.dontMock('../../../src/index.js');

import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {List}    from '../../../src/index';

describe('List', () => {
  it('should have .ui.list class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <List></List>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('list');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <List>123</List>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <List className="custom"></List>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display List name', () => {
    let Component = (
      <List></List>
    );

    expect(Component.type.displayName).toMatch('List');
  });
});
