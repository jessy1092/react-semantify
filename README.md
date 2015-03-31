React-semantify Website
=============
The Document Website. Welcome to contribute and report issue.

## Structure

- client
  + scripts
  + styles
- src
  + actions
  + components
  + constants
  + dispatcher
  + pages
  + stores

## Development

`npm i`

`npm start`

and then open `http://localhost:3000/`

## Add Documents
for [issue #11](https://github.com/jessy1092/react-semantify/issues/11)

1. Create document page in [src/pages](https://github.com/jessy1092/react-semantify/tree/website/src/pages) folder. (The component put in src/components)
2. And modify [RouteConfig.js](https://github.com/jessy1092/react-semantify/blob/website/src/stores/RouteConfig.js#L4-L23)

If anyone want to help or enhance the document, please feel free to pr. 

## Contribute

1. Fork it.
2. Switch to the `website` branch `git checkout website`
3. Create your feature-branch `git checkout -b your-new-feature-branch`
4. Commit your change `git commit -am 'Add new feature'`
5. Push to the branch `git push origin your-new-feature-branch`
6. Create new Pull Request with `website` branch

## Change Log

#### 2015/04/01 v0.2.0
- Update React to v0.13.x

#### 2015/02/23 v0.1.0
- Add RouteConfig for add Documents.
- Add DividerPage, ButtonPage and getting started page.

#### 2015/01/08 v0.0.1
- init
- Using gulp to build simple webserver and livereload

## License

The MIT License (MIT)

Copyright (c) 2015 Lee  < jessy1092@gmail.com >

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
