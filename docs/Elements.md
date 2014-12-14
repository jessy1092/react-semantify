Elements
=============
The elements which interagte Semantic-Ui in react components.

# Button
A standard Button.

### Example

```html
<Button className="examplebutton" color="red" onClick={this._onClick}></Button>
```

You also can write like this:
```html
<Button className="red examplebutton" onClick={this._onClick}></Button>
```

are equal to 

```html
<div class="ui button red examplebutton"></div>
```

and register the function(this._onClick) on click event.

### Properties

- *className*: The className would be part of the `class` attribute.
- *color*: The color is equal to Semantic-Ui color.
- *onClick*: The click event.


# Divider
A standard Divider.

### Example

```html
<Divider className="exampledivider"></Divider>
```

is equal to 

```html
<div class="ui divider exampledivider"></div>
```

### Properties

- *className*: The className would be part of the `class` attribute.


# Flag
A standard Flag.

### Example

```html
<Flag className="tw" onClick={this._onClick}></Flag>
```

is equal to 

```html
<i class="flag tw"></i>
```

and register the function(this._onClick) on click event.

### Properties

- *className*: The className would be part of the `class` attribute.
- *onClick*: The click event.


# Header
A standard Header.

### Example

```html
<Header className="exampleheader" color="red" type="div" onClick={this._onClick}></Header>
```

You also can write like this:
```html
<Header className="red exampleheader" type="div" onClick={this._onClick}></Header>
```

are equal to 

```html
<div class="ui header red exampleheader"></div>
```

and register the function(this._onClick) on click event.

### Properties

- *className*: The className would be part of the `class` attribute.
- *color*: The color is equal to Semantic-Ui color.
- *type*: Generate the html tag. `type="div"` would be `<div><\div>`. `type="link"` would be `<a><\a>`
- *onClick*: The click event.


# Icon
A standard Icon.

### Example

```html
<Icon className="cloud" color="red" onClick={this._onClick}></Icon>
```

You also can write like this:
```html
<Icon className="red cloud" onClick={this._onClick}></Icon>
```

are equal to 

```html
<i class="icon red cloud"></i>
```

and register the function(this._onClick) on click event.

### Properties

- *className*: The className would be part of the `class` attribute.
- *color*: The color is equal to Semantic-Ui color.
- *onClick*: The click event.


# Image
A standard Image.

### Example

```html
<Image className="medium" src="./example/example.jpg"></Image>
```

is equal to 

```html
<img class="ui image medium" src="./example/example.jpg"></img>
```

### Properties

- *className*: The className would be part of the `class` attribute.
- *src*: The image's source file.


# Input
A standard Input.

### Example

```html
<Input className="exampleinput"></Input>
```

is equal to 

```html
<div class="ui input exampleinput"></div>
```

### Properties

- *className*: The className would be part of the `class` attribute.


# Label
A standard Label.

### Example

```html
<Label className="examplelabel" color="red" type="div"></Label>
```

You also can write like this:
```html
<Label className="red examplelabel" type="div"></Label>
```

are equal to 

```html
<div class="ui label red examplelabel"></div>
```

and register the function(this._onClick) on click event.

### Properties

- *className*: The className would be part of the `class` attribute.
- *color*: The color is equal to Semantic-Ui color.
- *type*: Generate the html tag. `type="div"` would be `<div><\div>`. `type="link"` would be `<a><\a>`
- *onClick*: The click event.


# List
A standard List.

### Example

```html
<List className="examplelist"></List>
```

is equal to 

```html
<div class="ui list examplelist"></div>
```

### Properties

- *className*: The className would be part of the `class` attribute.


# Loader
A standard Loader.

### Example

```html
<Loader className="exampleloader"></Loader>
```

is equal to 

```html
<div class="ui loader exampleloader"></div>
```

### Properties

- *className*: The className would be part of the `class` attribute.


# Rail
A standard Rail.

### Example

```html
<Rail className="examplerail"></Rail>
```

is equal to 

```html
<div class="ui rail examplerail"></div>
```

### Properties

- *className*: The className would be part of the `class` attribute.


# Reveal
A standard Reveal.

### Example

```html
<Reveal className="examplereveal"></Reveal>
```

is equal to 

```html
<div class="ui reveal examplereveal"></div>
```

### Properties

- *className*: The className would be part of the `class` attribute.
