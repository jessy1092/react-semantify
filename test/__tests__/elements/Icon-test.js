
jest.dontMock('../../../src/index.js');

import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Icon}    from '../../../src/index';

describe('Icon', () => {
  it('should have .icon class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Icon></Icon>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('icon');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Icon className="custom"></Icon>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have blue class with color is blue', () => {
    let instance = TestUtils.renderIntoDocument(
      <Icon color="blue"></Icon>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('blue');
  });

  it('should have disabled class with disabled is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Icon disabled={true}></Icon>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should have loading class with loading is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Icon loading={true}></Icon>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('loading');
  });

  it('should be <i>', () => {
    let instance = TestUtils.renderIntoDocument(
      <Icon></Icon>
    );

    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'i')).toBeDefined();
  });

  it('should call onClick callback when unit click', () => {

    let clickOp = jest.genMockFunction();

    let instance = TestUtils.renderIntoDocument(
      <Icon onClick={clickOp}></Icon>
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(instance));

    expect(clickOp).toBeCalled();
  });

  it('should display Icon name', () => {
    let Component = (
      <Icon></Icon>
    );

    expect(Component.type.displayName).toMatch('Icon');
  });
});
