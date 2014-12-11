"use strict";
React = require('react/addons');
// React = global.React;

module.exports = global.Semantify = {
  // collections
  Breadcrumb: require('./src/collections/breadcrumb.jsx')(React),
  Form: require('./src/collections/form.jsx')(React),
  Grid: require('./src/collections/grid.jsx')(React),
  Menu: require('./src/collections/menu.jsx')(React),
  Message: require('./src/collections/message.jsx')(React),
  Table: require('./src/collections/table.jsx')(React),

  // commons
  Column: require('./src/commons/column.jsx')(React),
  Content: require('./src/commons/content.jsx')(React),
  Field: require('./src/commons/field.jsx')(React),
  Fields: require('./src/commons/fields.jsx')(React),
  Row: require('./src/commons/row.jsx')(React),
  Section: require('./src/commons/section.jsx')(React),
  Text: require('./src/commons/text.jsx')(React),

  // elements
  Button: require('./src/elements/button.jsx')(React),
  Divider: require('./src/elements/divider.jsx')(React),
  Flag: require('./src/elements/flag.jsx')(React),
  Header: require('./src/elements/header.jsx')(React),
  Icon: require('./src/elements/icon.jsx')(React),
  Image: require('./src/elements/image.jsx')(React),
  Input: require('./src/elements/input.jsx')(React),
  Label: require('./src/elements/label.jsx')(React),
  List: require('./src/elements/list.jsx')(React),
  Loader: require('./src/elements/loader.jsx')(React),
  Rail: require('./src/elements/rail.jsx')(React),
  Reveal: require('./src/elements/reveal.jsx')(React),
  Segment: require('./src/elements/segment.jsx')(React),
  Step: require('./src/elements/step.jsx')(React),
  Steps: require('./src/elements/steps.jsx')(React),

  // modules
  Dimmer: require('./src/modules/dimmer.jsx')(React),
  Dropdown: require('./src/modules/dropdown.jsx')(React),

  // views
  Ad: require('./src/views/advertisement.jsx')(React),
  Card: require('./src/views/card.jsx')(React),
  Comment: require('./src/views/comment.jsx')(React),
  Comments: require('./src/views/comments.jsx')(React),
  Feed: require('./src/views/feed.jsx')(React),
  Item: require('./src/views/item.jsx')(React),
  Items: require('./src/views/items.jsx')(React),
  Statistic: require('./src/views/statistic.jsx')(React)
};
