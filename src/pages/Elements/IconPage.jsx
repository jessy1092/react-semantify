"use strict";

import React        from 'react';
import ExampleBlock from '../../components/ExampleBlock.jsx';
import PageTitle    from '../../components/PageTitle.jsx';

import {Icon, Divider, Header} from 'react-semantify';

export default React.createClass({

    onClick(type) {
        alert('You clicked on an icon: ' + type);
    },

    render() {
        return (
            <div>
                <PageTitle title="Icon">
                    An icon is a glyph used to represent something else
                </PageTitle>

                <div className="main container">
                    <Header className="large dividing">Icon</Header>

                    <ExampleBlock header="Icon"
                                  sub="A standard icon">
                        <Icon className="alarm" />
                        <Icon className="alarm slash" />
                        <Icon className="dropdown" />
                        <Icon className="history" />
                    </ExampleBlock>

                    <Divider />

                    <Header className="large dividing">States</Header>

                    <ExampleBlock header="Disabled"
                                  sub="A disabled icon">
                        <Icon className="alarm" disabled={true} />
                        <Icon className="alarm slash" disabled={true} />
                        <Icon className="dropdown" disabled={true} />
                        <Icon className="history" disabled={true} />
                    </ExampleBlock>

                    <ExampleBlock header="Loading"
                                  sub="A loading icon">
                        <Icon className="spinner" loading={true} />
                        <Icon className="notched circle" loading={true} />
                        <Icon className="asterisk" loading={true} />
                    </ExampleBlock>

                    <Header className="large dividing">Variations</Header>

                    <ExampleBlock header="Fitted"
                                  sub="An icon can be fitted, without any space to the left or right of it">
                        <p>Fitted into a tight <Icon className="copyright fitted" /> space</p>
                    </ExampleBlock>

                    <ExampleBlock header="Size"
                                  sub="An icon can vary in size">
                        <Icon className="mini alarm" />
                        <Icon className="mini alarm slash" />
                        <Icon className="mini dropdown" />
                        <Icon className="mini history" />
                        <br />
                        <Icon className="tiny alarm" />
                        <Icon className="tiny alarm slash" />
                        <Icon className="tiny dropdown" />
                        <Icon className="tiny history" />
                        <br />
                        <Icon className="small alarm" />
                        <Icon className="small alarm slash" />
                        <Icon className="small dropdown" />
                        <Icon className="small history" />
                        <br />
                        <Icon className="alarm" />
                        <Icon className="alarm slash" />
                        <Icon className="dropdown" />
                        <Icon className="history" />
                        <br />
                        <Icon className="large alarm" />
                        <Icon className="large alarm slash" />
                        <Icon className="large dropdown" />
                        <Icon className="large history" />
                        <br />
                        <Icon className="big alarm" />
                        <Icon className="big alarm slash" />
                        <Icon className="big dropdown" />
                        <Icon className="big history" />
                        <br />
                        <Icon className="huge alarm" />
                        <Icon className="huge alarm slash" />
                        <Icon className="huge dropdown" />
                        <Icon className="huge history" />
                        <br />
                        <Icon className="massive alarm" />
                        <Icon className="massive alarm slash" />
                        <Icon className="massive dropdown" />
                        <Icon className="massive history" />
                    </ExampleBlock>

                    <ExampleBlock header="Link"
                                  sub="An icon can be formatted as a link">
                        <Icon className="link alarm" onClick={() => this.onClick('alarm')} />
                        <Icon className="link alarm slash" onClick={() => this.onClick('alarm slash')} />
                        <Icon className="link dropdown" onClick={() => this.onClick('dropdown')} />
                        <Icon className="link history" onClick={() => this.onClick('history')} />
                    </ExampleBlock>

                    <ExampleBlock header="Flipped"
                                  sub="An icon can be flipped">
                        <Icon className="horizontally flipped alarm" />
                        <Icon className="horizontally flipped alarm slash" />
                        <Icon className="horizontally flipped dropdown" />
                        <Icon className="horizontally flipped history" />
                        <br />
                        <Icon className="vertically flipped alarm" />
                        <Icon className="vertically flipped alarm slash" />
                        <Icon className="vertically flipped dropdown" />
                        <Icon className="vertically flipped history" />
                    </ExampleBlock>

                    <ExampleBlock header="Rotated"
                                  sub="An icon can be rotated">
                        <Icon className="clockwise rotated alarm" />
                        <Icon className="clockwise rotated alarm slash" />
                        <Icon className="clockwise rotated dropdown" />
                        <Icon className="clockwise rotated history" />
                        <br />
                        <Icon className="counterclockwise rotated alarm" />
                        <Icon className="counterclockwise rotated alarm slash" />
                        <Icon className="counterclockwise rotated dropdown" />
                        <Icon className="counterclockwise rotated history" />
                    </ExampleBlock>

                    <ExampleBlock header="Circular"
                                  sub="An icon can be formatted to appear circular">
                        <Icon className="circular alarm" />
                        <Icon className="circular teal alarm slash" />
                        <Icon className="circular inverted dropdown" />
                        <Icon className="circular inverted teal history" />
                    </ExampleBlock>

                    <ExampleBlock header="Bordered"
                                  sub="An icon can be formatted to appear bordered">
                        <Icon className="bordered alarm" />
                        <Icon className="bordered teal alarm slash" />
                        <Icon className="bordered inverted dropdown" />
                        <Icon className="bordered inverted teal history" />
                    </ExampleBlock>

                    <ExampleBlock header="Colored"
                                  sub="An icon can be formatted with different colors">
                        <Icon className="alarm" color="red" />
                        <Icon className="alarm slash" color="orange" />
                        <Icon className="dropdown" color="yellow" />
                        <Icon className="history" color="olive" />
                    </ExampleBlock>

                    <Divider />

                    <pre>
                        <a href="http://semantic-ui.com/elements/icon.html" target="_blank">> All icons can be found on the Semantic UI documentation.</a>
                    </pre>
                </div>
            </div>
        );
    }
});
