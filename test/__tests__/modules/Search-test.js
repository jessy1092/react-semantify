
jest.dontMock('../../../src/index.js');

import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Search}  from '../../../src/index';

describe('Search', () => {
  it('should have .ui.search class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Search></Search>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('search');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Search>123</Search>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Search className="custom"></Search>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have loading class with loading is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Search loading={true}></Search>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('loading');
  });

  it('should display Search name', () => {
    let Component = (
      <Search></Search>
    );

    expect(Component.type.displayName).toMatch('Search');
  });
});
