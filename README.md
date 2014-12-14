React-Semantify
=============
[![Dependency Status][david-dm-image]][david-dm-url]
Integrate Semantic-ui with react components. It depends on Semantic-UI and helps you use with react component.

The components' Docs will coming soon.

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
  + [Button](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#Button)
  + [Divider](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#Divider)
  + [Flag](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#Flag)
  + [Header](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#Header)
  + [Icon](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#Icon)
  + [Image](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#Image)
  + [Input](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#Input)
  + [Label](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#Label)
  + [List](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#List)
  + [Loader](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#Loader)
  + [Rail](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#Rail) - Pre-release
  + [Reveal](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#Reveal) - Pre-release
  + [Segment](https://github.com/jessy1092/react-semantify/blob/master/docs/Elements.md#Reveal)
  + Step

- Collections
  + Breadcrumb
  + Form
  + Grid
  + Comment
  + Feed
  + Item
  + Statistic

- Modules
  + Dimmer
  + Dropdown

### Comming Soon

- Modules
  + Accordin
  + Checkbox
  + Modal
  + Nag
  + Popup
  + Progress
  + Rating
  + Search
  + Shape
  + Sidebar
  + Sticky
  + Tab
  + Transition
  + Video

## Release Notes

[Release Notes](https://github.com/jessy1092/react-semantify/blob/master/RELEASE-NOTES.md)

## Contribute
[![devDependency Status][david-dm-dev-image]][david-dm-dev-url]

1. Fork it.
2. Create your feature-branch `git checkout -b your-new-feature-branch`
3. Commit your change `git commit -am 'Add new feature'`
4. Push to the branch `git push origin your-new-feature-branch`
5. Create new Pull Request with develop branch

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
