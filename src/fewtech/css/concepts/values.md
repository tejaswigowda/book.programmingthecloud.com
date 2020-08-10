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
   <td>
Can include valid values of the following:

- <code>border-width</code>
- <code>border-style</code> (required)
- <code>border-color</code>
</td>
  </tr>
  <tr>
   <td>border-color</td>
   <td>Any valid CSS Color.</td>
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
- <code>CSS length</code><sup><i>len</i></sup>
- initial
- inherit
</td>
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

<sup><i>len</i></sup> <code>CSS Length</code>
<table class="w3-table-all notranslate">
  <tbody><tr>
    <th style="width:12%">Unit</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>cm</td>
    <td>centimeters
    <a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=trycss_unit_cm">Try it</a>
    </td>
  </tr>
    <tr>
    <td>mm</td>
    <td>millimeters
    <a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=trycss_unit_mm">Try it</a>  
    </td>
    </tr>
  <tr>
    <td>in</td>
    <td>inches (1in = 96px = 2.54cm)
    <a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=trycss_unit_in">Try it</a>
    </td>
  </tr>
    <tr>
    <td>px *</td>
    <td>pixels (1px = 1/96th of 1in)
    <a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=trycss_unit_px">Try it</a> 
    </td>
    </tr>
  <tr>
    <td>pt</td>
    <td>points (1pt = 1/72 of 1in)
    <a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=trycss_unit_pt">Try it</a> 
    </td>
  </tr>
  <tr>
    <td>pc</td>
    <td>picas (1pc = 12 pt)
    <a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=trycss_unit_pc">Try it</a>  
    </td>
  </tr>
</tbody></table>

<table class="w3-table-all notranslate">
  <tbody><tr>
    <th style="width:12%">Unit</th>
    <th>Description</th>
    <th></th>
  </tr>
  <tr>
    <td>em</td>
    <td>Relative to the font-size of the element (2em means 2 times the size of the current font)</td>
    <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=trycss_unit_em">Try it</a></td>
  </tr>
  <tr>
    <td>ex</td>
    <td>Relative to the x-height of the current font (rarely used)</td>
    <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=trycss_unit_ex">Try it</a></td>
  </tr>
  <tr>
    <td>ch</td>
    <td>Relative to the width of the "0" (zero)</td>
    <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=trycss_unit_ch">Try it</a></td>
  </tr>
  <tr>
    <td>rem</td>
    <td>Relative to font-size of the root element</td>
    <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=trycss_unit_rem">Try it</a></td>
  </tr>
  <tr>
    <td>vw</td>
    <td>Relative to 1% of the width of the viewport*</td>
    <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=trycss_unit_vw">Try it</a></td>
  </tr>
  <tr>
    <td>vh</td>
    <td>Relative to 1% of the height of the viewport*</td>
    <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=trycss_unit_vh">Try it</a></td>
  </tr>
  <tr>
    <td>vmin</td>
    <td>Relative to 1% of viewport's* smaller dimension</td>
    <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=trycss_unit_vmin">Try it</a></td>
  </tr>
  <tr>
    <td>vmax</td>
    <td>Relative to 1% of viewport's* larger dimension</td>
    <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=trycss_unit_vmax">Try it</a></td>
  </tr>
  <tr>
    <td>%</td>
    <td>Relative to the parent element</td>
    <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=trycss_unit_percentage">Try it</a></td>
  </tr>
    </tbody></table>




