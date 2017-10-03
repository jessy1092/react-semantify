
import ReactDOM  from 'react-dom'
import React     from 'react'
import TestUtils from 'react-dom/test-utils'
import Unit      from '../../../src/commons/unit.js';

describe('Unit', () => {
  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Unit>123</Unit>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should be <div /> tag by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Unit />
    );

    expect(ReactDOM.findDOMNode(instance).tagName).toEqual('DIV');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Unit className="custom" >
      </Unit>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should set <a /> tag with link type', () => {
    let instance = TestUtils.renderIntoDocument(
      <Unit type="link" />
    );

    expect(ReactDOM.findDOMNode(instance).tagName).toMatch('A');
  });

  it('should set <i /> tag with link icon', () => {
    let instance = TestUtils.renderIntoDocument(
      <Unit type="icon" />
    );

    expect(ReactDOM.findDOMNode(instance).tagName).toMatch('I');
  });

  it('should call onClick callback when unit click', () => {

    let clickOp = jest.genMockFunction();

    let instance = TestUtils.renderIntoDocument(
      <Unit onClick={clickOp}>
          123
      </Unit>
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(instance));

    expect(clickOp).toBeCalled();
  });
});
