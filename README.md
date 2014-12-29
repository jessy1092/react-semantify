React-Semantify
=============
[![Dependency Status][david-dm-image]][david-dm-url]

Integrate Semantic-ui with react components. It depends on Semantic-UI and helps you use with react component.

[The components' Docs](https://github.com/jessy1092/react-semantify/blob/master/docs)

## Usage

### In Browser

[Download js file][react-semantify-url]

And then include in your html.

You should include dependency.
- jQuery
- Semantic-Ui
- React with Addons
- JSXTransformer (If you write jsx in browser.)

Ex. Write a simple button in browser.
```html
<script src="//cdnjs.cloudflare.com/ajax/libs/react/0.12.1/react-with-addons.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/react/0.12.1/JSXTransformer.js"></script>
<script src="http://code.jquery.com/jquery-1.10.0.min.js"></script>
<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.2.0/semantic.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.2.0/semantic.min.js"></script>
<script src="/vendors/react-semantify.js"></script>
```

```js
<div id="content"></div>
<script type="text/jsx">
  var Button = Semantify.Button;

  var HelloBox = React.createClass({

    _onClick: function () {
      console.log('hello world!');
    },

    render: function () {
      return (
        <Button color="red" onClick={this._onClick}>
          Hello World!
        </Button>
      );
    }
  });

  React.render(
    <HelloBox />,
    document.getElementById('content')
  );
</script>
```

### With Browserify

```sh
npm install react-semantify
```

Ex.
```js
var React = require('react');
var Button = require('react-semantify').Button;

var HelloBox = React.createClass({

  _onClick: function () {
    console.log('hello world!');
  },

  render: function () {
    return (
      <Button color="red" onClick={this._onClick}>
        Hello World!
      </Button>
    );
  }
});

React.render(
  <HelloBox />,
  document.getElementById('content')
);
```

And then you should include `jQuery` and `semantic-ui` in your browser. 

Use [cdnjs][cdnjs-url] or [bower][bower-url]

Use cdnjs
```html
<script type="text/javascript" src="//code.jquery.com/jquery-1.10.0.min.js">
<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.2.0/semantic.min.css">
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.2.0/semantic.min.js">
```

Use bower
```sh
bower install semantic-ui
```


## Component

- [Elements](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md)
  + [Button](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#button)
  + [Divider](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#divider)
  + [Flag](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#flag)
  + [Header](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#header)
  + [Icon](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#icon)
  + [Image](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#image)
  + [Input](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#input) - Pre-release
  + [Label](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#label)
  + [List](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#list)
  + [Loader](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#loader)
  + [Rail](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#rail) - Pre-release
  + [Reveal](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#reveal) - Pre-release
  + [Segment](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#segment)
  + [Steps/Step](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#stepsstep) - Pre-release

- [Collections](https://github.com/jessy1092/react-semantify/blob/master/docs/Collections.md)
  + [Breadcrumb](https://github.com/jessy1092/react-semantify/blob/master/docs/Collections.md#breadcrumb) - Pre-release
  + [Form](https://github.com/jessy1092/react-semantify/blob/master/docs/Collections.md#stepsstep) - Pre-release
  + [Grid](https://github.com/jessy1092/react-semantify/blob/master/docs/Collections.md#grid) - Pre-release
  + [Menu](https://github.com/jessy1092/react-semantify/blob/master/docs/Collections.md#menu) - Pre-release
  + [Message](https://github.com/jessy1092/react-semantify/blob/master/docs/Collections.md#message) - Pre-release
  + [Table](https://github.com/jessy1092/react-semantify/blob/master/docs/Collections.md#table) - Pre-release

- [Views](https://github.com/jessy1092/react-semantify/blob/master/docs/Views.md)
  + [Advertisement](https://github.com/jessy1092/react-semantify/blob/master/docs/Views.md#advertisement) - Pre-release
  + [Card](https://github.com/jessy1092/react-semantify/blob/master/docs/Views.md#card) - Pre-release
  + [Comments/Comment](https://github.com/jessy1092/react-semantify/blob/master/docs/Views.md#commentscomment) - Pre-release
  + [Feed](https://github.com/jessy1092/react-semantify/blob/master/docs/Views.md#feed) - Pre-release
  + [Items/Item](https://github.com/jessy1092/react-semantify/blob/master/docs/Views.md#itemsitem) - Pre-release
  + [Statistic](https://github.com/jessy1092/react-semantify/blob/master/docs/Views.md#statistic) - Pre-release

- [Modules](https://github.com/jessy1092/react-semantify/blob/master/docs/Modules.md)
  + [Accordion](https://github.com/jessy1092/react-semantify/blob/master/docs/Modules.md#accordion) - Pre-release
  + [Checkbox](https://github.com/jessy1092/react-semantify/blob/master/docs/Modules.md#checkbox) - Pre-release
  + [Dimmer](https://github.com/jessy1092/react-semantify/blob/master/docs/Modules.md#dimmer) - Pre-release
  + [Dropdown](https://github.com/jessy1092/react-semantify/blob/master/docs/Modules.md#dropdown) - Pre-release
  + [Modal](https://github.com/jessy1092/react-semantify/blob/master/docs/Modules.md#modal) - Pre-release
  + [Popup](https://github.com/jessy1092/react-semantify/blob/master/docs/Modules.md#popup) - Pre-release
  + [Progress](https://github.com/jessy1092/react-semantify/blob/master/docs/Modules.md#progress) - Pre-release
  + Rating - Pre-release
  + Search - Pre-release
  + Shape - Pre-release
  + Sidebar - Pre-release
  + Sticky - Pre-release
  + Tab - Pre-release

### Comming Soon
Wait Semantic-UI Release.

- Modules
  + Nag
  + Video

## Release Notes

[Release Notes](https://github.com/jessy1092/react-semantify/blob/master/RELEASE-NOTES.md)

## Contribute
[![devDependency Status][david-dm-dev-image]][david-dm-dev-url]

1. Fork it.
2. Create your feature-branch `git checkout -b your-new-feature-branch`
3. Commit your change `git commit -am 'Add new feature'`
4. Push to the branch `git push origin your-new-feature-branch`
5. Create new Pull Request with `develop` branch

## License

The MIT License (MIT)

Copyright (c) 2014 Lee  < jessy1092@gmail.com >

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[bower-url]: http://bower.io/
[cdnjs-url]: https://cdnjs.com/libraries/semantic-ui
[react-semantify-url]: https://github.com/jessy1092/react-semantify/releases

[david-dm-image]: https://david-dm.org/jessy1092/react-semantify.svg?style=flat-square
[david-dm-url]: https://david-dm.org/jessy1092/react-semantify
[david-dm-dev-image]: https://david-dm.org/jessy1092/react-semantify/dev-status.svg?style=flat-square
[david-dm-dev-url]: https://david-dm.org/jessy1092/react-semantify#info=devDependencies
