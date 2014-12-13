Elements
=============
The elements which interagte Semantic-Ui in react components.

# Button
A standard button.

### Example

```html
<Button className="examplebutton" color="red" onClick={this._onClick}></Button>
```

is equal to 

```html
<div class="ui Button red examplebutton"></div>
```

and register the function(this._onClick) on click event.


You also can write like this:
```html
<Button className="red examplebutton" onClick={this._onClick}></Button>
```

### Properties

- *className*: The className would be part of the `class` attribute.
- *color*: The color is equal to Semantic-Ui color.
- *onClick*: The click event.
