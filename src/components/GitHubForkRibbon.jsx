"use strict";

var React            = require('react/addons');
var GitHubForkRibbon = require('react-github-fork-ribbon');

module.exports = React.createClass({

  render: function () {
    return(
      <GitHubForkRibbon position="right"
                        href="//github.com/jessy1092/react-semantify"
                        target="_blank">
        Fork me on GitHub
      </GitHubForkRibbon>
    );
  }
});
