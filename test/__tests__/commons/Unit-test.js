"use strict";

jest.dontMock('../../../src/commons/unit.js');

import ReactDOM  from 'react-dom'
import React     from 'react'
import TestUtils from 'react-addons-test-utils'
import Unit      from '../../../src/commons/unit.js';

describe('Unit', function () {
  it('should have child by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Unit>123</Unit>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should be <div /> tag by default', function () {
    var instance = TestUtils.renderIntoDocument(
      <Unit />
    );

    expect(ReactDOM.findDOMNode(instance).tagName).toEqual('DIV');
  });

  it('should have custom class with custom className', function () {
    var instance = TestUtils.renderIntoDocument(
      <Unit className="custom" >
      </Unit>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should set <a /> tag with link type', function () {
    var instance = TestUtils.renderIntoDocument(
      <Unit type="link" />
    );

    expect(ReactDOM.findDOMNode(instance).tagName).toMatch('A');
  });

  it('should set <i /> tag with link icon', function () {
    var instance = TestUtils.renderIntoDocument(
      <Unit type="icon" />
    );

    expect(ReactDOM.findDOMNode(instance).tagName).toMatch('I');
  });

  it('should call onClick callback when unit click', function () {

    var clickOp = jest.genMockFunction();

    var instance = TestUtils.renderIntoDocument(
      <Unit onClick={clickOp}>
          123
      </Unit>
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(instance));

    expect(clickOp).toBeCalled();
  });
});
