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
<Menu className="examplemenu">
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
<div class="ui menu examplemenu">
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


# Message
A standard Message.

### Example

```html
<Message className="icon examplemessage">
  <Icon className="notched circle loading" />
  <Content>
    <Header>Hello World</Header>
    <p>This is a test component.</p>
  </Content>
</Message>
```

is equal to 

```html
<div class="ui icon message examplemessage">
  <i class="otched circle loading icon"></i>
  <div class="content">
    <div class="header">Hello World</div>
    <p>This is a test component.</p>
  </div>
</div>
```

### Properties

- *className*: The className would be part of the `class` attribute.


# Table
A standard Table.

### Example

```html
<Table className="exampletable">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5566</td>
      <td>Lee</td>
    </tr>
  </tbody>
</Table>
```

is equal to 

```html
<table class="ui table exampletable">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>5566</th>
      <th>Lee</th>
    </tr>
  </tbody>
</table>
```

### Properties

- *className*: The className would be part of the `class` attribute.
