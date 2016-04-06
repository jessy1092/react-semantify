"use strict";

import React        from 'react';
import ExampleBlock from '../../components/ExampleBlock.jsx';
import PageTitle    from '../../components/PageTitle.jsx';

import {Divider, Header} from 'react-semantify';

export default React.createClass({

    render() {
        return (
            <div>
                <PageTitle title="Header">
                    A header provides a short summary of content
                </PageTitle>

                <div className="main container">
                    <Header className="large dividing">Type</Header>

                    <ExampleBlock header="Header"
                                  sub="A standard header">
                        <Header type="h1" color="red">First Header</Header>

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
