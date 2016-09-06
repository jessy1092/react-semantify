
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Image}   from '../../../src/index';

describe('Image', () => {
  it('should have .ui.image class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Image></Image>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('image');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Image className="custom"></Image>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Image disabled={true}></Image>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should have src for image path', () => {

    let instance = TestUtils.renderIntoDocument(
      <Image src="./example.jpg"></Image>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('src')).toEqual('./example.jpg');
  });

  it('should be <img>', () => {
    let instance = TestUtils.renderIntoDocument(
      <Image></Image>
    );

    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'img')).toBeDefined();
  });

  it('should display Image name', () => {
    let Component = (
      <Image></Image>
    );

    expect(Component.type.displayName).toMatch('Image');
  });
});
