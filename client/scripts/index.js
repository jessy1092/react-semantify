"use strict";
import $ from 'jquery';
global.$ = global.jQuery = $;
import 'semantic-ui/dist/semantic.js';

import React        from 'react';
import ReactDOM     from 'react-dom';
import Sidebar      from '../../src/components/Sidebar.jsx';
import ForkRibbon   from '../../src/components/GitHubForkRibbon.jsx';
import RouteActions from '../../src/actions/RouteActions.js';
import App          from '../../src/App.jsx';

var pathName = location.hash.substring(2);

ReactDOM.render(<Sidebar />, document.getElementsByClassName('ui sidebar')[0]);
ReactDOM.render(<ForkRibbon />, document.getElementsByClassName('github fork ribbon')[0]);
ReactDOM.render(<App />, document.getElementsByClassName('pusher')[0]);

RouteActions.updatePath(pathName);

$('.ui.launch.button').on('click', () => {
  $('.ui.sidebar').sidebar('show');
});
