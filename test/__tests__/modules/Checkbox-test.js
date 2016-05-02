
jest.dontMock('../../../src/index.js');

import ReactDOM   from 'react-dom';
import React      from 'react';
import TestUtils  from 'react-addons-test-utils';
import {Checkbox} from '../../../src/index';

describe('Checkbox', () => {
  it('should have .ui.checkbox class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Checkbox></Checkbox>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('checkbox');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Checkbox>123</Checkbox>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Checkbox className="custom"></Checkbox>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Checkbox disabled={true}></Checkbox>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should have readOnly class with readOnly is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Checkbox readOnly={true}></Checkbox>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('read-only');
  });

  it('should display Checkbox name', () => {
    let Component = (
      <Checkbox></Checkbox>
    );

    expect(Component.type.displayName).toMatch('Checkbox');
  });
});
