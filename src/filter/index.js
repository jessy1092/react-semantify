
import classGenerator from './classGenerator';
import colorFilter from './colorFilter';
import stateFilter from './stateFilter';
import typeFilter from './typeFilter';


class FilterFactory {

  constructor(ComposeComponent) {
    this.ComposeComponent = ComposeComponent;
  }

  classGenerator(defaultClassName) {
    this.ComposeComponent = classGenerator(defaultClassName, this.ComposeComponent);
    return this;
  }

  colorFilter() {
    this.ComposeComponent = colorFilter(this.ComposeComponent);
    return this;
  }

  stateFilter(stateArray) {
    this.ComposeComponent = stateFilter(stateArray, this.ComposeComponent);
    return this;
  }

  typeFilter() {
    this.ComposeComponent = typeFilter(this.ComposeComponent);
    return this;
  }

  getComposeComponent() {
    return this.ComposeComponent;
  }
}

export default FilterFactory
