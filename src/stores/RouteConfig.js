"use strict";

export default {
  'Basic': [{
      name: 'Getting Started',
      page: require('../pages/IndexPage.jsx').default
    }
  ],

  'Elements': [{
      name: 'Button',
      page: require('../pages/Elements/ButtonPage.jsx').default
    }, {
      name: 'Divider',
      page: require('../pages/Elements/DividerPage.jsx').default
    }, {
      name: 'Flag',
      page: require('../pages/Elements/FlagPage.jsx').default
  }, {
      name: 'Icon',
      page: require('../pages/Elements/IconPage.jsx').default
  }
  ],

  'Collections': [],

  'Views': [],

  'Modules': [{
      name: 'Checkbox',
      page: require('../pages/CheckboxPage.jsx').default
    }, {
      name: 'Dropdown',
      page: require('../pages/DropdownPage.jsx').default
    }, {
      name: 'Rating',
      page: require('../pages/RatingPage.jsx').default
    }]
};
