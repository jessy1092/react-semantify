
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-dom/test-utils';
import {Segment} from '../../../src/index';

describe('Segment', () => {
  it('should have .ui.segment class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Segment></Segment>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('segment');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Segment>123</Segment>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Segment className="custom"></Segment>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have blue class with color is blue', () => {
    let instance = TestUtils.renderIntoDocument(
      <Segment color="blue"></Segment>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('blue');
  });

  it('should have disabled class with disabled is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Segment disabled={true}></Segment>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should have loading class with loading is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Segment loading={true}></Segment>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('loading');
  });

  it('should call onClick callback when unit click', () => {

    let clickOp = jest.genMockFunction();

    let instance = TestUtils.renderIntoDocument(
      <Segment onClick={clickOp}></Segment>
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(instance));

    expect(clickOp).toBeCalled();
  });

  it('should display Segment name', () => {
    let Component = (
      <Segment></Segment>
    );

    expect(Component.type.displayName).toMatch('Segment');
  });
});
