# CSS Values

<div class='notes'>

#### Graceful fallback in CSS
</div>

## CSS Value List

Below is a list of CSS values that can be used with CSS properties[<a
href='../../../bib.html#css-reference-w3schoolscom'>Ref.</a>].

<table>
 <thead>
  <tr>
   <th scope="col"><strong>CSS property</strong></th>
   <th scope="col"><strong>Valid values</strong></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>background</code></td>
   <td>
Can include valid values of the following:

- <code>background-color</code>
- <code>background-image</code>
- <code>background-position</code>
- <code>background-size</code>
- <code>background-repeat</code>
- <code>background-origin</code>
- <code>background-clip</code>
- <code>background-attachment</code>
</td>
  </tr>
  <tr>
   <td><code>background-attachment</code></td>
   <td>

- scroll
- fixed
- local
- initial
- inherit
</td>
  </tr>
  <tr>
   <td>background-color</td>
   <td>Any valid CSS color.</td>
  </tr>
  <tr>
   <td>background-image</td>
   <td>url(<code>/path/to/image.png</code>)</td>
  </tr>
  <tr>
   <td>background-position</td>
   <td>
<table class="w3-table-all notranslate">
  <tbody><tr>
    <th style="width:18%">Value</th>
    <th>Description</th>
  </tr>  
  <tr>
    <td>left top<br>
      left center<br>
      left bottom<br>
      right top<br>
      right center<br>
      right bottom<br>
      center top<br>
      center center<br>
      center bottom</td>
    <td>If you only specify one keyword, the other value will be "center"</td>
  </tr>
  <tr>
    <td><i>x% y%</i></td>
    <td>The first value is the horizontal position and the second
      value is the vertical. The top left corner is 0% 0%.
      The right bottom corner is 100% 100%. If you only specify one
      value, the other value will be 50%. . Default value is: 0% 0%</td>
  </tr>
  <tr>
    <td><i>xpos ypos</i></td>
    <td>The first value&nbsp;is the horizontal position and the second
      value is the vertical. The top left corner is 0 0. Units can be pixels
      (0px 0px) or any other <a href="css_units.asp">CSS units</a>. If you only specify one value, the other value will be 50%. You can mix % and positions</td>

  </tr>
  <tr>
    <td>initial</td>
    <td>Sets this property to its default value. <a href="css_initial.asp">Read about <em>initial</em></a></td>
    </tr>
  <tr>
    <td>inherit</td>
    <td>Inherits this property from its parent element. <a href="css_inherit.asp">Read about <em>inherit</em></a></td>
    </tr>
</tbody></table>
</td>
  </tr>
  <tr>
   <td>background-repeat</td>
   <td>

