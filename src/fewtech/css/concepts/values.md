# CSS Values

Below is a list of CSS values that can be used with CSS properties[<a
href='../../../bib.html#css-reference-w3schoolscom'>Ref.</a>].

<table class="standard-table">
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
   <td>Any valid <code>CSS color</code><a
href='./values.html#supicolorisup-css-color'><sup><i><b>color</b></i></sup></a>.</td>
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
    <td>The first value is the horizontal position and the second
      value is the vertical. The top left corner is 0 0. Units can be pixels
      (0px 0px) or any other <code>CSS length</code><a href='./values.html#supiblenbisup-css-length'><sup><i><b>len</b></i></sup><a>. If you only specify one value, the other value will be 50%. You can mix % and positions</td>

  </tr>
  <tr>
    <td>initial</td>
    <td>Sets this property to its default value.</td>
    </tr>
  <tr>
    <td>inherit</td>
    <td>Inherits this property from its parent element. </td>
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
   <td>
Can include valid values of the following:

- <code>border-width</code>
- <code>border-style</code> (required)
- <code>border-color</code>
</td>
  </tr>
  <tr>
   <td>border-color</td>
   <td>Any valid <code>CSS color</code><a
href='./values.html#supicolorisup-css-color'><sup><i><b>color</b></i></sup></a>.</td>
  </tr>
  <tr>
   <td>border-style</td>
   <td>

- none
- hidden
- dotted
- dashed
- solid
- double
- groove
- ridge
- inset
- outset
- initial
- inherit
</td>
  </tr>
  <tr>
   <td>border-width</td>
   <td>

- medium
- thin
- thick
- <code>CSS length</code><a href='./values.html#supiblenbisup-css-length'><sup><i><b>len</b></i></sup><a>
- initial
- inherit
</td>
  </tr>
  <tr>
   <td>clear</td>
   <td>

- none
- left
- right
- both
- initial
- inherit
</td>
  </tr>
  <tr>
   <td>clip</td>
   <td>

- auto
- shape <code>rect (top, right, bottom, left)</code>
- initial
- inherit

</td>
  </tr>
  <tr>
   <td>color</td>
   <td>Any valid <code>CSS color</code><a
href='./values.html#supicolorisup-css-color'><sup><i><b>color</b></i></sup></a>.</td>
  </tr>
  <tr>
   <td>cursor</td>
   <td>

- alias
- all-scroll
- auto
- cell
- context-menu
- col-resize
- copy
- crosshair
- default
- e-resize
- ew-resize
- grab
- grabbing
- help
- move
- n-resize
- ne-resize
- nesw-resize
- ns-resize
- nw-resize
- nwse-resize
- no-drop
- none
- not-allowed
- pointer
- progress
- row-resize
- s-resize
- se-resize
- sw-resize
- text
- URL
- vertical-text
- w-resize
- wait
- zoom-in
- zoom-out
- initial
- inherit
</td>
  </tr>
  <tr>
   <td>display</td>
   <td>

- inline
- block
- contents
- flex
- grid
- inline-block
- inline-flex
- inline-grid
- inline-table
- list-item
- run-in
- table
- table-caption
- table-column-group
- table-header-group
- table-footer-group
- table-row-group
- table-cell
- table-column
- table-row
- none
- initial
- inherit
</td>
  </tr>
  <tr>
   <td>filter</td>
   <td>

none 
- blur(<code>px</code>) 
- brightness(<code>%</code>) 
- contrast(<code>%</code>) 
- drop-shadow(<code>h-offset v-offset blur spread color</code>) 
- grayscale(<code>%</code>) 
- hue-rotate(<code>deg</code>) 
- invert(<code>%</code>) 
- opacity(<code>%</code>) 
- saturate(<code>%</code>) 
- sepia(<code>%</code>) 
- url(<code>/path/to/image.png</code>)

(multiple values can be combined delimitted by spaces)
</td>
  </tr>
  <tr>
   <td>float</td>
   <td>

- none
- left
- right
- initial
- inherit
</td>
  </tr>
  <tr>
   <td>font</td>
   <td>
Can include valid values of the following:

- <code>font-style</code>
- <code>font-variant</code>
- <code>font-weight</code>
- <code>font-size/line-height</code>
- <code>font-family</code>

</td>
  </tr>
  <tr>
   <td>font-family</td>
   <td>

- family-name (e.g.: Ariel, Georgia, Times New Roman etc.)
- initial
- inherit
</td>
  </tr>
  <tr>
   <td>font-size</td>
   <td>

