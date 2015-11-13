"use strict";

jest.dontMock('../../../src/commons/unit.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Unit      = require('../../../src/commons/unit.js')(React);

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

    expect(instance.getDOMNode().textContent).toMatch('123');
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

    expect(instance.getDOMNode().className).toMatch('custom');
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

    expect(instance.getDOMNode().className).toMatch('blue');
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

    expect(instance.getDOMNode().className).toMatch('disabled');
    expect(instance.getDOMNode().className).toMatch('active');
    expect(instance.getDOMNode().className).toMatch('loading');
    expect(instance.getDOMNode().className).toMatch('focus');
    expect(instance.getDOMNode().className).toMatch('error');
    expect(instance.getDOMNode().className).toMatch('completed');
    expect(instance.getDOMNode().className).toMatch('read-only');
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

    TestUtils.Simulate.click(instance.getDOMNode());

    expect(clickOp).toBeCalled();
  });
});
