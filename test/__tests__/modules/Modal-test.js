"use strict";

jest.dontMock('../../../lib/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Modal     = require('../../../lib/index.js').Modal;

describe('Modal', function () {
  it('should have .ui.modal class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Modal></Modal>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('modal');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Modal>123</Modal>
    );

    expect(instance.getDOMNode().textContent).toMatch('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Modal className="custom"></Modal>
    );

    expect(instance.getDOMNode().className).toMatch('custom');
  });

  it('should have active class with active is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Modal active={true}></Modal>
    );

    expect(instance.getDOMNode().className).toMatch('active');
  });
});
