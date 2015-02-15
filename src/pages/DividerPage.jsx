"use strict";

import React        from 'react/addons';
import Semantify    from 'react-semantify';
import ExampleBlock from '../components/ExampleBlock.jsx';
import PageTitle    from '../components/PageTitle.jsx';

var {Button, Divider, Header} = Semantify;

export default React.createClass({

  render() {
    return (
      <div>
        <PageTitle title="Divider">
          A divider visually segments content into groups
        </PageTitle>

        <div className="main container">
          <Header className="large dividing">Type</Header>

          <ExampleBlock header="Button"
                        sub="A standard divider"
                        codeBlock={["<p>This is the first region</p>",
                                    "<Divider/>",
                                    "<p>This is the second region</p>"].join('\n')}>
            <p>This is the first region</p>
            <Divider/>
            <p>This is the second region</p>
          </ExampleBlock>
        </div>
      </div>
    );
  }
})
