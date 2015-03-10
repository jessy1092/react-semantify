"use strict";
var React = require('react/addons');

module.exports = {
  // collections
  Breadcrumb: require('./collections/breadcrumb.js')(React),
  Form: require('./collections/form.js')(React),
  Grid: require('./collections/grid.js')(React),
  Menu: require('./collections/menu.js')(React),
  Message: require('./collections/message.js')(React),
  Table: require('./collections/table.js')(React),

  // commons
  Column: require('./commons/column.js')(React),
  Content: require('./commons/content.js')(React),
  Field: require('./commons/field.js')(React),
  Fields: require('./commons/fields.js')(React),
  Row: require('./commons/row.js')(React),
  Section: require('./commons/section.js')(React),
  Text: require('./commons/text.js')(React),
  Title: require('./commons/title.js')(React),

  // elements
  Button: require('./elements/button.js')(React),
  Divider: require('./elements/divider.js')(React),
  Flag: require('./elements/flag.js')(React),
  Header: require('./elements/header.js')(React),
  Icon: require('./elements/icon.js')(React),
  Image: require('./elements/image.js')(React),
  Input: require('./elements/input.js')(React),
  Label: require('./elements/label.js')(React),
  List: require('./elements/list.js')(React),
  Loader: require('./elements/loader.js')(React),
  Rail: require('./elements/rail.js')(React),
  Reveal: require('./elements/reveal.js')(React),
  Segment: require('./elements/segment.js')(React),
  Step: require('./elements/step.js')(React),
  Steps: require('./elements/steps.js')(React),

  // modules
  Accordion: require('./modules/accordion.js')(React),
  Checkbox: require('./modules/checkbox.js')(React),
  Dimmer: require('./modules/dimmer.js')(React),
  Dropdown: require('./modules/dropdown.js')(React),
  Modal: require('./modules/modal.js')(React),
  Popup: require('./modules/popup.js')(React),
  Progress: require('./modules/progress.js')(React),
  Rating: require('./modules/rating.js')(React),
  Search: require('./modules/search.js')(React),
  Shape: require('./modules/shape.js')(React),
  Sidebar: require('./modules/sidebar.js')(React),
  Sticky: require('./modules/sticky.js')(React),
  Tab: require('./modules/tab.js')(React),

  // views
  Ad: require('./views/advertisement.js')(React),
  Card: require('./views/card.js')(React),
  Comment: require('./views/comment.js')(React),
  Comments: require('./views/comments.js')(React),
  Feed: require('./views/feed.js')(React),
  Item: require('./views/item.js')(React),
  Items: require('./views/items.js')(React),
  Statistic: require('./views/statistic.js')(React)
};