- medium
- xx-small
- x-small
- small
- large
- x-large
- xx-large
- smaller
- larger
- <code>CSS length</code><a href='./values.html#supiblenbisup-css-length'><sup><i><b>len</b></i></sup><a>
- initial
- inherit

</td>
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

<div class='notes'>

#### <sup><i><b>len</b></i></sup> <code>CSS Length</code>
[<a
href='../../../bib.html#css-units-w3schoolscom'> Ref.</a>]
<table class="w3-table-all notranslate">
  <tbody><tr>
    <th style="width:12%">Unit</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>cm</td>
    <td>centimeters
    </td>
  </tr>
    <tr>
    <td>mm</td>
    <td>millimeters
    </td>
    </tr>
  <tr>
    <td>in</td>
    <td>inches (1in = 96px = 2.54cm)
    </td>
  </tr>
    <tr>
    <td>px</td>
    <td>pixels (1px = 1/96th of 1in)
    </td>
    </tr>
  <tr>
    <td>pt</td>
    <td>points (1pt = 1/72 of 1in)
    </td>
  </tr>
  <tr>
    <td>pc</td>
    <td>picas (1pc = 12 pt)
    </td>
  </tr>
  <tr>
    <td>em</td>
    <td>Relative to the font-size of the element (2em means 2 times the size of the current font)</td>
  </tr>
  <tr>
    <td>ex</td>
    <td>Relative to the x-height of the current font (rarely used)</td>
  </tr>
  <tr>
    <td>ch</td>
    <td>Relative to the width of the "0" (zero)</td>
  </tr>
  <tr>
    <td>rem</td>
    <td>Relative to font-size of the root element</td>
  </tr>
  <tr>
    <td>vw</td>
    <td>Relative to 1% of the width of the viewport</td>
  </tr>
  <tr>
    <td>vh</td>
    <td>Relative to 1% of the height of the viewport</td>
  </tr>
  <tr>
    <td>%</td>
    <td>Relative to the parent element</td>
  </tr>
    </tbody></table>

</div>

<div class='notes'>

#### <sup><i>color</i></sup> <code>CSS Color</code>
- Hexadecimal colors
- RGB colors
- RGBA colors
- HSL colors
- HSLA colors
- Predefined/Cross-browser color names [<a href='../../../bib.html#named-colors-and-hex-equivalents--css-tricks-css-tricks'>Ref.</a>]:


