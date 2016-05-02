
jest.dontMock('../../../src/index.js');

import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Comment} from '../../../src/index';

describe('Comment', () => {
  it('should have .comment class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Comment></Comment>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('comment');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Comment>123</Comment>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Comment className="custom"></Comment>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should display Comment name', () => {
    let Component = (
      <Comment></Comment>
    );

    expect(Component.type.displayName).toMatch('Comment');
  });
});
