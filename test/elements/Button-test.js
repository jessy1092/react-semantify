jest.dontMock('../../src/elements/button.js');

var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Button    = require('../../src/elements/button.js');

describe('Button', function () {
  it('should have .ui.button class', function () {
    var instance = TestUtils.renderIntoDocument(
      <Button></Button>
    );

    expect(instance.getDOMNode().className).toMatch('ui');
    expect(instance.getDOMNode().className).toMatch('button');
  })
})
