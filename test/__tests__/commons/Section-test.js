
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-dom/test-utils';
import {Section} from '../../../src/index';

describe('Section', () => {
  it('should have .section class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Section></Section>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('section');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Section>123</Section>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Section className="custom"></Section>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have blue class with color is blue', () => {
    let instance = TestUtils.renderIntoDocument(
      <Section color="blue"></Section>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('blue');
  });

  it('should be <a> with link type', () => {
    let instance = TestUtils.renderIntoDocument(
      <Section type='link'></Section>
    );

    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'a')).toBeDefined();
  });

  it('should display Section name', () => {
    let Component = (
      <Section></Section>
    );

    expect(Component.type.displayName).toMatch('Section');
  });
});
