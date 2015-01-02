Elements
=============
The elements which interagte Semantic-Ui in react components.

# Button
A standard Button.

### Example

```html
<Button className="examplebutton" color="red" onClick={this._onClick} disabled={true}></Button>
```

You also can write like this:
```html
<Button className="red disabled examplebutton" onClick={this._onClick}></Button>
```

are equal to 

```html
<div class="ui button red disabled examplebutton"></div>
```

and register the function(this._onClick) on click event.

### Properties

- *className*: The className would be part of the `class` attribute.
- *color*: The color is equal to Semantic-Ui color.
- *onClick*: The click event.
- *active*: This is a booling type. If `true`, the `active` would be part of `class` attribute.
- *disabled*: This is a booling type. If `true`, the `disabled` would be part of `class` attribute.
- *loading*: This is a booling type. If `true`, the `loading` would be part of `class` attribute.


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
<Header className="exampleheader" color="red" type="div" onClick={this._onClick} disabled={true}></Header>
```

You also can write like this:
```html
<Header className="red disabled exampleheader" type="div" onClick={this._onClick}></Header>
```

are equal to 

```html
<div class="ui header red disabled exampleheader"></div>
```

and register the function(this._onClick) on click event.

### Properties

- *className*: The className would be part of the `class` attribute.
- *color*: The color is equal to Semantic-Ui color.
- *type*: Generate the html tag. `type="div"` would be `<div><\div>`. `type="link"` would be `<a><\a>`
- *onClick*: The click event.
- *disabled*: This is a booling type. If `true`, the `disabled` would be part of `class` attribute.


# Icon
A standard Icon.

### Example

```html
<Icon className="cloud" color="red" onClick={this._onClick} disabled={true}></Icon>
```

You also can write like this:
```html
<Icon className="red disabled cloud" onClick={this._onClick}></Icon>
```

are equal to 

```html
<i class="icon red disabled cloud"></i>
```

and register the function(this._onClick) on click event.

### Properties

- *className*: The className would be part of the `class` attribute.
- *color*: The color is equal to Semantic-Ui color.
- *onClick*: The click event.
- *disabled*: This is a booling type. If `true`, the `disabled` would be part of `class` attribute.
- *loading*: This is a booling type. If `true`, the `loading` would be part of `class` attribute.


# Image
A standard Image.

### Example

```html
<Image className="medium" src="./example/example.jpg" disabled={true}></Image>
```

is equal to 

```html
<img class="ui image medium disabled" src="./example/example.jpg"></img>
```

### Properties

- *className*: The className would be part of the `class` attribute.
- *src*: The image's source file.
- *disabled*: This is a booling type. If `true`, the `disabled` would be part of `class` attribute.


# Input
A standard Input.

### Example

```html
<Input className="exampleinput" error={true} placeholder="Search..." type="text"></Input>
```

is equal to (If you didn't have children component, it would auto generate `<input>` tag.)

```html
<div class="ui input error exampleinput">
  <input placeholder="Search..." type="text"></input>>
</div>
```

### Properties

- *className*: The className would be part of the `class` attribute.
- *loading*: This is a booling type. If `true`, the `loading` would be part of `class` attribute.
- *focus*: This is a booling type. If `true`, the `focus` would be part of `class` attribute.
- *error*: This is a booling type. If `true`, the `error` would be part of `class` attribute.


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
<Loader className="exampleloader" disabled={true}></Loader>
```

is equal to 

```html
<div class="ui loader disabled exampleloader"></div>
```

### Properties

- *className*: The className would be part of the `class` attribute.
- *active*: This is a booling type. If `true`, the `active` would be part of `class` attribute.
- *disabled*: This is a booling type. If `true`, the `disabled` would be part of `class` attribute.


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
<Reveal className="examplereveal" disabled={true}></Reveal>
```

is equal to 

```html
<div class="ui reveal disabled examplereveal"></div>
```

### Properties

- *className*: The className would be part of the `class` attribute.
- *disabled*: This is a booling type. If `true`, the `disabled` would be part of `class` attribute.


# Segment
A standard Segment.

### Example

```html
<Segment className="examplesegment" color="red" disabled={true}></Segment>
```

You also can write like this:
```html
<Segment className="red disabled examplesegment"></Segment>
```

are equal to 

```html
<div class="ui segment red disabled examplesegment"></div>
```

and register the function(this._onClick) on click event.

### Properties

- *className*: The className would be part of the `class` attribute.
- *color*: The color is equal to Semantic-Ui color.
- *onClick*: The click event.
- *disabled*: This is a booling type. If `true`, the `disabled` would be part of `class` attribute.
- *loading*: This is a booling type. If `true`, the `loading` would be part of `class` attribute.


# Steps/Step
A standard Steps/Step.

### Example

```html
<Steps className="examplestep">
  <Step disabled={true}>123</Step>
</Steps>
```

is equal to 

```html
<div class="ui steps examplestep">
  <div class="step disabled">123</div>
</div>
```

### Properties

- *className*: The className would be part of the `class` attribute.
- *active*: This is a booling type. If `true`, the `active` would be part of `class` attribute.
- *disabled*: This is a booling type. If `true`, the `disabled` would be part of `class` attribute.
- *completed*: This is a booling type. If `true`, the `completed` would be part of `class` attribute.
