React-Semantify
=============
Integrate Semantic-ui with react components. It depends on Semantic-UI and helps you use with react component.

## Usage

### With Browserify

`npm install react-semantify`

Ex.
```app.jsx
var React = require('react');
var Button = require('react-semantify').Button;

var HelloBox = React.createClass({

  onClick: function () {
    console.log('hello world');
  },

  render: function () {
    return (
      <Button color="red">
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

And then you should include semantic-ui in your browser. Use [cdnjs](https://cdnjs.com/libraries/semantic-ui) or [bower](http://bower.io/)

Use cdnjs
```index.html
<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.0.1/semantic.min.css">
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.2.0/semantic.min.js">
```

Use bower
`bower install semantic-ui`


## Component

- Elements
  + Button
  + Divider
  + Flag
  + Header
  + Icon
  + Image
  + Input
  + Label
  + List
  + Loader
  + Rail
  + Reveal
  + Segment
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
