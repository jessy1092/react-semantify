"use strict";

export default {
  'Basic': [{
      name: 'Getting Started',
      page: require('../pages/IndexPage.jsx')
    }
  ],

  'Elements': [{
      name: 'Button',
      page: require('../pages/Elements/ButtonPage.jsx')
    }, {
      name: 'Divider',
      page: require('../pages/Elements/DividerPage.jsx')
    }, {
      name: 'Flag',
      page: require('../pages/Elements/FlagPage.jsx')
  }, {
      name: 'Icon',
      page: require('../pages/Elements/IconPage.jsx')
  }
  ],

  'Collections': [],

  'Views': [],

  'Modules': [{
      name: 'Checkbox',
      page: require('../pages/CheckboxPage.jsx')
    }, {
      name: 'Dropdown',
      page: require('../pages/DropdownPage.jsx')
    }, {
      name: 'Rating',
      page: require('../pages/RatingPage.jsx')
    }]
};
