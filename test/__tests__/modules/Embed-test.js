"use strict";

jest.dontMock('../../../src/index.js');

import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Embed}   from '../../../src/index';

describe('Embed', () => {
  it('should have .ui.embed class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Embed></Embed>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('embed');
  });

  it('could have child', () => {
    let instance = TestUtils.renderIntoDocument(
      <Embed>123</Embed>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Embed className="custom"></Embed>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have source for item data-source', () => {
    var instance = TestUtils.renderIntoDocument(
      <Embed source="vimeo"></Embed>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-source')).toEqual('vimeo');
  });

  it('should have sourceId for item data-id', () => {
    var instance = TestUtils.renderIntoDocument(
      <Embed sourceId="pfdu_gTry8E"></Embed>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-id')).toEqual('pfdu_gTry8E');
  });

  it('should have placeholder for item data-placeholder', () => {
    var instance = TestUtils.renderIntoDocument(
      <Embed placeholder="/images/image-16by9.png"></Embed>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-placeholder')).toEqual('/images/image-16by9.png');
  });

  it('should have url for item data-url', () => {
    var instance = TestUtils.renderIntoDocument(
      <Embed url="http://www.myfav.es/jack"></Embed>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-url')).toEqual('http://www.myfav.es/jack');
  });

  it('should have icon for item data-icon', () => {
    var instance = TestUtils.renderIntoDocument(
      <Embed icon="right circle arrow"></Embed>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-icon')).toEqual('right circle arrow');
  });

});
