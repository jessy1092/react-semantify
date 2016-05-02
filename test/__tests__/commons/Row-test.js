
jest.dontMock('../../../src/index.js');

import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Row}     from '../../../src/index';

describe('Row', () => {
  it('should have .row class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Row></Row>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('row');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Row>123</Row>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Row className="custom"></Row>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Row name', () => {
    let Component = (
      <Row></Row>
    );

    expect(Component.type.displayName).toMatch('Row');
  });
});
