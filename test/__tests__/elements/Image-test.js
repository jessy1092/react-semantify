"use strict";

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Image     = require('../../../src/index.js').Image;

describe('Image', function () {
  it('should have .ui.image class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Image></Image>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('image');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Image className="custom"></Image>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have disabled class with disabled is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Image disabled={true}></Image>
    );

    expect(instance.getDOMNode().className).toMatch('disabled');
  });

  it('should have src for image path', function () {

    var instance = TestUtils.renderIntoDocument(
      <Image src="./example.jpg"></Image>
    );

    expect(instance.getDOMNode().getAttribute('src')).toMatch('./example.jpg');
  });

  it('should be <img>', function () {
    var instance = TestUtils.renderIntoDocument(
      <Image></Image>
    );

    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'img')).toBeDefined();
  });
});
