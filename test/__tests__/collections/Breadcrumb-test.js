
jest.dontMock('../../../src/index.js');

let ReactDOM   = require('react-dom');
let React      = require('react');
let TestUtils  = require('react-addons-test-utils');
let Breadcrumb = require('../../../src/index.js').Breadcrumb;

describe('Breadcrumb', function () {
  it('should have .ui.breadcrumb class by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Breadcrumb></Breadcrumb>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('breadcrumb');
  });

  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Breadcrumb>123</Breadcrumb>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Breadcrumb className="custom"></Breadcrumb>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });
});
