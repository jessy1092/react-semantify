"use strict";

jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Modal     = require('../../../src/index.js').Modal;

describe('Modal', function () {
  it('should have .ui.modal class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Modal></Modal>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('modal');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Modal>123</Modal>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Modal className="custom"></Modal>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have active class with active is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Modal active={true}></Modal>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('active');
  });
});
