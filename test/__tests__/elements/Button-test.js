
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Button}  from '../../../src/index';

describe('Button', () => {
  it('should have .ui.button class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Button></Button>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('button');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Button>123</Button>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Button className="custom"></Button>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have blue class with color is blue', () => {
    let instance = TestUtils.renderIntoDocument(
      <Button color="blue"></Button>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('blue');
  });

  it('should have disabled class with disabled is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Button disabled={true}></Button>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should have active class with active is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Button active={true}></Button>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('active');
  });

  it('should have loading class with loading is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Button loading={true}></Button>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('loading');
  });

  it('should call onClick callback when unit click', () => {

    let clickOp = jest.genMockFunction();

    let instance = TestUtils.renderIntoDocument(
      <Button onClick={clickOp}></Button>
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(instance));

    expect(clickOp).toBeCalled();
  });

  it('should display Button name', () => {
    let Component = (
      <Button></Button>
    );

    expect(Component.type.displayName).toMatch('Button');
  });
});
