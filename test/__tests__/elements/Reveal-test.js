
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-dom/test-utils';
import {Reveal}  from '../../../src/index';

describe('Reveal', () => {
  it('should have .ui.reveal class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Reveal></Reveal>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('reveal');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Reveal>123</Reveal>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Reveal className="custom"></Reveal>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Reveal disabled={true}></Reveal>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should display Reveal name', () => {
    let Component = (
      <Reveal></Reveal>
    );

    expect(Component.type.displayName).toMatch('Reveal');
  });
});
