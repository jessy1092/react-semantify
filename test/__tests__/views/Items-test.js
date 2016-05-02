
jest.dontMock('../../../src/index.js');

import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Items}   from '../../../src/index';

describe('Items', () => {
  it('should have .ui.items class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Items></Items>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('items');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Items>123</Items>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Items className="custom"></Items>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have link class with type is link', () => {
    let instance = TestUtils.renderIntoDocument(
      <Items type='link'></Items>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('link');
  });

  it('should have custom attribute', () => {
    let instance = TestUtils.renderIntoDocument(
      <Items data-custom='custom'></Items>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-custom')).toMatch('custom');
  });

  it('should display Items name', () => {
    let Component = (
      <Items></Items>
    );

    expect(Component.type.displayName).toMatch('Items');
  });
});
