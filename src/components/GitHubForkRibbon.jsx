"use strict";

import React            from 'react';
import GitHubForkRibbon from 'react-github-fork-ribbon';

export default React.createClass({

  render() {
    return(
      <GitHubForkRibbon position="right"
                        href="//github.com/jessy1092/react-semantify"
                        target="_blank">
        Fork me on GitHub
      </GitHubForkRibbon>
    );
  }
});