- repeat
- repeat-x
- repeat-y
- no-repeat
- initial
- inherit
</td>
  </tr>
  <tr>
   <td>border</td>
   <td>border</td>
  </tr>
  <tr>
   <td>border-bottom</td>
   <td>borderBottom</td>
  </tr>
  <tr>
   <td>border-bottom-color</td>
   <td>borderBottomColor</td>
  </tr>
  <tr>
   <td>border-bottom-style</td>
   <td>borderBottomStyle</td>
  </tr>
  <tr>
   <td>border-bottom-width</td>
   <td>borderBottomWidth</td>
  </tr>
  <tr>
   <td>border-color</td>
   <td>borderColor</td>
  </tr>
  <tr>
   <td>border-left</td>
   <td>borderLeft</td>
  </tr>
  <tr>
   <td>border-left-color</td>
   <td>borderLeftColor</td>
  </tr>
  <tr>
   <td>border-left-style</td>
   <td>borderLeftStyle</td>
  </tr>
  <tr>
   <td>border-left-width</td>
   <td>borderLeftWidth</td>
  </tr>
  <tr>
   <td>border-right</td>
   <td>borderRight</td>
  </tr>
  <tr>
   <td>border-right-color</td>
   <td>borderRightColor</td>
  </tr>
  <tr>
   <td>border-right-style</td>
   <td>borderRightStyle</td>
  </tr>
  <tr>
   <td>border-right-width</td>
   <td>borderRightWidth</td>
  </tr>
  <tr>
   <td>border-style</td>
   <td>borderStyle</td>
  </tr>
  <tr>
   <td>border-top</td>
   <td>borderTop</td>
  </tr>
  <tr>
   <td>border-top-color</td>
   <td>borderTopColor</td>
  </tr>
  <tr>
   <td>border-top-style</td>
   <td>borderTopStyle</td>
  </tr>
  <tr>
   <td>border-top-width</td>
   <td>borderTopWidth</td>
  </tr>
  <tr>
   <td>border-width</td>
   <td>borderWidth</td>
  </tr>
  <tr>
   <td>clear</td>
   <td>clear</td>
  </tr>
  <tr>
   <td>clip</td>
   <td>clip</td>
  </tr>
  <tr>
   <td>color</td>
   <td>color</td>
  </tr>
  <tr>
   <td>cursor</td>
   <td>cursor</td>
  </tr>
  <tr>
   <td>display</td>
   <td>display</td>
  </tr>
  <tr>
   <td>filter</td>
   <td>filter</td>
  </tr>
  <tr>
   <td>float</td>
   <td>cssFloat</td>
  </tr>
  <tr>
   <td>font</td>
   <td>font</td>
  </tr>
  <tr>
   <td>font-family</td>
   <td>fontFamily</td>
  </tr>
  <tr>
   <td>font-size</td>
   <td>fontSize</td>
  </tr>
  <tr>
   <td>font-variant</td>
   <td>fontVariant</td>
  </tr>
  <tr>
   <td>font-weight</td>
   <td>fontWeight</td>
  </tr>
  <tr>
   <td>height</td>
   <td>height</td>
  </tr>
  <tr>
   <td>left</td>
   <td>left</td>
  </tr>
  <tr>
   <td>letter-spacing</td>
   <td>letterSpacing</td>
  </tr>
  <tr>
   <td>line-height</td>
   <td>lineHeight</td>
  </tr>
  <tr>
   <td>list-style</td>
   <td>listStyle</td>
  </tr>
  <tr>
   <td>list-style-image</td>
   <td>listStyleImage</td>
  </tr>
  <tr>
   <td>list-style-position</td>
   <td>listStylePosition</td>
  </tr>
  <tr>
   <td>list-style-type</td>
   <td>listStyleType</td>
  </tr>
  <tr>
   <td>margin</td>
   <td>margin</td>
  </tr>
  <tr>
   <td>margin-bottom</td>
   <td>marginBottom</td>
  </tr>
  <tr>
   <td>margin-left</td>
   <td>marginLeft</td>
  </tr>
  <tr>
   <td>margin-right</td>
   <td>marginRight</td>
  </tr>
  <tr>
   <td>margin-top</td>
   <td>marginTop</td>
  </tr>
  <tr>
   <td>overflow</td>
   <td>overflow</td>
  </tr>
  <tr>
   <td>padding</td>
   <td>padding</td>
  </tr>
  <tr>
   <td>padding-bottom</td>
   <td>paddingBottom</td>
  </tr>
  <tr>
   <td>padding-left</td>
   <td>paddingLeft</td>
  </tr>
  <tr>
   <td>padding-right</td>
   <td>paddingRight</td>
  </tr>
  <tr>
   <td>padding-top</td>
   <td>paddingTop</td>
  </tr>
  <tr>
   <td>page-break-after</td>
   <td>pageBreakAfter</td>
  </tr>
  <tr>
   <td>page-break-before</td>
   <td>pageBreakBefore</td>
  </tr>
  <tr>
   <td>position</td>
   <td>position</td>
  </tr>
  <tr>
   <td>stroke-dasharray</td>
   <td>strokeDasharray</td>
  </tr>
  <tr>
   <td>stroke-dashoffset</td>
   <td>strokeDashoffset</td>
  </tr>
  <tr>
   <td>stroke-width</td>
   <td>strokeWidth</td>
  </tr>
  <tr>
   <td>text-align</td>
   <td>textAlign</td>
  </tr>
  <tr>
   <td>text-decoration</td>
   <td>textDecoration</td>
  </tr>
  <tr>
   <td>text-indent</td>
   <td>textIndent</td>
  </tr>
  <tr>
   <td>text-transform</td>
   <td>textTransform</td>
  </tr>
  <tr>
   <td>top</td>
   <td>top</td>
  </tr>
  <tr>
   <td>vertical-align</td>
   <td>verticalAlign</td>
  </tr>
  <tr>
   <td>visibility</td>
   <td>visibility</td>
  </tr>
  <tr>
   <td>width</td>
   <td>width</td>
  </tr>
  <tr>
   <td>z-index</td>
   <td>zIndex</td>
  </tr>
 </tbody>
</table>
