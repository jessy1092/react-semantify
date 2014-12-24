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
<div init={'refresh'}></div>
```

will transfer `'refresh'` to init function.

```js
$('.ui.accordion').accordion('refresh');
```

### Properties
