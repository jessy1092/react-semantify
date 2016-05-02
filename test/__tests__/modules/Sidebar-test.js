
jest.dontMock('../../../src/index.js');

import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Sidebar} from '../../../src/index';

describe('Sidebar', () => {
  it('should have .ui.sidebar class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Sidebar></Sidebar>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('sidebar');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Sidebar>123</Sidebar>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Sidebar className="custom"></Sidebar>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Sidebar name', () => {
    let Component = (
      <Sidebar></Sidebar>
    );

    expect(Component.type.displayName).toMatch('Sidebar');
  });
});
