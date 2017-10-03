
import ReactDOM   from 'react-dom';
import React      from 'react';
import TestUtils  from 'react-dom/test-utils';
import {Dropdown} from '../../../src/index';

describe('Dropdown', () => {
  it('should have .ui.dropdown class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Dropdown></Dropdown>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('dropdown');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Dropdown>123</Dropdown>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Dropdown className="custom"></Dropdown>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Dropdown disabled={true}></Dropdown>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should have active class with active is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Dropdown active={true}></Dropdown>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('active');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('simple');
  });

  it('should have error class with error is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Dropdown error={true}></Dropdown>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('error');
  });

  it('should display Dropdown name', () => {
    let Component = (
      <Dropdown></Dropdown>
    );

    expect(Component.type.displayName).toMatch('Dropdown');
  });
});
