# CSS Selectors

## Simple CSS Selectors
1. **Tag name**: Simplest of the CSS selectors is any HTML tag name.
   Consider the following examples:

```css
p{
  <CSS declaration 1>
}

div{
  <CSS declaration 2>
}

```

`<CSS declaration 1>` will be applied to all `<p>` tags and `<CSS declaration 2>` will be applied to all `<div>` tags.

2. **Tag id**: CSS declaration can be applied to a tag with a specific
   id by using the `#` prefix. For e.g.:

```css
#first{
  <CSS declaration 1>
}

#second{
  <CSS declaration 2>
}
```

`<CSS declaration 1>` will be applied to a tag that has `id='first'` and
`<CSS declaration 2>` will be applied to a tag with `id='second'`.

3. **Class name**: a CSS declaration can be applied to a tags with a
   specific class by using the `.` prefix. Example:


```css
.first{
  <CSS declaration 1>
}

.second{
  <CSS declaration 2>
}
```

`<CSS declaration 1>` will be applied to all tags that have a class `first` and `<CSS declaration 2>` will be applied to all tags with the class name `second`.


## Combining Selectors

Selectors can be combined by using commas (`,`).

For example instead of rewriting the `<CSS declaration>` like this:

```css
#first{
  <CSS declaration>
}

.second{
  <CSS declaration>
}
```

They can be combined like this:

```css
#first, .second{
  <CSS declaration>
}
```

Selectors written without spaces refer to tags that have all applicable
selectors:

For example:

```css
div#first.second{
  <CSS declaration>
}
```

The `<CSS selector>` will be applied to the `<div>` tag that has
`[id='first']` and a class `second`.'

## Advanced CSS Selectors

### Universal selector (`*`):
```css
*{
  <CSS declaration>
}
```

This `<CSS declaration>` will be applied to every tag in the HTML
document.


### Attribute selector (`[attr='value']`)

### Decendent selector 

When selectors are combined with a space in-between it is interpreted as
decendent of elements (from left-to-right):

Example:

```css
div #first .second{
  <CSS declaration>
}
```

This `<CSS declaration>` will be applied to a tag that has a class
`second`, which is a decendent of a tag which has `[id='first']`, which
in itself is a decendent of a `<div>` tag. Note that these tags only
have to be decendent nodes and not strictly child nodes.

### Child selector (`>`)
It is similar to the decendent selector, by now the decendent element
has to be a **direct** decendent -- this selector looks for parent-child
nodes.


Example:

```css
#first > .second{
  <CSS declaration>
}
```

This `<CSS declaration>` will be applied to a tag that has a class
`second`, whose parent is a tag which has `[id='first']`.

### Sibling selector (`~`)
This selector is used to select all sibling (have the same parent) elements.

```css
#first ~ .second{
  <CSS declaration>
}
```

This `<CSS declaration>` will be applied to all tags that has a class
`second`, who have a tag which has `[id='first']` as sibling.

### Adjacent sibling selector (`+`)
This selector is used to select all sibling (have the same parent) elements.

```css
#first + .second{
  <CSS declaration>
}
```

This `<CSS declaration>` will be applied to a single tags that has a class
`second`, which immediately follows a tag with `[id='first']`.






