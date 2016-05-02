
jest.dontMock('../../../src/index.js');

import ReactDOM    from 'react-dom';
import React       from 'react';
import TestUtils   from 'react-addons-test-utils';
import {Accordion} from '../../../src/index';

describe('Accordion', () => {
  it('should have .ui.accordion class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Accordion></Accordion>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('accordion');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Accordion>123</Accordion>
    );

    expect(ReactDOM.findDOMNode(instance).textContent).toEqual('123');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Accordion className="custom"></Accordion>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have custom attribute', () => {
    let instance = TestUtils.renderIntoDocument(
      <Accordion data-custom='custom'></Accordion>
    );

    expect(ReactDOM.findDOMNode(instance).getAttribute('data-custom')).toMatch('custom');
  });

  it('should display Accordion name', () => {
    let Component = (
      <Accordion></Accordion>
    );

    expect(Component.type.displayName).toMatch('Accordion');
  });
});
