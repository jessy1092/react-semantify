
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-dom/test-utils';
import {Flag}    from '../../../src/index';

describe('Flag', () => {
  it('should have .flag class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Flag></Flag>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('flag');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Flag className="custom"></Flag>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should call onClick callback when unit click', () => {

    let clickOp = jest.genMockFunction();

    let instance = TestUtils.renderIntoDocument(
      <Flag onClick={clickOp}></Flag>
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(instance));

    expect(clickOp).toBeCalled();
  });

  it('should display Flag name', () => {
    let Component = (
      <Flag></Flag>
    );

    expect(Component.type.displayName).toMatch('Flag');
  });
});
