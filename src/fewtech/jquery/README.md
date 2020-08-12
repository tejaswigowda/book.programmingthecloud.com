# jQuery

jQuery is known as the syntactic-sugar for JavaScript. This means you
can write valid JavaScript without having to learn the full syntax of
JavaScript. jQuery is a JS library and hence all jQuery written is JS,
but not the other way around.

## Including jQuery
The jQuery library can be included either using a content delivery
network (CDN) or via downloading and linking the jQuery JS file.

### Via CDN
Include the following into the `<head>` of your html document

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 
```

### Via local copy

- Download jQuery from this link:
<https://code.jquery.com/jquery-3.5.1.min.js>

- Add the downloaded file to your project folder.

- Add this `<script>` tag into your document `<head>`.
```html
<script src="jquery-3.5.1.min.js"></script> 
```


## The `$()` function
jQuery implements the dollar function. The arguments for this function
is any valid CSS selector. This makes using jQuery intuitive for
designers who are familiar with CSS.

```js
$("<CSS selector>")
``` 

## Other jQuery Functions
The `$()` function in itself is not very useful. After selecting a group
of tags (using CSS selectors), we need to *do something* on these tags.
jQuery provides a variety of functions that do something with those
tags. 

We now look at some examples:

### `fadeOut()/fadeIn()`

Consider the following example

```html
<div id='fadeEg' style='height:100px; width:100px;background:red'></div>
<button onclick='$("#fadeEg").fadeOut()'>Fade Out</button>
<button onclick='$("#fadeEg").fadeIn()'>Fade In</button>
```
<div id='fadeEg' style='height:100px; width:100px;background:red'></div>
<button onclick='$("#fadeEg").fadeOut()'>Fade Out</button>
<button onclick='$("#fadeEg").fadeIn()'>Fade In</button>

The `<div id='fadeEg'>` can be hidden or shown when the button is
clicked. The `onclick` event triggers the jQuery written as the
attribute value.

The duration of fadeIn/fadeOut (in milli-seconds) can also be specified as the argument for
these functions. e.g.:


```html
<div id='fadeEg1' style='height:100px; width:100px;background:red'></div>
<button onclick='$("#fadeEg1").fadeOut(1000)'>Fade Out</button>
<button onclick='$("#fadeEg1").fadeIn(2500)'>Fade In</button>
```
<div id='fadeEg1' style='height:100px; width:100px;background:red'></div>
<button onclick='$("#fadeEg1").fadeOut(1000)'>Fade Out</button>
<button onclick='$("#fadeEg1").fadeIn(2500)'>Fade In</button>


### `css()/animate()`


Following is the list of some basic jQuery functions. Try them out. A
full list can be found here: <https://api.jquery.com/>.

<table>
<thead>
  <tr>
    <th>Function</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><code>hide()</code></td>
    <td>Hide the selected tags</td>
  </tr>
  <tr>
    <td><code>show()</code></td>
    <td>Show the selected tags</td>
  </tr>
  <tr>
    <td><code>toggle()</code></td>
    <td>Toggle the selected tags</td>
  </tr>
  <tr>
    <td><code>slideUp()</code></td>
    <td>Slide up tag</td>
  </tr>
  <tr>
    <td><code>slideDown()</code></td>
    <td>Slide down tag</td>
  </tr>
  <tr>
    <td><code>slideToggle()</code></td>
    <td>Toggle silde up/down status of tag</td>
  </tr>
  <tr>
    <td><code>hasClass()</code></td>
    <td>Check if selected tag has a class</td>
  </tr>
  <tr>
    <td><code>addClass()</code></td>
    <td>Add class to selected tag</td>
  </tr>
  <tr>
    <td><code>removeClass()</code></td>
    <td>Remove class from selected tag</td>
  </tr>
  <tr>
    <td><code>toggleClass()</code></td>
    <td>Add/remove class</td>
  </tr>
  <tr>
    <td><code>height()</code></td>
    <td>Height of tag</td>
  </tr>
  <tr>
    <td><code>width()</code></td>
    <td>Width of tag</td>
  </tr>
</tbody>
</table>



## Chaining jQuery functions
jQuery functions can be chain linked like so:

```js
$("body").addClass("night").delay(500).removeClass("night");
```

While chaining functions `delay()` (adds delay to the queue of
transitions/animations) and `stop()` (which empties the
transition/animation queue) are very useful.

## Single Page Resume, with jQuery

Improving on where we left off we add *night mode* to our resume. We add
the following new CSS (lines 44-56):

```css
body.dark{
  font-family: courier;
  background: black;
  color: white;
}
body.dark a{
  color: white;
}
body.dark h2,
body.dark tr{
  background: white;
  color: black;
}
```

and makeup for 2 buttons (lines 61,62):

```html
<button onclick='$("body").removeClass("dark")'>Regular</button>
<button onclick='$("body").addClass("dark")'>Dark Mode</button>
```

In order to enable night mode by default we attach an `onload` event
listerner to `<body>` (line 60):

```html
<body onload='$("body").addClass("dark")'>
```

## Full HTML

<iframe style='border:1px dashed;width:
100%;height:400px;background:white'
src='https://www.onlinetool.io/gitoembed/widget?url=https%3A%2F%2Fgithub.com%2Ftejaswigowda%2FPtC-simpleResumeJQ%2Fblob%2Fmaster%2Findex.html'
id=''></iframe>



## Output

<iframe style='border:1px dashed;width:
100%;height:400px;background:white'
class='htmlpreview'
src='https://raw.githack.com/tejaswigowda/PtC-simpleResumeJQ/master/index.html'
id=''></iframe>
