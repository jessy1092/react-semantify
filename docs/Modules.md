Modules
=============
The modules which interagte Semantic-Ui in react components.

It's pre-release version. You can use module components simply.

ex. Use accordion component.
```html
<Accordion className="example"></Accordion>
```

is equal to

```js
<div class="ui accordion example"></div>
```

### v0.1.1 2014/12/25

Now you can use `init` property in all module components.


# Accordion
A standard Accordion.

### Example

```html
<Accordion className="exampleaccordion" init={true}></Accordion>
```

is equal to 

```html
<div class="ui accordion examplebutton"></div>
```

and call below Sementic-ui init function when element in the `componentDidMount` life cycle.
```js
$('.ui.accordion').accordion();
```

You also can use `init={param}` to transfer parameter.

ex. 
```js
<Accordion init='refresh'></Accordion>
```

will transfer `'refresh'` to init function.

```js
$('.ui.accordion').accordion('refresh');
```

### Properties

- *init*: You can see [Accordion usage](http://semantic-ui.com/modules/accordion.html#/usage) on the Semantic-ui web site.


# Checkbox
A standard Checkbox.

### Example

```html
<Checkbox className="examplecheckbox" init={true}></Checkbox>
```

is equal to 

```html
<div class="ui checkbox examplecheckbox"></div>
```

and call below Sementic-ui init function when element in the `componentDidMount` life cycle.
```js
$('.ui.checkbox').checkbox();
```

You also can use `init={param}` to transfer parameter.

ex. 
```js
<Checkbox init={{uncheckable: false}}></Checkbox>
```

will transfer `{uncheckable: false}` to init function.

```js
$('.ui.checkbox').checkbox({uncheckable: false});
```

### Properties

- *init*: You can see [Checkbox usage](http://semantic-ui.com/modules/checkbox.html#/usage) on the Semantic-ui web site.
- *disabled*: This is a booling type. If `true`, the `disabled` would be part of `class` attribute.
- *readOnly*: This is a booling type. If `true`, the `read-only` would be part of `class` attribute.


# Dimmer
A standard Dimmer.

### Example

```html
<Dimmer className="exampledimmer" init={true}></Dimmer>
```

is equal to 

```html
<div class="ui dimmer exampledimmer"></div>
```

and call below Sementic-ui init function when element in the `componentDidMount` life cycle.
```js
$('.ui.dimmer').dimmer();
```

You also can use `init={param}` to transfer parameter.

ex. 
```js
<Dimmer init={{on: 'hover'}}></Dimmer>
```

will transfer `{{on: 'hover'}}` to init function.

```js
$('.ui.dimmer').dimmer({on: 'hover'});
```

### Properties

- *init*: You can see [Dimmer usage](http://semantic-ui.com/modules/dimmer.html#/usage) on the Semantic-ui web site.
- *disabled*: This is a booling type. If `true`, the `disabled` would be part of `class` attribute.
- *active*: This is a booling type. If `true`, the `active` would be part of `class` attribute.


# Dropdown
A standard Dropdown.

### Example

```html
<Dropdown className="exampledropdown" init={true}></Dropdown>
```

is equal to 

```html
<div class="ui dropdown exampledropdown"></div>
```

and call below Sementic-ui init function when element in the `componentDidMount` life cycle.
```js
$('.ui.dropdown').dropdown();
```

You also can use `init={param}` to transfer parameter.

ex. 
```js
<Dropdown init={{transition: 'drop'}}></Dropdown>
```

will transfer `{{transition: 'drop'}}` to init function.

```js
$('.ui.dropdown').dropdown({transition: 'drop'});
```

### Properties

- *init*: You can see [Dropdown usage](http://semantic-ui.com/modules/dropdown.html#/usage) on the Semantic-ui web site.
- *disabled*: This is a booling type. If `true`, the `disabled` would be part of `class` attribute.
- *active*: This is a booling type. If `true`, the `active` would be part of `class` attribute.
- *error*: This is a booling type. If `true`, the `error` would be part of `class` attribute.

# Modal
A standard Modal.

### Example

```html
<Modal className="examplemodal" init={true}></Modal>
```

is equal to 

```html
<div class="ui modal examplemodal"></div>
```

and call below Sementic-ui init function when element in the `componentDidMount` life cycle.
```js
$('.ui.modal').modal();
```

You also can use `init={param}` to transfer parameter.

ex. 
```js
<Modal init='show'></Modal>
```

will transfer `'show'` to init function.

```js
$('.ui.modal').modal('show');
```

### Properties

- *init*: You can see [Modal usage](http://semantic-ui.com/modules/modal.html#/usage) on the Semantic-ui web site.
- *active*: This is a booling type. If `true`, the `active` would be part of `class` attribute.


# Popup
A standard Popup. This is a Pre-Existing popup usage. The inline popup will comming.

### Example

```html
<Popup className="examplepopup"></Popup>
```

is equal to 

```html
<div class="ui popup examplepopup"></div>
```

and you can trigger popup by jQuery method.
```js
$('.custom.button').popup({
  popup: $('.custom.popup'),
  on: 'click'
});
```
```html
<Button className="custom">Show custom popup</Button>
<Popup className="custom">Hi! I'm custom popup</Popup>
```

### Properties


# Progress
A standard Progress.

### Example

```html
<Progress className="exampleprogress" init={true}></Progress>
```

is equal to 

```html
<div class="ui progress exampleprogress"></div>
```

and call below Sementic-ui init function when element in the `componentDidMount` life cycle.
```js
$('.ui.progress').progress();
```

You also can use `init={param}` to transfer parameter.

ex. 
```js
<Progress init={{percent: 22}}></Progress>
```

will transfer `{percent: 22}` to init function.

```js
$('.ui.progress').progress({percent: 22});
```

### Properties

- *init*: You can see [Progress usage](http://semantic-ui.com/modules/progress.html#/usage) on the Semantic-ui web site.
- *percent*: This is a string type. Use to be a progress `data-percent` state. You can see [Alternate bar labels](http://semantic-ui.com/modules/progress.html#/usage)
- *value*: This is a string type. Use to be a progress `data-value` state. You can see [Alternate bar labels](http://semantic-ui.com/modules/progress.html#/usage)
- *total*: This is a string type. Use to be a progress `data-total` state. You can see [Alternate bar labels](http://semantic-ui.com/modules/progress.html#/usage)
- *active*: This is a booling type. If `true`, the `active` would be part of `class` attribute.
- *success*: This is a booling type. If `true`, the `success` would be part of `class` attribute.
- *warning*: This is a booling type. If `true`, the `warning` would be part of `class` attribute.
- *error*: This is a booling type. If `true`, the `error` would be part of `class` attribute.
- *disabled*: This is a booling type. If `true`, the `disabled` would be part of `class` attribute.
