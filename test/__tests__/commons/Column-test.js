
jest.dontMock('../../../src/index.js');

import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Column}  from '../../../src/index';

describe('Column', () => {
  it('should have .column class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Column></Column>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('column');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Column>123</Column>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Column className="custom"></Column>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Column name', () => {
    let Component = (
      <Column></Column>
    );

    expect(Component.type.displayName).toMatch('Column');
  });
});
