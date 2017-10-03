
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-dom/test-utils';
import {Header}  from '../../../src/index';

describe('Header', () => {
  it('should have .ui.header class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Header></Header>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('header');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Header>123</Header>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Header className="custom"></Header>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have blue class with color is blue', () => {
    let instance = TestUtils.renderIntoDocument(
      <Header color="blue"></Header>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('blue');
  });

  it('should have disabled class with disabled is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Header disabled={true}></Header>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should be <a> with link', () => {
    let instance = TestUtils.renderIntoDocument(
      <Header type='link'></Header>
    );

    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'a')).toBeDefined();
  });

  it('should call onClick callback when unit click', () => {

    let clickOp = jest.genMockFunction();

    let instance = TestUtils.renderIntoDocument(
      <Header onClick={clickOp}></Header>
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(instance));

    expect(clickOp).toBeCalled();
  });

  it('should display Header name', () => {
    let Component = (
      <Header></Header>
    );

    expect(Component.type.displayName).toMatch('Header');
  });
});
