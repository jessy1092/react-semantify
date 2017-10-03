
import ReactDOM    from 'react-dom';
import React       from 'react';
import TestUtils   from 'react-dom/test-utils';
import {Statistic} from '../../../src/index';

describe('Statistic', () => {
  it('should have .ui.statistic class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Statistic></Statistic>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('statistic');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Statistic>123</Statistic>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Statistic className="custom"></Statistic>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Statistic name', () => {
    let Component = (
      <Statistic></Statistic>
    );

    expect(Component.type.displayName).toMatch('Statistic');
  });
});
