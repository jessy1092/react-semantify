"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Image     = require('../../../src/index.js').Image;

describe('Image', function () {
  it('should have .ui.image class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Image></Image>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('image');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Image className="custom"></Image>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Image disabled={true}></Image>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
  });

  it('should have src for image path', function () {

    var instance = TestUtils.renderIntoDocument(
      <Image src="./example.jpg"></Image>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('src')).toEqual('./example.jpg');
  });

  it('should be <img>', function () {
    var instance = TestUtils.renderIntoDocument(
      <Image></Image>
    );

    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'img')).toBeDefined();
  });
});
