# Other Concepts

## Cascading Rules
An HTML page is read top-down and hence any CSS included (whether using
`<link>`, `<style>` tag or `style` attribute is also read in that order.
If properties are redefined, then the values are *cascaded*, i.e the
last encountered value is the one applied.

## Vendor Prefixes

Certain browsers implement experimental CSS properties and they have a
browser specific vendor prefix.

```css
-webkit-transform: scale(2); // For Safari and Chrome
-ms-transform: scale(2);  // For Internet Explorer
-moz-transform: scale(2); // For Firefox
```

Sometimes these experimental properties get adopted into CSS and then
the vendor prefix gets dropped.


```css
transform: scale(2); // For all browsers
```

## Combining property-value Pairs

Certain hyphenated CSS properties can be combined into one. For example:

```css
margin-top: 10px;
margin-right: auto;
margin-bottom: 20px;
margin-left: auto;

border-width: 1px;
border-style: dotted;
border-color: red;
```
can be combined as:

```css
margin: 10px auto 20px auto;

border: 1px dotted red;
```


Other examples include `background`, `padding`, `list-style`,
`text-decoration`, `font` etc.
