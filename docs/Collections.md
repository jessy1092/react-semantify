Collections
=============
The collections which interagte Semantic-Ui in react components.

# Breadcrumb
A standard Breadcrumb.

### Example

```html
<Breadcrumb className="examplebreadcrumb">
  <Section>123</Section>
  <Icon className="right chevron divider"></Icon>
  <Section>321</Section>
</Breadcrumb>
```

is equal to 

```html
<div class="ui breadcrumb examplebreadcrumb">
  <div class="section">123</div>
  <i class="icon right chevron divider"></i>
  <div class="section">321</div>
</div>
```

### Properties

- *className*: The className would be part of the `class` attribute.


# Form
A standard Form.

### Example

```html
<Form className="exampleform">
  <Fields className="two">
    <Field>
      <Label>User</Label>
      <Input className="icon">
        <input placeholder="Username" type="text"/>
        <Icon className="user"/>
      </Input>
    </Field>
    <Field>
      <Label>Password</Label>
      <Input className="icon">
        <input placeholder="password" type="password"/>
        <Icon className="lock"/>
      </Input>
    </Field>
  </Fields>
</Form>
```

is equal to 

```html
<div class="ui form exampleform">
  <div class="two fields">
    <div class="field">
      <div class="ui label">User</div>
      <div class="ui input icon">
        <input placeholder="Username" type="text">
        <i class="icon user"></i>
      </div>
    </div>
    <div class="field">
      <div class="ui label">Password</div>
      <div class="ui input icon">
        <input placeholder="password" type="password">
        <i class="icon user"></i>
      </div>
    </div>
  </div>
</div>
```

### Properties

- *className*: The className would be part of the `class` attribute.


# Grid
A standard Grid.

### Example

```html
<Grid className="examplegrid">
  <Column className="four wide"/>
  <Column className="two wide"/>
  <Column className="four wide"/>
  <Column className="six wide"/>
</Grid>
```

is equal to 

```html
<div class="ui grid examplegrid">
  <div class="four wide column"></div>
  <div class="two wide column"></div>
  <div class="four wide column"></div>
  <div class="six wide column"></div>
</div>
```

### Properties

- *className*: The className would be part of the `class` attribute.


# Menu
A standard Menu.

### Example

```html
<Menu className="exampleMenu">
  <Item className="active" type="link">
    <Icon className="home" /> Home
  </Item>
  <Item type="link">
    <Icon className="mail"/> Messages
  </Item>
</Menu>
```

is equal to 

```html
<div class="ui menu examplegrid">
  <a class="active item">
    <i class="home icon"></i> Home
  </a>
  <a class="item">
    <i class="mail icon"></i> Messages
  </a>
</div>
```

### Properties

- *className*: The className would be part of the `class` attribute.
