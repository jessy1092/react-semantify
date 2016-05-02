
jest.dontMock('../../../src/index.js');

import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Grid}    from '../../../src/index';

describe('Grid', () => {
  it('should have .ui.grid class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Grid></Grid>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('grid');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Grid>123</Grid>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Grid className="custom"></Grid>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Grid name', () => {
    let Component = (
      <Grid></Grid>
    );

    expect(Component.type.displayName).toMatch('Grid');
  });
});
