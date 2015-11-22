"use strict";

jest.dontMock('../../../src/commons/unit.js');

let ReactDOM  = require('react-dom');
let React     = require('react');
let TestUtils = require('react-addons-test-utils');
var Unit      = require('../../../src/commons/unit.js').Unit;

describe('Unit', function () {
  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Unit
        className="custom"
        color="null"
        type="div"
        disabled={false}
        active={false}
        loading={false}
        focus={false}
        error={false}
        completed={false}
        readOnly={false}>
          123
      </Unit>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Unit
        className="custom"
        color="null"
        type="div"
        disabled={false}
        active={false}
        loading={false}
        focus={false}
        error={false}
        completed={false}
        readOnly={false}>
      </Unit>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have blue class with color is blue', function () {
    var instance = TestUtils.renderIntoDocument(
      <Unit
        className="custom"
        color="blue"
        type="div"
        disabled={false}
        active={false}
        loading={false}
        focus={false}
        error={false}
        completed={false}
        readOnly={false}>
      </Unit>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('blue');
  });

  it('should have props class with props is true', function () {
    var instance = TestUtils.renderIntoDocument(
      <Unit
        className="custom"
        color="null"
        type="div"
        disabled={true}
        active={true}
        loading={true}
        focus={true}
        error={true}
        completed={true}
        readOnly={true}>
      </Unit>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('disabled');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('active');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('loading');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('focus');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('error');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('completed');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('read-only');
  });

  it('should call onClick callback when unit click', function () {

    var clickOp = jest.genMockFunction();

    var instance = TestUtils.renderIntoDocument(
      <Unit
        className="custom"
        color="null"
        type="div"
        disabled={true}
        active={true}
        loading={true}
        focus={true}
        error={true}
        completed={true}
        readOnly={true}
        onClick={clickOp}>
          123
      </Unit>
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(instance));

    expect(clickOp).toBeCalled();
  });
});
