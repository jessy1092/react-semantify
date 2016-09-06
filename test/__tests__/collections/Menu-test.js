
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Menu}    from '../../../src/index';

describe('Menu', () => {
  it('should have .ui.menu class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Menu></Menu>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('menu');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Menu>123</Menu>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Menu className="custom"></Menu>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Menu name', () => {
    let Component = (
      <Menu></Menu>
    );

    expect(Component.type.displayName).toMatch('Menu');
  });
});