<sup><i>color</i></sup> <code>CSS Color</code>
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
<td>AliceBlue&nbsp;</td>
<td>#F0F8FF</td>
<td style="background: #F0F8FF">&nbsp;</td>
</tr>
<tr>
<td>AntiqueWhite&nbsp;</td>
<td>#FAEBD7</td>
<td style="background: #FAEBD7">&nbsp;</td>
</tr>
<tr><td>Aqua&nbsp;</td>
<td>#00FFFF</td>
<td style="background: #00FFFF">&nbsp;</td>
</tr>
<tr>
<td>Aquamarine&nbsp;</td>
<td>#7FFFD4</td>
<td style="background: #7FFFD4">&nbsp;</td>
</tr>
<tr>
<td>Azure&nbsp;</td>
<td>#F0FFFF</td>
<td style="background: #F0FFFF">&nbsp;</td>
</tr>
<tr>
<td>Beige&nbsp;</td>
<td>#F5F5DC</td>
<td style="background: #F5F5DC">&nbsp;</td>
</tr>
<tr>
<td>Bisque&nbsp;</td>
<td>#FFE4C4</td>
<td style="background: #FFE4C4">&nbsp;</td>
</tr>
<tr>
<td>Black&nbsp;</td>
<td>#000000</td>
<td style="background: #000000">&nbsp;</td>
</tr>
<tr>
<td>BlanchedAlmond&nbsp;</td>
<td>#FFEBCD</td>
<td style="background: #FFEBCD">&nbsp;</td>
</tr>
<tr>
<td>Blue&nbsp;</td>
<td>#0000FF</td>
<td style="background: #0000FF">&nbsp;</td>
</tr>
<tr>
<td>BlueViolet&nbsp;</td>
<td>#8A2BE2</td>
<td style="background: #8A2BE2">&nbsp;</td>
</tr>
<tr>
<td>Brown&nbsp;</td>
<td>#A52A2A</td>
<td style="background: #A52A2A">&nbsp;</td>
</tr>
<tr>
<td>BurlyWood&nbsp;</td>
<td>#DEB887</td>
<td style="background: #DEB887">&nbsp;</td>
</tr>
<tr>
<td>CadetBlue&nbsp;</td>
<td>#5F9EA0</td>
<td style="background: #5F9EA0">&nbsp;</td>
</tr>
<tr>
<td>Chartreuse&nbsp;</td>
<td>#7FFF00</td>
<td style="background: #7FFF00">&nbsp;</td>
</tr>
<tr>
<td>Chocolate&nbsp;</td>
<td>#D2691E</td>
<td style="background: #D2691E">&nbsp;</td>
</tr>
<tr>
<td>Coral&nbsp;</td>
<td>#FF7F50</td>
<td style="background: #FF7F50">&nbsp;</td>
</tr>
<tr>
<td>CornflowerBlue&nbsp;</td>
<td>#6495ED</td>
<td style="background: #6495ED">&nbsp;</td>
</tr>
<tr>
<td>Cornsilk&nbsp;</td>
<td>#FFF8DC</td>
<td style="background: #FFF8DC">&nbsp;</td>
</tr>
<tr>
<td>Crimson&nbsp;</td>
<td>#DC143C</td>
<td style="background: #DC143C">&nbsp;</td>
</tr>
<tr>
<td>Cyan&nbsp;</td>
<td>#00FFFF</td>
<td style="background: #00FFFF">&nbsp;</td>
</tr>
<tr>
<td>DarkBlue&nbsp;</td>
<td>#00008B</td>
<td style="background: #00008B">&nbsp;</td>
</tr>
<tr>
<td>DarkCyan&nbsp;</td>
<td>#008B8B</td>
<td style="background: #008B8B">&nbsp;</td>
</tr>
<tr>
<td>DarkGoldenRod&nbsp;</td>
<td>#B8860B</td>
<td style="background: #B8860B">&nbsp;</td>
</tr>
<tr>
<td>DarkGray&nbsp;</td>
<td>#A9A9A9</td>
<td style="background: #A9A9A9">&nbsp;</td>
</tr>
<tr>
<td>DarkGrey&nbsp;</td>
<td>#A9A9A9</td>
<td style="background: #A9A9A9">&nbsp;</td>
</tr>
<tr>
<td>DarkGreen&nbsp;</td>
<td>#006400</td>
<td style="background: #006400">&nbsp;</td>
</tr>
<tr>
<td>DarkKhaki&nbsp;</td>
<td>#BDB76B</td>
<td style="background: #BDB76B">&nbsp;</td>
</tr>
<tr>
<td>DarkMagenta&nbsp;</td>
<td>#8B008B</td>
<td style="background: #8B008B">&nbsp;</td>
</tr>
<tr>
<td>DarkOliveGreen&nbsp;</td>
<td>#556B2F</td>
<td style="background: #556B2F">&nbsp;</td>
</tr>
<tr>
<td>Darkorange&nbsp;</td>
<td>#FF8C00</td>
<td style="background: #FF8C00">&nbsp;</td>
</tr>
<tr>
<td>DarkOrchid&nbsp;</td>
<td>#9932CC</td>
<td style="background: #9932CC">&nbsp;</td>
</tr>
<tr>
<td>DarkRed&nbsp;</td>
<td>#8B0000</td>
<td style="background: #8B0000">&nbsp;</td>
</tr>
<tr>
<td>DarkSalmon&nbsp;</td>
<td>#E9967A</td>
<td style="background: #E9967A">&nbsp;</td>
</tr>
<tr>
<td>DarkSeaGreen&nbsp;</td>
<td>#8FBC8F</td>
<td style="background: #8FBC8F">&nbsp;</td>
</tr>
<tr>
<td>DarkSlateBlue&nbsp;</td>
<td>#483D8B</td>
<td style="background: #483D8B">&nbsp;</td>
</tr>
<tr>
<td>DarkSlateGray&nbsp;</td>
<td>#2F4F4F</td>
<td style="background: #2F4F4F">&nbsp;</td>
</tr>
<tr>
<td>DarkSlateGrey&nbsp;</td>
<td>#2F4F4F</td>
<td style="background: #2F4F4F">&nbsp;</td>
</tr>
<tr>
<td>DarkTurquoise&nbsp;</td>
<td>#00CED1</td>
<td style="background: #00CED1">&nbsp;</td>
</tr>
<tr>
<td>DarkViolet&nbsp;</td>
<td>#9400D3</td>
<td style="background: #9400D3">&nbsp;</td>
</tr>
<tr>
<td>DeepPink&nbsp;</td>
<td>#FF1493</td>
<td style="background: #FF1493">&nbsp;</td>
</tr>
<tr>
<td>DeepSkyBlue&nbsp;</td>
<td>#00BFFF</td>
<td style="background: #00BFFF">&nbsp;</td>
</tr>
<tr>
<td>DimGray&nbsp;</td>
<td>#696969</td>
<td style="background: #696969">&nbsp;</td>
</tr>
<tr>
<td>DimGrey&nbsp;</td>
<td>#696969</td>
<td style="background: #696969">&nbsp;</td>
</tr>
<tr>
<td>DodgerBlue&nbsp;</td>
<td>#1E90FF</td>
<td style="background: #1E90FF">&nbsp;</td>
</tr>
<tr>
<td>FireBrick&nbsp;</td>
<td>#B22222</td>
<td style="background: #B22222">&nbsp;</td>
</tr>
<tr>
<td>FloralWhite&nbsp;</td>
<td>#FFFAF0</td>
<td style="background: #FFFAF0">&nbsp;</td>
</tr>
<tr>
<td>ForestGreen&nbsp;</td>
<td>#228B22</td>
<td style="background: #228B22">&nbsp;</td>
</tr>
<tr>
<td>Fuchsia&nbsp;</td>
<td>#FF00FF</td>
<td style="background: #FF00FF">&nbsp;</td>
</tr>
<tr>
<td>Gainsboro&nbsp;</td>
<td>#DCDCDC</td>
<td style="background: #DCDCDC">&nbsp;</td>
</tr>
<tr>
<td>GhostWhite&nbsp;</td>
<td>#F8F8FF</td>
<td style="background: #F8F8FF">&nbsp;</td>
</tr>
<tr>
<td>Gold&nbsp;</td>
<td>#FFD700</td>
<td style="background: #FFD700">&nbsp;</td>
</tr>
<tr>
<td>GoldenRod&nbsp;</td>
<td>#DAA520</td>
<td style="background: #DAA520">&nbsp;</td>
</tr>
<tr>
<td>Gray&nbsp;</td>
<td>#808080</td>
<td style="background: #808080">&nbsp;</td>
</tr>
<tr>
<td>Grey&nbsp;</td>
<td>#808080</td>
<td style="background: #808080">&nbsp;</td>
</tr>
<tr>
<td>Green&nbsp;</td>
<td>#008000</td>
<td style="background: #008000">&nbsp;</td>
</tr>
<tr>
<td>GreenYellow&nbsp;</td>
<td>#ADFF2F</td>
<td style="background: #ADFF2F">&nbsp;</td>
</tr>
<tr>
<td>HoneyDew&nbsp;</td>
<td>#F0FFF0</td>
<td style="background: #F0FFF0">&nbsp;</td>
</tr>
<tr>
<td>HotPink&nbsp;</td>
<td>#FF69B4</td>
<td style="background: #FF69B4">&nbsp;</td>
</tr>
<tr>
<td><a href="#IndianRed ">IndianRed &nbsp;</td>
<td>#CD5C5C</td>
<td style="background: #CD5C5C">&nbsp;</td>
</tr>
<tr>
<td><a href="#Indigo  ">Indigo &nbsp;</td>
<td>#4B0082</td>
<td style="background: #4B0082">&nbsp;</td>
</tr>
<tr>
<td>Ivory&nbsp;</td>
<td>#FFFFF0</td>
<td style="background: #FFFFF0">&nbsp;</td>
</tr>
<tr>
<td>Khaki&nbsp;</td>
<td>#F0E68C</td>
<td style="background: #F0E68C">&nbsp;</td>
</tr>
<tr>
<td>Lavender&nbsp;</td>
<td>#E6E6FA</td>
<td style="background: #E6E6FA">&nbsp;</td>
</tr>
<tr>
<td>LavenderBlush&nbsp;</td>
<td>#FFF0F5</td>
<td style="background: #FFF0F5">&nbsp;</td>
</tr>
<tr>
<td>LawnGreen&nbsp;</td>
<td>#7CFC00</td>
<td style="background: #7CFC00">&nbsp;</td>
</tr>
<tr>
<td>LemonChiffon&nbsp;</td>
<td>#FFFACD</td>
<td style="background: #FFFACD">&nbsp;</td>
</tr>
<tr>
<td>LightBlue&nbsp;</td>
<td>#ADD8E6</td>
<td style="background: #ADD8E6">&nbsp;</td>
</tr>
<tr>
<td>LightCoral&nbsp;</td>
<td>#F08080</td>
<td style="background: #F08080">&nbsp;</td>
</tr>
<tr>
<td>LightCyan&nbsp;</td>
<td>#E0FFFF</td>
<td style="background: #E0FFFF">&nbsp;</td>
</tr>
<tr>
<td>LightGoldenRodYellow&nbsp;</td>
<td>#FAFAD2</td>
<td style="background: #FAFAD2">&nbsp;</td>
</tr>
<tr>
<td>LightGray&nbsp;</td>
<td>#D3D3D3</td>
<td style="background: #D3D3D3">&nbsp;</td>
</tr>
<tr>
<td>LightGrey&nbsp;</td>
<td>#D3D3D3</td>
<td style="background: #D3D3D3">&nbsp;</td>
</tr>
<tr>
<td>LightGreen&nbsp;</td>
<td>#90EE90</td>
<td style="background: #90EE90">&nbsp;</td>
</tr>
<tr>
<td>LightPink&nbsp;</td>
<td>#FFB6C1</td>
<td style="background: #FFB6C1">&nbsp;</td>
</tr>
<tr>
<td>LightSalmon&nbsp;</td>
<td>#FFA07A</td>
<td style="background: #FFA07A">&nbsp;</td>
</tr>
<tr>
<td>LightSeaGreen&nbsp;</td>
<td>#20B2AA</td>
<td style="background: #20B2AA">&nbsp;</td>
</tr>
<tr>
<td>LightSkyBlue&nbsp;</td>
<td>#87CEFA</td>
<td style="background: #87CEFA">&nbsp;</td>
</tr>
<tr>
<td>LightSlateGray&nbsp;</td>
<td>#778899</td>
<td style="background: #778899">&nbsp;</td>
</tr>
<tr>
<td>LightSlateGrey&nbsp;</td>
<td>#778899</td>
<td style="background: #778899">&nbsp;</td>
</tr>
<tr>
<td>LightSteelBlue&nbsp;</td>
<td>#B0C4DE</td>
<td style="background: #B0C4DE">&nbsp;</td>
</tr>
<tr>
<td>LightYellow&nbsp;</td>
<td>#FFFFE0</td>
<td style="background: #FFFFE0">&nbsp;</td>
</tr>
<tr>
<td>Lime&nbsp;</td>
<td>#00FF00</td>
<td style="background: #00FF00">&nbsp;</td>
</tr>
<tr>
<td>LimeGreen&nbsp;</td>
<td>#32CD32</td>
<td style="background: #32CD32">&nbsp;</td>
</tr>
<tr>
<td>Linen&nbsp;</td>
<td>#FAF0E6</td>
<td style="background: #FAF0E6">&nbsp;</td>
</tr>
<tr>
<td>Magenta&nbsp;</td>
<td>#FF00FF</td>
<td style="background: #FF00FF">&nbsp;</td>
</tr>
<tr>
<td>Maroon&nbsp;</td>
<td>#800000</td>
<td style="background: #800000">&nbsp;</td>
</tr>
<tr>
<td>MediumAquaMarine&nbsp;</td>
<td>#66CDAA</td>
<td style="background: #66CDAA">&nbsp;</td>
</tr>
<tr>
<td>MediumBlue&nbsp;</td>
<td>#0000CD</td>
<td style="background: #0000CD">&nbsp;</td>
</tr>
<tr>
<td>MediumOrchid&nbsp;</td>
<td>#BA55D3</td>
<td style="background: #BA55D3">&nbsp;</td>
</tr>
<tr>
<td>MediumPurple&nbsp;</td>
<td>#9370D8</td>
<td style="background: #9370D8">&nbsp;</td>
</tr>
<tr>
<td>MediumSeaGreen&nbsp;</td>
<td>#3CB371</td>
<td style="background: #3CB371">&nbsp;</td>
</tr>
<tr>
<td>MediumSlateBlue&nbsp;</td>
<td>#7B68EE</td>
<td style="background: #7B68EE">&nbsp;</td>
</tr>
<tr>
<td>MediumSpringGreen&nbsp;</td>
<td>#00FA9A</td>
<td style="background: #00FA9A">&nbsp;</td>
</tr>
<tr>
<td>MediumTurquoise&nbsp;</td>
<td>#48D1CC</td>
<td style="background: #48D1CC">&nbsp;</td>
</tr>
<tr>
<td>MediumVioletRed&nbsp;</td>
<td>#C71585</td>
<td style="background: #C71585">&nbsp;</td>
</tr>
<tr>
<td>MidnightBlue&nbsp;</td>
<td>#191970</td>
<td style="background: #191970">&nbsp;</td>
</tr>
<tr>
<td>MintCream&nbsp;</td>
<td>#F5FFFA</td>
<td style="background: #F5FFFA">&nbsp;</td>
</tr>
<tr>
<td>MistyRose&nbsp;</td>
<td>#FFE4E1</td>
<td style="background: #FFE4E1">&nbsp;</td>
</tr>
<tr>
<td>Moccasin&nbsp;</td>
<td>#FFE4B5</td>
<td style="background: #FFE4B5">&nbsp;</td>
</tr>
<tr>
<td>NavajoWhite&nbsp;</td>
<td>#FFDEAD</td>
<td style="background: #FFDEAD">&nbsp;</td>
</tr>
<tr>
<td>Navy&nbsp;</td>
<td>#000080</td>
<td style="background: #000080">&nbsp;</td>
</tr>
<tr>
<td>OldLace&nbsp;</td>
<td>#FDF5E6</td>
<td style="background: #FDF5E6">&nbsp;</td>
</tr>
<tr>
<td>Olive&nbsp;</td>
<td>#808000</td>
<td style="background: #808000">&nbsp;</td>
</tr>
<tr>
<td>OliveDrab&nbsp;</td>
<td>#6B8E23</td>
<td style="background: #6B8E23">&nbsp;</td>
</tr>
<tr>
<td>Orange&nbsp;</td>
<td>#FFA500</td>
<td style="background: #FFA500">&nbsp;</td>
</tr>
<tr>
<td>OrangeRed&nbsp;</td>
<td>#FF4500</td>
<td style="background: #FF4500">&nbsp;</td>
</tr>
<tr>
<td>Orchid&nbsp;</td>
<td>#DA70D6</td>
<td style="background: #DA70D6">&nbsp;</td>
</tr>
<tr>
<td>PaleGoldenRod&nbsp;</td>
<td>#EEE8AA</td>
<td style="background: #EEE8AA">&nbsp;</td>
</tr>
<tr>
<td>PaleGreen&nbsp;</td>
<td>#98FB98</td>
<td style="background: #98FB98">&nbsp;</td>
</tr>
<tr>
<td>PaleTurquoise&nbsp;</td>
<td>#AFEEEE</td>
<td style="background: #AFEEEE">&nbsp;</td>
</tr>
<tr>
<td>PaleVioletRed&nbsp;</td>
<td>#D87093</td>
<td style="background: #D87093">&nbsp;</td>
</tr>
<tr>
<td>PapayaWhip&nbsp;</td>
<td>#FFEFD5</td>
<td style="background: #FFEFD5">&nbsp;</td>
</tr>
<tr>
<td>PeachPuff&nbsp;</td>
<td>#FFDAB9</td>
<td style="background: #FFDAB9">&nbsp;</td>
</tr>
<tr>
<td>Peru&nbsp;</td>
<td>#CD853F</td>
<td style="background: #CD853F">&nbsp;</td>
</tr>
<tr>
<td>Pink&nbsp;</td>
<td>#FFC0CB</td>
<td style="background: #FFC0CB">&nbsp;</td>
</tr>
<tr>
<td>Plum&nbsp;</td>
<td>#DDA0DD</td>
<td style="background: #DDA0DD">&nbsp;</td>
</tr>
<tr>
<td>PowderBlue&nbsp;</td>
<td>#B0E0E6</td>
<td style="background: #B0E0E6">&nbsp;</td>
</tr>
<tr>
<td>Purple&nbsp;</td>
<td>#800080</td>
<td style="background: #800080">&nbsp;</td>
</tr>
<tr>
<td>Red&nbsp;</td>
<td>#FF0000</td>
<td style="background: #FF0000">&nbsp;</td>
</tr>
<tr>
<td>RosyBrown&nbsp;</td>
<td>#BC8F8F</td>
<td style="background: #BC8F8F">&nbsp;</td>
</tr>
<tr>
<td>RoyalBlue&nbsp;</td>
<td>#4169E1</td>
<td style="background: #4169E1">&nbsp;</td>
</tr>
<tr>
<td>SaddleBrown&nbsp;</td>
<td>#8B4513</td>
<td style="background: #8B4513">&nbsp;</td>
</tr>
<tr>
<td>Salmon&nbsp;</td>
<td>#FA8072</td>
<td style="background: #FA8072">&nbsp;</td>
</tr>
<tr>
<td>SandyBrown&nbsp;</td>
<td>#F4A460</td>
<td style="background: #F4A460">&nbsp;</td>
</tr>
<tr>
<td>SeaGreen&nbsp;</td>
<td>#2E8B57</td>
<td style="background: #2E8B57">&nbsp;</td>
</tr>
<tr>
<td>SeaShell&nbsp;</td>
<td>#FFF5EE</td>
<td style="background: #FFF5EE">&nbsp;</td>
</tr>
<tr>
<td>Sienna&nbsp;</td>
<td>#A0522D</td>
<td style="background: #A0522D">&nbsp;</td>
</tr>
<tr>
<td>Silver&nbsp;</td>
<td>#C0C0C0</td>
<td style="background: #C0C0C0">&nbsp;</td>
</tr>
<tr>
<td>SkyBlue&nbsp;</td>
<td>#87CEEB</td>
<td style="background: #87CEEB">&nbsp;</td>
</tr>
<tr>
<td>SlateBlue&nbsp;</td>
<td>#6A5ACD</td>
<td style="background: #6A5ACD">&nbsp;</td>
</tr>
<tr>
<td>SlateGray&nbsp;</td>
<td>#708090</td>
<td style="background: #708090">&nbsp;</td>
</tr>
<tr>
<td>SlateGrey&nbsp;</td>
<td>#708090</td>
<td style="background: #708090">&nbsp;</td>
</tr>
<tr>
<td>Snow&nbsp;</td>
<td>#FFFAFA</td>
<td style="background: #FFFAFA">&nbsp;</td>
</tr>
<tr>
<td>SpringGreen&nbsp;</td>
<td>#00FF7F</td>
<td style="background: #00FF7F">&nbsp;</td>
</tr>
<tr>
<td>SteelBlue&nbsp;</td>
<td>#4682B4</td>
<td style="background: #4682B4">&nbsp;</td>
</tr>
<tr>
<td>Tan&nbsp;</td>
<td>#D2B48C</td>
<td style="background: #D2B48C">&nbsp;</td>
</tr>
<tr>
<td>Teal&nbsp;</td>
<td>#008080</td>
<td style="background: #008080">&nbsp;</td>
</tr>
<tr>
<td>Thistle&nbsp;</td>
<td>#D8BFD8</td>
<td style="background: #D8BFD8">&nbsp;</td>
</tr>
<tr>
<td>Tomato&nbsp;</td>
<td>#FF6347</td>
<td style="background: #FF6347">&nbsp;</td>
</tr>
<tr>
<td>Turquoise&nbsp;</td>
<td>#40E0D0</td>
<td style="background: #40E0D0">&nbsp;</td>
</tr>
<tr>
<td>Violet&nbsp;</td>
<td>#EE82EE</td>
<td style="background: #EE82EE">&nbsp;</td>
</tr>
<tr>
<td>Wheat&nbsp;</td>
<td>#F5DEB3</td>
<td style="background: #F5DEB3">&nbsp;</td>
</tr>
<tr>
<td>White&nbsp;</td>
<td>#FFFFFF</td>
<td style="background: #FFFFFF">&nbsp;</td>
</tr>
<tr>
<td>WhiteSmoke&nbsp;</td>
<td>#F5F5F5</td>
<td style="background: #F5F5F5">&nbsp;</td>
</tr>
<tr>
<td>Yellow&nbsp;</td>
<td>#FFFF00</td>
<td style="background: #FFFF00">&nbsp;</td>
</tr>
<tr>
<td>YellowGreen&nbsp;</td>
<td>#9ACD32</td>
<td style="background: #9ACD32">&nbsp;</td>
</tr>
</tbody></table>
