
import ReactDOM   from 'react-dom';
import React      from 'react';
import TestUtils  from 'react-addons-test-utils';
import {Comments} from '../../../src/index';

describe('Comments', () => {
  it('should have .ui.comments class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Comments></Comments>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('comments');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Comments>123</Comments>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Comments className="custom"></Comments>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Comments name', () => {
    let Component = (
      <Comments></Comments>
    );

    expect(Component.type.displayName).toMatch('Comments');
  });
});
