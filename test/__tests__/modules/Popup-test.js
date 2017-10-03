
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-dom/test-utils';
import {Popup}   from '../../../src/index';

describe('Popup', () => {
  it('should have .ui.popup class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Popup></Popup>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('popup');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Popup>123</Popup>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Popup className="custom"></Popup>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have custom attribute', () => {
    let instance = TestUtils.renderIntoDocument(
      <Popup data-custom='custom'></Popup>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-custom')).toMatch('custom');
  });

  it('should display Popup name', () => {
    let Component = (
      <Popup></Popup>
    );

    expect(Component.type.displayName).toMatch('Popup');
  });
});
