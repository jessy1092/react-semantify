
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-dom/test-utils';
import {Title}   from '../../../src/index';

describe('Title', () => {
  it('should have .title class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Title></Title>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('title');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Title>123</Title>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Title className="custom"></Title>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have active class with active is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Title active={true}></Title>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('active');
  });

  it('should display Title name', () => {
    let Component = (
      <Title></Title>
    );

    expect(Component.type.displayName).toMatch('Title');
  });
});
