
jest.dontMock('../../../src/index.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
let Form      = require('../../../src/index.js').Form;

describe('Form', function () {
  it('should have .ui.form class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Form></Form>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('form');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Form>123</Form>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Form className="custom"></Form>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
