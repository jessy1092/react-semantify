
jest.dontMock('../../../src/index.js');

import ReactDOM    from 'react-dom';
import React       from 'react';
import TestUtils   from 'react-addons-test-utils';
import {Container} from '../../../src/index';

describe('Container', () => {
  it('should have .ui.container class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Container></Container>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('container');
  });

  it('could have child', () => {
    let instance = TestUtils.renderIntoDocument(
      <Container>123</Container>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Container className="custom"></Container>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should set custom id', () => {
    let instance = TestUtils.renderIntoDocument(
      <Container id="custom"></Container>
    );

    expect(ReactDOM.findDOMNode(instance).id).toEqual('custom');
  });

  it('should set custom attribute', () => {
    let instance = TestUtils.renderIntoDocument(
      <Container data-custom="custom"></Container>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-custom')).toEqual('custom');
  });

  it('should display Container name', function () {
    var Component = (
      <Container></Container>
    );

    expect(Component.type.displayName).toMatch('Container');
  });
});
