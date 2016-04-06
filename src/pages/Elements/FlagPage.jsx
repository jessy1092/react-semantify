"use strict";

import React        from 'react';
import ExampleBlock from '../../components/ExampleBlock.jsx';
import PageTitle    from '../../components/PageTitle.jsx';

import {Flag, Divider, Header} from 'react-semantify';

export default React.createClass({

    render() {
        return (
            <div>
                <PageTitle title="Flag">
                    A flag is is used to represent a political state
                </PageTitle>

                <div className="main container">
                    <Header className="large dividing">Type</Header>

                    <ExampleBlock header="Flag"
                                  sub="A standard flag">
                        <Flag className="ad" />
                        <Flag className="ae" />
                        <Flag className="af" />
                        <Flag className="ag" />
                        <Flag className="ai" />
                        <Flag className="al" />
                        <Flag className="gb" />
                        <Flag className="us" />
                    </ExampleBlock>

                    <Divider />

                    <pre>
                        <a href="http://semantic-ui.com/elements/flag.html" target="_blank">> All flag codes can be found on the Semantic UI documentation.</a>
                    </pre>
                </div>
            </div>
        );
    }
});
