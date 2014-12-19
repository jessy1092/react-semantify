Views
=============
The views which interagte Semantic-Ui in react components.

# Advertisement
A standard Advertisement.

### Example

```html
<Ad className="medium rectangle">
  <!-- Ad Code Here !-->
</Ad>
```

is equal to 

```html
<div class="ui ad medium rectangle">
  <!-- Ad Code Here !-->
</div>
```

### Properties

- *className*: The className would be part of the `class` attribute.


# Card
A standard Card.

### Example

```html
<Card className="examplecard">
  <Content>
    <Header>Hello World</Header>
    <div className="meta">
      <span className="time">1 days ago</span>
      <span className="category">Test</span>
    </div>
  </Content>
</Card>
```

is equal to 

```html
<div class="ui card examplecard">
  <div class="content">
    <div class="header">Hello World</div>
    <div class="meta">
      <span class="time">1 days ago</span>
      <span class="category">Test</span>
    </div>
  </div>
</div>
```

### Properties

- *className*: The className would be part of the `class` attribute.


## Comments/Comment
A standard Comments.

### Example

```html
<Comments className="examplecomments">
  <Comment>
    <a className="avatar">
      <Image src="./example/example.jpg" />
    </a>
    <Content>
      <a className="author">Lee</a>
    </Content>
  </Comment>
</Comments>
```

is equal to 

```html
<div class="ui Comments examplecomments">
  <div class="Comment">
    <a class="avatar">
      <img class="ui image" src="./example/example.jpg"></img>
    </a>
    <div class="content">
      <a class="author">Lee</a>
    </div>
  </div>
</div>
```

### Properties

- *className*: The className would be part of the `class` attribute.


## Feed
A standard Feed.

### Example

```html
<Feed className="examplefeed">
  <div className="event">
    <Label>
      <Image src="./example/example.jpg" />
    </Label>
    <Content>
      I said hello.
    </Content>
  </div>
</Feed>
```

is equal to 

```html
<div class="ui feed examplefeed">
  <div class="event">
    <div class="ui label">
      <img class="ui image" src="./example/example.jpg"></img>
    </div>
    <div class="content">
      I said hello.
    </div>
  </div>
</div>
```

### Properties

- *className*: The className would be part of the `class` attribute.


## Items/Item
A standard Items.

### Example

```html
<Items className="exampleitems">
  <Item>
    <Content>
      <Header>The Best Thing</Header>
      <div className="description">Nothing</div>
    </Content>
  </Item>
</Items>
```

is equal to 

```html
<div class="ui items exampleitems">
  <div class="item">
    <div class="content">
      <div class="header">The Best Thing</div>
      <div class="description">Nothing</div>
    </div>
  </div>
</div>
```

### Properties

- *className*: The className would be part of the `class` attribute.


## Statistic
A standard Statistic.

### Example

```html
<Statistic className="examplestatistic">
  <div className="value">22</div>
  <Lable>Breeds of Dog</Lable>
</Statistic>
```

is equal to 

```html
<div class="ui statistic examplestatistic">
  <div class="value">22</div>
  <div class="ui label">Breeds of Dog</div>
</div>
```

### Properties

- *className*: The className would be part of the `class` attribute.
