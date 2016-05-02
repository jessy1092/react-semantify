
jest.dontMock('../../../src/index.js');

import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Modal}   from '../../../src/index';

describe('Modal', () => {
  it('should have .ui.modal class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Modal></Modal>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('modal');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Modal>123</Modal>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Modal className="custom"></Modal>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have active class with active is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Modal active={true}></Modal>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('active');
  });

  it('should display Modal name', () => {
    let Component = (
      <Modal></Modal>
    );

    expect(Component.type.displayName).toMatch('Modal');
  });
});
