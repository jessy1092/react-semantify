
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-dom/test-utils';
import {Label}   from '../../../src/index';

describe('Label', () => {
  it('should have .ui.label class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Label></Label>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('label');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Label>123</Label>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Label className="custom"></Label>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have blue class with color is blue', () => {
    let instance = TestUtils.renderIntoDocument(
      <Label color="blue"></Label>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('blue');
  });

  it('should be <div> if type is div', () => {
    let instance = TestUtils.renderIntoDocument(
      <Label type="div"></Label>
    );

    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'div')).toBeDefined();
  });

  it('should call onClick callback when unit click', () => {

    let clickOp = jest.genMockFunction();

    let instance = TestUtils.renderIntoDocument(
      <Label onClick={clickOp}></Label>
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(instance));

    expect(clickOp).toBeCalled();
  });

  it('should display Label name', () => {
    let Component = (
      <Label></Label>
    );

    expect(Component.type.displayName).toMatch('Label');
  });
});
