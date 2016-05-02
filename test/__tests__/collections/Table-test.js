
jest.dontMock('../../../src/collections/table.js');

import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Table}   from '../../../src/index';

describe('Table', () => {
  it('should have .ui.table class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Table></Table>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('table');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Table><tbody><tr></tr></tbody></Table>
    );

    expect(ReactDOM.findDOMNode(instance).children[0].children[0].tagName).toEqual('TR');
    expect(ReactDOM.findDOMNode(instance).children[0].tagName).toEqual('TBODY');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Table className="custom"></Table>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Table name', () => {
    let Component = (
      <Table></Table>
    );

    expect(Component.type.displayName).toMatch('Table');
  });
});
