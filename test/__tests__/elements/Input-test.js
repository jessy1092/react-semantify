
import ReactDOM  from 'react-dom';
import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import {Input}   from '../../../src/index';

describe('Input', () => {
  it('should have .ui.input class by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Input></Input>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('ui');
    expect(ReactDOM.findDOMNode(instance).className).toMatch('input');
  });

  it('should have child by default', () => {
    let instance = TestUtils.renderIntoDocument(
      <Input>
        <input placeholder="Search" type="text"/>
      </Input>
    );

    expect(ReactDOM.findDOMNode(instance).children[0].getAttribute('placeholder')).toMatch('Search');
  });

  it('should have custom class with custom className', () => {
    let instance = TestUtils.renderIntoDocument(
      <Input className="custom"></Input>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('custom');
  });

  it('should have loading class with loading is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Input loading={true}></Input>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('loading');
  });

  it('should have focus class with focus is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Input focus={true}></Input>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('focus');
  });

  it('should have error class with error is true', () => {
    let instance = TestUtils.renderIntoDocument(
      <Input error={true}></Input>
    );

    expect(ReactDOM.findDOMNode(instance).className).toMatch('error');
  });

  it('should have <input> if children is null', () => {
    let instance = TestUtils.renderIntoDocument(
      <Input></Input>
    );

    expect(TestUtils.findRenderedDOMComponentWithTag(instance, 'input')).toBeDefined();
  });

  it('should have placeholder for input string', () => {

    let instance = TestUtils.renderIntoDocument(
      <Input placeholder="Search"></Input>
    );

    let input = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');

    expect(ReactDOM.findDOMNode(input).getAttribute('placeholder')).toMatch('Search');
  });

  it('should have type for input type', () => {

    let instance = TestUtils.renderIntoDocument(
      <Input type="text"></Input>
    );

    let input = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');

    expect(ReactDOM.findDOMNode(input).getAttribute('type')).toMatch('text');
  });

  it('should have value for button type', () => {

    let instance = TestUtils.renderIntoDocument(
      <Input type="button" value="Submit..."></Input>
    );

    let input = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');

    expect(ReactDOM.findDOMNode(input).getAttribute('value')).toMatch('Submit...');
  });

  it('should display Input name', () => {
    let Component = (
      <Input></Input>
    );

    expect(Component.type.displayName).toMatch('Input');
  });
});
