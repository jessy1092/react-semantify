/** @jsx React.DOM */

jest.dontMock('../../../src/index.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Button    = require('../../../src/index.js').Button;

describe('Button', function () {
  it('should have .ui.button class', function () {
    var instance = TestUtils.renderIntoDocument(
      <Button></Button>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('button');
  });
});
