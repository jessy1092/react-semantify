
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Item}    from '../../../src/index';

describe('Item', () => {
  it('should have .item class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Item></Item>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('item');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Item>123</Item>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Item className="custom"></Item>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should be <a> with link', () => {
    let instance = TestUtils.renderIntoDocument(
      <Item type='link'></Item>
    );

    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'a')).toBeDefined();
  });

  it('should have value for item data-value', () => {
    let instance = TestUtils.renderIntoDocument(
      <Item value="1"></Item>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-value')).toEqual('1');
  });

  it('should display Item name', () => {
    let Component = (
      <Item></Item>
    );

    expect(Component.type.displayName).toMatch('Item');
  });
});
