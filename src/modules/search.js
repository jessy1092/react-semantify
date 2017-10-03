
import React from 'react';

import filter from '../filter';

const stateArray       = ['loading'];
const defaultClassName = 'ui search';
const componentName    = 'Search';

class Basic extends React.Component {
  render() {

    const { props: { children, init, ...other } } = this

    return (
      <div {...other} ref="search" >
        {children}
      </div>
    );
  }

  componentDidMount() {

    const { props: { init = false } } = this;

    if (init === false) {
      return;
    }

    if (init === true) {
      $(this.refs.search).search();
    } else {
      $(this.refs.search).search(init);
    }
  }
}

const Search = new filter(Basic)
  .stateFilter(stateArray)
  .classGenerator(defaultClassName)
  .getComposeComponent(componentName);

export default Search;