<table id="color-table">
<tbody><tr>
<th>Color Name</th>
<th>HEX</th>
<th>Color</th>
</tr>
<tr>
<td>AliceBlue </td>
<td>#F0F8FF</td>
<td style="background: #F0F8FF"> </td>
</tr>
<tr>
<td>AntiqueWhite </td>
<td>#FAEBD7</td>
<td style="background: #FAEBD7"> </td>
</tr>
<tr><td>Aqua </td>
<td>#00FFFF</td>
<td style="background: #00FFFF"> </td>
</tr>
<tr>
<td>Aquamarine </td>
<td>#7FFFD4</td>
<td style="background: #7FFFD4"> </td>
</tr>
<tr>
<td>Azure </td>
<td>#F0FFFF</td>
<td style="background: #F0FFFF"> </td>
</tr>
<tr>
<td>Beige </td>
<td>#F5F5DC</td>
<td style="background: #F5F5DC"> </td>
</tr>
<tr>
<td>Bisque </td>
<td>#FFE4C4</td>
<td style="background: #FFE4C4"> </td>
</tr>
<tr>
<td>Black </td>
<td>#000000</td>
<td style="background: #000000"> </td>
</tr>
<tr>
<td>BlanchedAlmond </td>
<td>#FFEBCD</td>
<td style="background: #FFEBCD"> </td>
</tr>
<tr>
<td>Blue </td>
<td>#0000FF</td>
<td style="background: #0000FF"> </td>
</tr>
<tr>
<td>BlueViolet </td>
<td>#8A2BE2</td>
<td style="background: #8A2BE2"> </td>
</tr>
<tr>
<td>Brown </td>
<td>#A52A2A</td>
<td style="background: #A52A2A"> </td>
</tr>
<tr>
<td>BurlyWood </td>
<td>#DEB887</td>
<td style="background: #DEB887"> </td>
</tr>
<tr>
<td>CadetBlue </td>
<td>#5F9EA0</td>
<td style="background: #5F9EA0"> </td>
</tr>
<tr>
<td>Chartreuse </td>
<td>#7FFF00</td>
<td style="background: #7FFF00"> </td>
</tr>
<tr>
<td>Chocolate </td>
<td>#D2691E</td>
<td style="background: #D2691E"> </td>
</tr>
<tr>
<td>Coral </td>
<td>#FF7F50</td>
<td style="background: #FF7F50"> </td>
</tr>
<tr>
<td>CornflowerBlue </td>
<td>#6495ED</td>
<td style="background: #6495ED"> </td>
</tr>
<tr>
<td>Cornsilk </td>
<td>#FFF8DC</td>
<td style="background: #FFF8DC"> </td>
</tr>
<tr>
<td>Crimson </td>
<td>#DC143C</td>
<td style="background: #DC143C"> </td>
</tr>
<tr>
<td>Cyan </td>
<td>#00FFFF</td>
<td style="background: #00FFFF"> </td>
</tr>
<tr>
<td>DarkBlue </td>
<td>#00008B</td>
<td style="background: #00008B"> </td>
</tr>
<tr>
<td>DarkCyan </td>
<td>#008B8B</td>
<td style="background: #008B8B"> </td>
</tr>
<tr>
<td>DarkGoldenRod </td>
<td>#B8860B</td>
<td style="background: #B8860B"> </td>
</tr>
<tr>
<td>DarkGray </td>
<td>#A9A9A9</td>
<td style="background: #A9A9A9"> </td>
</tr>
<tr>
<td>DarkGrey </td>
<td>#A9A9A9</td>
<td style="background: #A9A9A9"> </td>
</tr>
<tr>
<td>DarkGreen </td>
<td>#006400</td>
<td style="background: #006400"> </td>
</tr>
<tr>
<td>DarkKhaki </td>
<td>#BDB76B</td>
<td style="background: #BDB76B"> </td>
</tr>
<tr>
<td>DarkMagenta </td>
<td>#8B008B</td>
<td style="background: #8B008B"> </td>
</tr>
<tr>
<td>DarkOliveGreen </td>
<td>#556B2F</td>
<td style="background: #556B2F"> </td>
</tr>
<tr>
<td>Darkorange </td>
<td>#FF8C00</td>
<td style="background: #FF8C00"> </td>
</tr>
<tr>
<td>DarkOrchid </td>
<td>#9932CC</td>
<td style="background: #9932CC"> </td>
</tr>
<tr>
<td>DarkRed </td>
<td>#8B0000</td>
<td style="background: #8B0000"> </td>
</tr>
<tr>
<td>DarkSalmon </td>
<td>#E9967A</td>
<td style="background: #E9967A"> </td>
</tr>
<tr>
<td>DarkSeaGreen </td>
<td>#8FBC8F</td>
<td style="background: #8FBC8F"> </td>
</tr>
<tr>
<td>DarkSlateBlue </td>
<td>#483D8B</td>
<td style="background: #483D8B"> </td>
</tr>
<tr>
<td>DarkSlateGray </td>
<td>#2F4F4F</td>
<td style="background: #2F4F4F"> </td>
</tr>
<tr>
<td>DarkSlateGrey </td>
<td>#2F4F4F</td>
<td style="background: #2F4F4F"> </td>
</tr>
<tr>
<td>DarkTurquoise </td>
<td>#00CED1</td>
<td style="background: #00CED1"> </td>
</tr>
<tr>
<td>DarkViolet </td>
<td>#9400D3</td>
<td style="background: #9400D3"> </td>
</tr>
<tr>
<td>DeepPink </td>
<td>#FF1493</td>
<td style="background: #FF1493"> </td>
</tr>
<tr>
<td>DeepSkyBlue </td>
<td>#00BFFF</td>
<td style="background: #00BFFF"> </td>
</tr>
<tr>
<td>DimGray </td>
<td>#696969</td>
<td style="background: #696969"> </td>
</tr>
<tr>
<td>DimGrey </td>
<td>#696969</td>
<td style="background: #696969"> </td>
</tr>
<tr>
<td>DodgerBlue </td>
<td>#1E90FF</td>
<td style="background: #1E90FF"> </td>
</tr>
<tr>
<td>FireBrick </td>
<td>#B22222</td>
<td style="background: #B22222"> </td>
</tr>
<tr>
<td>FloralWhite </td>
<td>#FFFAF0</td>
<td style="background: #FFFAF0"> </td>
</tr>
<tr>
<td>ForestGreen </td>
<td>#228B22</td>
<td style="background: #228B22"> </td>
</tr>
<tr>
<td>Fuchsia </td>
<td>#FF00FF</td>
<td style="background: #FF00FF"> </td>
</tr>
<tr>
<td>Gainsboro </td>
<td>#DCDCDC</td>
<td style="background: #DCDCDC"> </td>
</tr>
<tr>
<td>GhostWhite </td>
<td>#F8F8FF</td>
<td style="background: #F8F8FF"> </td>
</tr>
<tr>
<td>Gold </td>
<td>#FFD700</td>
<td style="background: #FFD700"> </td>
</tr>
<tr>
<td>GoldenRod </td>
<td>#DAA520</td>
<td style="background: #DAA520"> </td>
</tr>
<tr>
<td>Gray </td>
<td>#808080</td>
<td style="background: #808080"> </td>
</tr>
<tr>
<td>Grey </td>
<td>#808080</td>
<td style="background: #808080"> </td>
</tr>
<tr>
<td>Green </td>
<td>#008000</td>
<td style="background: #008000"> </td>
</tr>
<tr>
<td>GreenYellow </td>
<td>#ADFF2F</td>
<td style="background: #ADFF2F"> </td>
</tr>
<tr>
<td>HoneyDew </td>
<td>#F0FFF0</td>
<td style="background: #F0FFF0"> </td>
</tr>
<tr>
<td>HotPink </td>
<td>#FF69B4</td>
<td style="background: #FF69B4"> </td>
</tr>
<tr>
<td>IndianRed  </td>
<td>#CD5C5C</td>
<td style="background: #CD5C5C"> </td>
</tr>
<tr>
<td>Indigo  </td>
<td>#4B0082</td>
<td style="background: #4B0082"> </td>
</tr>
<tr>
<td>Ivory </td>
<td>#FFFFF0</td>
<td style="background: #FFFFF0"> </td>
</tr>
<tr>
<td>Khaki </td>
<td>#F0E68C</td>
<td style="background: #F0E68C"> </td>
</tr>
<tr>
<td>Lavender </td>
<td>#E6E6FA</td>
<td style="background: #E6E6FA"> </td>
</tr>
<tr>
<td>LavenderBlush </td>
<td>#FFF0F5</td>
<td style="background: #FFF0F5"> </td>
</tr>
<tr>
<td>LawnGreen </td>
<td>#7CFC00</td>
<td style="background: #7CFC00"> </td>
</tr>
<tr>
<td>LemonChiffon </td>
<td>#FFFACD</td>
<td style="background: #FFFACD"> </td>
</tr>
<tr>
<td>LightBlue </td>
<td>#ADD8E6</td>
<td style="background: #ADD8E6"> </td>
</tr>
<tr>
<td>LightCoral </td>
<td>#F08080</td>
<td style="background: #F08080"> </td>
</tr>
<tr>
<td>LightCyan </td>
<td>#E0FFFF</td>
<td style="background: #E0FFFF"> </td>
</tr>
<tr>
<td>LightGoldenRodYellow </td>
<td>#FAFAD2</td>
<td style="background: #FAFAD2"> </td>
</tr>
<tr>
<td>LightGray </td>
<td>#D3D3D3</td>
<td style="background: #D3D3D3"> </td>
</tr>
<tr>
<td>LightGrey </td>
<td>#D3D3D3</td>
<td style="background: #D3D3D3"> </td>
</tr>
<tr>
<td>LightGreen </td>
<td>#90EE90</td>
<td style="background: #90EE90"> </td>
</tr>
<tr>
<td>LightPink </td>
<td>#FFB6C1</td>
<td style="background: #FFB6C1"> </td>
</tr>
<tr>
<td>LightSalmon </td>
<td>#FFA07A</td>
<td style="background: #FFA07A"> </td>
</tr>
<tr>
<td>LightSeaGreen </td>
<td>#20B2AA</td>
<td style="background: #20B2AA"> </td>
</tr>
<tr>
<td>LightSkyBlue </td>
<td>#87CEFA</td>
<td style="background: #87CEFA"> </td>
</tr>
<tr>
<td>LightSlateGray </td>
<td>#778899</td>
<td style="background: #778899"> </td>
</tr>
<tr>
<td>LightSlateGrey </td>
<td>#778899</td>
<td style="background: #778899"> </td>
</tr>
<tr>
<td>LightSteelBlue </td>
<td>#B0C4DE</td>
<td style="background: #B0C4DE"> </td>
</tr>
<tr>
<td>LightYellow </td>
<td>#FFFFE0</td>
<td style="background: #FFFFE0"> </td>
</tr>
<tr>
<td>Lime </td>
<td>#00FF00</td>
<td style="background: #00FF00"> </td>
</tr>
<tr>
<td>LimeGreen </td>
<td>#32CD32</td>
<td style="background: #32CD32"> </td>
</tr>
<tr>
<td>Linen </td>
<td>#FAF0E6</td>
<td style="background: #FAF0E6"> </td>
</tr>
<tr>
<td>Magenta </td>
<td>#FF00FF</td>
<td style="background: #FF00FF"> </td>
</tr>
<tr>
<td>Maroon </td>
<td>#800000</td>
<td style="background: #800000"> </td>
</tr>
<tr>
<td>MediumAquaMarine </td>
<td>#66CDAA</td>
<td style="background: #66CDAA"> </td>
</tr>
<tr>
<td>MediumBlue </td>
<td>#0000CD</td>
<td style="background: #0000CD"> </td>
</tr>
<tr>
<td>MediumOrchid </td>
<td>#BA55D3</td>
<td style="background: #BA55D3"> </td>
</tr>
<tr>
<td>MediumPurple </td>
<td>#9370D8</td>
<td style="background: #9370D8"> </td>
</tr>
<tr>
<td>MediumSeaGreen </td>
<td>#3CB371</td>
<td style="background: #3CB371"> </td>
</tr>
<tr>
<td>MediumSlateBlue </td>
<td>#7B68EE</td>
<td style="background: #7B68EE"> </td>
</tr>
<tr>
<td>MediumSpringGreen </td>
<td>#00FA9A</td>
<td style="background: #00FA9A"> </td>
</tr>
<tr>
<td>MediumTurquoise </td>
<td>#48D1CC</td>
<td style="background: #48D1CC"> </td>
</tr>
<tr>
<td>MediumVioletRed </td>
<td>#C71585</td>
<td style="background: #C71585"> </td>
</tr>
<tr>
<td>MidnightBlue </td>
<td>#191970</td>
<td style="background: #191970"> </td>
</tr>
<tr>
<td>MintCream </td>
<td>#F5FFFA</td>
<td style="background: #F5FFFA"> </td>
</tr>
<tr>
<td>MistyRose </td>
<td>#FFE4E1</td>
<td style="background: #FFE4E1"> </td>
</tr>
<tr>
<td>Moccasin </td>
<td>#FFE4B5</td>
<td style="background: #FFE4B5"> </td>
</tr>
<tr>
<td>NavajoWhite </td>
<td>#FFDEAD</td>
<td style="background: #FFDEAD"> </td>
</tr>
<tr>
<td>Navy </td>
<td>#000080</td>
<td style="background: #000080"> </td>
</tr>
<tr>
<td>OldLace </td>
<td>#FDF5E6</td>
<td style="background: #FDF5E6"> </td>
</tr>
<tr>
<td>Olive </td>
<td>#808000</td>
<td style="background: #808000"> </td>
</tr>
<tr>
<td>OliveDrab </td>
<td>#6B8E23</td>
<td style="background: #6B8E23"> </td>
</tr>
<tr>
<td>Orange </td>
<td>#FFA500</td>
<td style="background: #FFA500"> </td>
</tr>
<tr>
<td>OrangeRed </td>
<td>#FF4500</td>
<td style="background: #FF4500"> </td>
</tr>
<tr>
<td>Orchid </td>
<td>#DA70D6</td>
<td style="background: #DA70D6"> </td>
</tr>
<tr>
<td>PaleGoldenRod </td>
<td>#EEE8AA</td>
<td style="background: #EEE8AA"> </td>
</tr>
<tr>
<td>PaleGreen </td>
<td>#98FB98</td>
<td style="background: #98FB98"> </td>
</tr>
<tr>
<td>PaleTurquoise </td>
<td>#AFEEEE</td>
<td style="background: #AFEEEE"> </td>
</tr>
<tr>
<td>PaleVioletRed </td>
<td>#D87093</td>
<td style="background: #D87093"> </td>
</tr>
<tr>
<td>PapayaWhip </td>
<td>#FFEFD5</td>
<td style="background: #FFEFD5"> </td>
</tr>
<tr>
<td>PeachPuff </td>
<td>#FFDAB9</td>
<td style="background: #FFDAB9"> </td>
</tr>
<tr>
<td>Peru </td>
<td>#CD853F</td>
<td style="background: #CD853F"> </td>
</tr>
<tr>
<td>Pink </td>
<td>#FFC0CB</td>
<td style="background: #FFC0CB"> </td>
</tr>
<tr>
<td>Plum </td>
<td>#DDA0DD</td>
<td style="background: #DDA0DD"> </td>
</tr>
<tr>
<td>PowderBlue </td>
<td>#B0E0E6</td>
<td style="background: #B0E0E6"> </td>
</tr>
<tr>
<td>Purple </td>
<td>#800080</td>
<td style="background: #800080"> </td>
</tr>
<tr>
<td>Red </td>
<td>#FF0000</td>
<td style="background: #FF0000"> </td>
</tr>
<tr>
<td>RosyBrown </td>
<td>#BC8F8F</td>
<td style="background: #BC8F8F"> </td>
</tr>
<tr>
<td>RoyalBlue </td>
<td>#4169E1</td>
<td style="background: #4169E1"> </td>
</tr>
<tr>
<td>SaddleBrown </td>
<td>#8B4513</td>
<td style="background: #8B4513"> </td>
</tr>
<tr>
<td>Salmon </td>
<td>#FA8072</td>
<td style="background: #FA8072"> </td>
</tr>
<tr>
<td>SandyBrown </td>
<td>#F4A460</td>
<td style="background: #F4A460"> </td>
</tr>
<tr>
<td>SeaGreen </td>
<td>#2E8B57</td>
<td style="background: #2E8B57"> </td>
</tr>
<tr>
<td>SeaShell </td>
<td>#FFF5EE</td>
<td style="background: #FFF5EE"> </td>
</tr>
<tr>
<td>Sienna </td>
<td>#A0522D</td>
<td style="background: #A0522D"> </td>
</tr>
<tr>
<td>Silver </td>
<td>#C0C0C0</td>
<td style="background: #C0C0C0"> </td>
</tr>
<tr>
<td>SkyBlue </td>
<td>#87CEEB</td>
<td style="background: #87CEEB"> </td>
</tr>
<tr>
<td>SlateBlue </td>
<td>#6A5ACD</td>
<td style="background: #6A5ACD"> </td>
</tr>
<tr>
<td>SlateGray </td>
<td>#708090</td>
<td style="background: #708090"> </td>
</tr>
<tr>
<td>SlateGrey </td>
<td>#708090</td>
<td style="background: #708090"> </td>
</tr>
<tr>
<td>Snow </td>
<td>#FFFAFA</td>
<td style="background: #FFFAFA"> </td>
</tr>
<tr>
<td>SpringGreen </td>
<td>#00FF7F</td>
<td style="background: #00FF7F"> </td>
</tr>
<tr>
<td>SteelBlue </td>
<td>#4682B4</td>
<td style="background: #4682B4"> </td>
</tr>
<tr>
<td>Tan </td>
<td>#D2B48C</td>
<td style="background: #D2B48C"> </td>
</tr>
<tr>
<td>Teal </td>
<td>#008080</td>
<td style="background: #008080"> </td>
</tr>
<tr>
<td>Thistle </td>
<td>#D8BFD8</td>
<td style="background: #D8BFD8"> </td>
</tr>
<tr>
<td>Tomato </td>
<td>#FF6347</td>
<td style="background: #FF6347"> </td>
</tr>
<tr>
<td>Turquoise </td>
<td>#40E0D0</td>
<td style="background: #40E0D0"> </td>
</tr>
<tr>
<td>Violet </td>
<td>#EE82EE</td>
<td style="background: #EE82EE"> </td>
</tr>
<tr>
<td>Wheat </td>
<td>#F5DEB3</td>
<td style="background: #F5DEB3"> </td>
</tr>
<tr>
<td>White </td>
<td>#FFFFFF</td>
<td style="background: #FFFFFF"> </td>
</tr>
<tr>
<td>WhiteSmoke </td>
<td>#F5F5F5</td>
<td style="background: #F5F5F5"> </td>
</tr>
<tr>
<td>Yellow </td>
<td>#FFFF00</td>
<td style="background: #FFFF00"> </td>
</tr>
<tr>
<td>YellowGreen </td>
<td>#9ACD32</td>
<td style="background: #9ACD32"> </td>
</tr>
</tbody></table>

</div>


