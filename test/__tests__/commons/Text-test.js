
jest.dontMock('../../../src/index.js');

import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Text}    from '../../../src/index';

describe('Text', () => {
  it('should have .text class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Text></Text>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('text');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Text>123</Text>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Text className="custom"></Text>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Text name', () => {
    let Component = (
      <Text></Text>
    );

    expect(Component.type.displayName).toMatch('Text');
  });
});
