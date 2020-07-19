# Other Concepts

## Standalone Tags
HTML tags can be *nested* and this the HTML document has a tree
structure. The root of this tree is the `<html>` tag whose child nodes
are `<head>` and `<body>`. The document then branches out into different
tags. Most tags can have child nodes, however there are a few exceptions
to this. Certain tags are *standalone* i.e. they cannot have chhild
nodes. Examples of thuch tags are:

- `<img>`
- `<hr>`
- `<input>`
- `<textarea>`

These tags do not need the end tags (like `</img>`, `</hr>` etc.) since
they cannot have content (child nodes).


## Viewport

The `<body>` of the html page renders the `window`, which is the entire
page. However with the advent of mobile devices the contents of the
window can be panned and zoomed. The content (part of the window) that
is now vidble to the user is called the `viewport`.

 <img style="display:block;margin:auto" src='../../../imgs/viewport.png'>    
 <figcaption> Fig: 1.2.3.1 Window v/s Viewport</figcaption>               


In the interest of reposive design it makes sense to make the window and
the viewport the same, so we can proceed with web design using only one
size canvas. This can be done by adding the following `<meta>` tag
within the `<head>` of the HTML document.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## `<style>` and `<script>` Tags


## Linking External Files

## Loading Sequence
