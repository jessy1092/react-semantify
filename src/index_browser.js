"use strict";
var React = global.React;

module.exports = global.Semantify = {
  // collections
  Breadcrumb: require('./collections/breadcrumb.jsx')(React),
  Form: require('./collections/form.jsx')(React),
  Grid: require('./collections/grid.jsx')(React),
  Menu: require('./collections/menu.jsx')(React),
  Message: require('./collections/message.jsx')(React),
  Table: require('./collections/table.jsx')(React),

  // commons
  Column: require('./commons/column.jsx')(React),
  Content: require('./commons/content.jsx')(React),
  Field: require('./commons/field.jsx')(React),
  Fields: require('./commons/fields.jsx')(React),
  Row: require('./commons/row.jsx')(React),
  Section: require('./commons/section.jsx')(React),
  Text: require('./commons/text.jsx')(React),

  // elements
  Button: require('./elements/button.jsx')(React),
  Divider: require('./elements/divider.jsx')(React),
  Flag: require('./elements/flag.jsx')(React),
  Header: require('./elements/header.jsx')(React),
  Icon: require('./elements/icon.jsx')(React),
  Image: require('./elements/image.jsx')(React),
  Input: require('./elements/input.jsx')(React),
  Label: require('./elements/label.jsx')(React),
  List: require('./elements/list.jsx')(React),
  Loader: require('./elements/loader.jsx')(React),
  Rail: require('./elements/rail.jsx')(React),
  Reveal: require('./elements/reveal.jsx')(React),
  Segment: require('./elements/segment.jsx')(React),
  Step: require('./elements/step.jsx')(React),
  Steps: require('./elements/steps.jsx')(React),

  // modules
  Accordion: require('./modules/accordion.jsx')(React),
  Checkbox: require('./modules/checkbox.jsx')(React),
  Dimmer: require('./modules/dimmer.jsx')(React),
  Dropdown: require('./modules/dropdown.jsx')(React),
  Modal: require('./modules/modal.jsx')(React),
  Popup: require('./modules/popup.jsx')(React),
  Progress: require('./modules/progress.jsx')(React),
  Rating: require('./modules/rating.jsx')(React),
  Search: require('./modules/search.jsx')(React),
  Shape: require('./modules/shape.jsx')(React),
  Sidebar: require('./modules/sidebar.jsx')(React),
  Sticky: require('./modules/sticky.jsx')(React),
  Tab: require('./modules/tab.jsx')(React),

  // views
  Ad: require('./views/advertisement.jsx')(React),
  Card: require('./views/card.jsx')(React),
  Comment: require('./views/comment.jsx')(React),
  Comments: require('./views/comments.jsx')(React),
  Feed: require('./views/feed.jsx')(React),
  Item: require('./views/item.jsx')(React),
  Items: require('./views/items.jsx')(React),
  Statistic: require('./views/statistic.jsx')(React)
};
