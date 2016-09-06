
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Card}    from '../../../src/index';

describe('Card', () => {
  it('should have .ui.card class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Card></Card>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('card');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Card>123</Card>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Card className="custom"></Card>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Card name', () => {
    let Component = (
      <Card></Card>
    );

    expect(Component.type.displayName).toMatch('Card');
  });
});
