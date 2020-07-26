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

For example instead of rewriting the CSS declaration like this:

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


## Advanced CSS Selectors

### Universal selector (`*`):
```css
*{
  <CSS declaration>
}
```

This `<CSS declaration>` will be applied to all tags.



