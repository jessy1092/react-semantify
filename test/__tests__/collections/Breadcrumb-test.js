
jest.dontMock('../../../src/index.js');

import ReactDOM     from 'react-dom';
import React        from 'react';
import TestUtils    from 'react-addons-test-utils';
import {Breadcrumb} from '../../../src/index';

describe('Breadcrumb', () => {
  it('should have .ui.breadcrumb class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Breadcrumb></Breadcrumb>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('breadcrumb');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Breadcrumb>123</Breadcrumb>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Breadcrumb className="custom"></Breadcrumb>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Breadcrumb name', () => {
    let Component = (
      <Breadcrumb></Breadcrumb>
    );

    expect(Component.type.displayName).toMatch('Breadcrumb');
  });
});
