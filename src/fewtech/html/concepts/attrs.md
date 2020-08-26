# Attributes

Attributes can be applied to HTML tags to change their behavior. An
attribute as 2 parts:

1. The attribute **name**
2. The attribute **value**

Attributes are specified within the start tag as follows:

```html
ATTR_NAME='ATTR_VAL'
```
The attribute name cannot have spaces and must be one word (underscore
`_`
allowed). Attribute value should be quoted (single or double quotes --
this is optional but it is best practice to use quotes) and *can*
include spaces.

A HTML tag can have any number of attributes (or none at all). The
attribute-value pairs are seperated from each other by a white-space
(one or more spaces). 

```html
<TAG_NAME ATTR_NAME1='ATTR_VAL1' ATTR_NAME2="ATTR_VAL2">

      content

</TAG_NAME>
```


## Uses of Attributes
Attributes have 4 uses:

1. *To modify the behavior of a HTML tag:* Conside the anchor `<a>` tag,
   which is used to cross reference HTML pages. The `href` attribute
specifies the html page to navigate to when clicked.
```html
  <a href='http://google.com'> Go to Google </a>
```
  <a href='http://google.com'> Go to Google </a>

In order to open the page in a seperate tab speicy the `target`
attribute and set it to `_blank`.
```html
  <a href='http://google.com' target="_blank"> Go to Google </a>
```
  <a href='http://google.com' target="_blank"> Go to Google </a>


Next let us look at the `<img>` tag. The
   `src` attribute specifies which image should be rendered within the
`<img>` tag. For example:
```html
  <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'>
```
  <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'>

will render the Google logo. We can also specify the height and width of
the image (in pixels) by using the `height` and `width` attributes, like so:

```html
  <img height='100' width='200' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'>
```
  <img height='100' width='200' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'>

<div class='notes'>

- If you want to maintain the aspect-ratio of the image specify only one
of the two (`height`/`width`) attributes.

  <img height='100' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'>

- It is best to use CSS to speicfy these properties, more on this
   later.
</div>

2. *To add CSS styling to the tag:* A special attribute called `style`
   can be use to specify CSS declaration for a tag. This is one of the
many ways CSS can be added to a tag. This will be discussed in detail in
the CSS section.

3. *To identify and group tags:* An attribute called `id` can be used to
   assign an unique identifier to a tag. This identifier can be used
only for one tag and a tag can have only one `id`. A tag can be
categorized into a group by the `class` attribute. A tag can have more
than one class. These class names are delimted by white spaces.

```html
  <div id="testID" class='class1 class2 class3'> </div>
```

4. *To attach **event listeners** to tags:*

Events are actions done by the user on a tag like clicking, mouse hover
etc. An event handler is JavaScript that needs to execute when the event
occurs. The following markup will pop up a message (`100`) when the
button is cliked.

```html
  <button onclick="alert(100)"> Click me! </button>
```
  <button onclick="alert(100)"> Click me! </button>

The event model will be discussed in more detail in the JavaScript
section.

The next section lists all HTML attributes that can be used with
different html tags.

## Attribute Reference

<i><b>
Taken from [MDN web
docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). Please
[contribute](https://www.smashingmagazine.com/2018/05/contributing-mdn-webdocs/) if you can.
</b></i>


<article id="wikiArticle"><div></div>

The following table lists the defined attributes of the HTML standard.
A *global
attribute* can be used with any tag, whereas most attributes have
certain tags with which they are most commonly used.

<div id='attrList' style="overflow-x:auto;">
<table>
 <thead>
  <tr>
   <th>Attribute Name</th>
   <th>Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>accept</code></td>
   <td>List of types the server accepts, typically a file type.</td>
  </tr>
  <tr>
   <td><code>accept-charset</code></td>
   <td>List of supported charsets.</td>
  </tr>
  <tr>
   <td><code>accesskey</code></td>
   <td>Keyboard shortcut to activate or add focus to the element.</td>
  </tr>
  <tr>
   <td><code>action</code></td>
   <td>The URI of a program that processes the information submitted via the form.</td>
  </tr>
  <tr>
   <td><code>align</code></td>
   <td>Specifies the horizontal alignment of the element.</td>
  </tr>
  <tr>
   <td><code>allow</code></td>
   <td>Specifies a feature-policy for the iframe.</td>
  </tr>
  <tr>
   <td><code>alt</code></td>
   <td>Alternative text in case an image can't be displayed.</td>
  </tr>
  <tr>
   <td><code>async</code></td>
   <td>Executes the script asynchronously.</td>
  </tr>
  <tr>
   <td><code>autocapitalize</code></td>
   <td>Sets whether input is automatically capitalized when entered by user</td>
  </tr>
  <tr>
   <td><code>autocomplete</code></td>
   <td>Indicates whether controls in this form can by default have their values automatically completed by the browser.</td>
  </tr>
  <tr>
   <td><code>autofocus</code></td>
   <td>The element should be automatically focused after the page loaded.</td>
  </tr>
  <tr>
   <td><code>autoplay</code></td>
   <td>The audio or video should play as soon as possible.</td>
  </tr>
  <tr>
   <td><code>background</code></td>
   <td>Specifies the URL of an image file.

   </td>
  </tr>
  <tr>
   <td><code>bgcolor</code></td>
   <td>
    <p>Background color of the element.</p>


   </td>
  </tr>
  <tr>
   <td><code>border</code></td>
   <td>
    <p>The border width.</p>
   </td>
  </tr>
  <tr>
   <td><code>buffered</code></td>
   <td>Contains the time range of already buffered media.</td>
  </tr>
  <tr>
   <td><code>capture</code></td>
   <td>From the HTML Media Capture<br><small lang="en-US">The definition of 'media capture' in that specification.</small>spec, specifies a new file can be captured.</td>
  </tr>
  <tr>
   <td><code>challenge</code></td>
   <td>A challenge string that is submitted along with the public key.</td>
  </tr>
  <tr>
   <td><code>charset</code></td>
   <td>Declares the character encoding of the page or script.</td>
  </tr>
  <tr>
   <td><code>checked</code></td>
   <td>Indicates whether the element should be checked on page load.</td>
  </tr>
  <tr>
   <td><code>cite</code></td>
   <td>Contains a URI which points to the source of the quote or change.</td>
  </tr>
  <tr>
   <td><code>class</code></td>
   <td>Often used with CSS to style elements with common properties.</td>
  </tr>
  <tr>
   <td><code>code</code></td>
   <td>Specifies the URL of the applet's class file to be loaded and executed.</td>
  </tr>
  <tr>
   <td><code>codebase</code></td>
   <td>This attribute gives the absolute or relative URL of the directory where applets' .class files referenced by the code attribute are stored.</td>
  </tr>
  <tr>
   <td><code>color</code></td>
   <td>
    <p>This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format.</p>


   </td>
  </tr>
  <tr>
   <td><code>cols</code></td>
   <td>Defines the number of columns in a textarea.</td>
  </tr>
  <tr>
   <td><code>colspan</code></td>
   <td>The colspan attribute defines the number of columns a cell should span.</td>
  </tr>
  <tr>
   <td><code>content</code></td>
   <td>A value associated with <code>http-equiv</code> or <code>name</code> depending on the context.</td>
  </tr>
  <tr>
   <td><code>contenteditable</code></td>
   <td>Indicates whether the element's content is editable.</td>
  </tr>
  <tr>
   <td><code>contextmenu</code></td>
   <td>Defines the ID of a ><code>&lt;menu&gt;</code> element which will serve as the element's context menu.</td>
  </tr>
  <tr>
   <td><code>controls</code></td>
   <td>Indicates whether the browser should show playback controls to the user.</td>
  </tr>
  <tr>
   <td><code>coords</code></td>
   <td>A set of values specifying the coordinates of the hot-spot region.</td>
  </tr>
  <tr>
   <td><code>crossorigin</code></td>
   <td>How the element handles cross-origin requests</td>
  </tr>
  <tr>
   <td><code>csp</code>&nbsp;<span class="icon-only-inline" title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span></td>
   <td>Specifies the Content Security Policy that an embedded document must agree to enforce upon itself.</td>
  </tr>
  <tr>
   <td><code>data</code></td>
   <td>Specifies the URL of the resource.</td>
  </tr>
  <tr>
   <td><code>data-*</code></td>
   <td>Lets you attach custom attributes to an HTML element.</td>
  </tr>
  <tr>
   <td><code>datetime</code></td>
   <td>Indicates the date and time associated with the element.</td>
  </tr>
  <tr>
   <td><code>decoding</code></td>
   <td>Indicates the preferred method to decode the image.</td>
  </tr>
  <tr>
   <td><code>default</code></td>
   <td>Indicates that the track should be enabled unless the user's preferences indicate something different.</td>
  </tr>
  <tr>
   <td><code>defer</code></td>
   <td>Indicates that the script should be executed after the page has been parsed.</td>
  </tr>
  <tr>
   <td><code>dir</code></td>
   <td>Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)</td>
  </tr>
  <tr>
   <td><code>dirname</code></td>
   <td></td>
  </tr>
  <tr>
   <td><code>disabled</code></td>
   <td>Indicates whether the user can interact with the element.</td>
  </tr>
  <tr>
   <td><code>download</code></td>
   <td>Indicates that the hyperlink is to be used for downloading a resource.</td>
  </tr>
  <tr>
   <td><code>draggable</code></td>
   <td>Defines whether the element can be dragged.</td>
  </tr>
  <tr>
   <td><code>dropzone</code></td>
   <td>Indicates that the element accept the dropping of content on it.</td>
  </tr>
  <tr>
   <td><code>enctype</code></td>
   <td>Defines the content type of the form date when the <code>method</code> is POST.</td>
  </tr>
  <tr>
   <td><code>enterkeyhint</code> <span class="icon-only-inline" title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span></td>
   <td>The <code>enterkeyhint</code> specifies what action label (or icon) to present for the enter key on virtual keyboards. The attribute can be used with form controls (such as the value of <code>textarea</code> elements), or in elements in an editing host (e.g., using <code>contenteditable</code> attribute).</td>
  </tr>
  <tr>
   <td><code>for</code></td>
   <td>Describes elements which belongs to this one.</td>
  </tr>
  <tr>
   <td><code>form</code></td>
   <td>Indicates the form that is the owner of the element.</td>
  </tr>
  <tr>
   <td><code>formaction</code></td>
   <td>Indicates the action of the element, overriding the action defined in the <code>&lt;form&gt;</code>.</td>
  </tr>
  <tr>
   <td><code>formenctype</code></td>
   <td>If the button/input is a submit button (<code>type="submit"</code>), this attribute sets the encoding type to use during form submission. If this attribute is specified, it overrides the <code>enctype</code> attribute of the button's form owner.</td>
  </tr>
  <tr>
   <td><code>formmethod</code></td>
   <td>If the button/input is a submit button (<code>type="submit"</code>), this attribute sets the submission method to use during form submission (<code>GET</code>, <code>POST</code>, etc.). If this attribute is specified, it overrides the <code>method</code> attribute of the button's form owner.</td>
  </tr>
  <tr>
   <td><code>formnovalidate</code></td>
   <td>If the button/input is a submit button (<code>type="submit"</code>), this boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the <code>novalidate</code> attribute of the button's form owner.</td>
  </tr>
  <tr>
   <td><code>formtarget</code></td>
   <td>If the button/input is a submit button (<code>type="submit"</code>), this attribute specifies the browsing context (for example, tab, window, or inline frame) in which to display the response that is received after submitting the form. If this attribute is specified, it overrides the <code>target</code> attribute of the button's form owner.</td>
  </tr>
  <tr>
   <td><code>headers</code></td>
   <td>IDs of the <code>&lt;th&gt;</code> elements which applies to this element.</td>
  </tr>
  <tr>
   <td><code>height</code></td>
   <td>
    <p>Specifies the height of elements listed here. For all other elements, use the CSS ><code>height</code> property.</p>


   </td>
  </tr>
  <tr>
   <td><code>hidden</code></td>
   <td>Prevents rendering of given element, while keeping child elements, e.g. script elements, active.</td>
  </tr>
  <tr>
   <td><code>high</code></td>
   <td>Indicates the lower bound of the upper range.</td>
  </tr>
  <tr>
   <td><code>href</code></td>
   <td>The URL of a linked resource.</td>
  </tr>
  <tr>
   <td><code>hreflang</code></td>
   <td>Specifies the language of the linked resource.</td>
  </tr>
  <tr>
   <td><code>http-equiv</code></td>
   <td>Defines a pragma directive.</td>
  </tr>
  <tr>
   <td><code>icon</code></td>
   <td>Specifies a picture which represents the command.</td>
  </tr>
  <tr>
   <td><code>id</code></td>
   <td>Often used with CSS to style a specific element. The value of this attribute must be unique.</td>
  </tr>
  <tr>
   <td><code>importance</code>&nbsp;<span class="icon-only-inline" title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span></td>
   <td>Indicates the relative fetch priority for the resource.</td>
  </tr>
  <tr>
   <td><code>integrity</code></td>
   <td>
    <p>Specifies a Subresource Integrity value that allows browsers to verify what they fetch.</p>
   </td>
  </tr>
  <tr>
   <td><code>intrinsicsize</code>&nbsp;<span class="icon-only-inline" title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span></td>
   <td>This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it’s the size specified in the attribute.</td>
  </tr>
  <tr>
   <td><code>inputmode</code></td>
   <td>Provides a hint as to the type of data that might be entered by the user while editing the element or its contents. The attribute can be used with form controls (such as the value of <code>textarea</code> elements), or in elements in an editing host (e.g., using <code>contenteditable</code> attribute).</td>
  </tr>
  <tr>
   <td><code>ismap</code></td>
   <td>Indicates that the image is part of a server-side image map.</td>
  </tr>
  <tr>
   <td><code>itemprop</code></td>
   <td></td>
  </tr>
  <tr>
   <td><code>keytype</code></td>
   <td>Specifies the type of key generated.</td>
  </tr>
  <tr>
   <td><code>kind</code></td>
   <td>Specifies the kind of text track.</td>
  </tr>
  <tr>
   <td><code>label</code></td>
   <td>Specifies a user-readable title of the element.</td>
  </tr>
  <tr>
   <td><code>lang</code></td>
   <td>Defines the language used in the element.</td>
  </tr>
  <tr>
   <td><code>language</code></td>
   <td>Defines the script language used in the element.</td>
  </tr>
  <tr>
   <td><code>loading</code>&nbsp;<span class="icon-only-inline" title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span></td>
   <td>Indicates if the element should be loaded lazily (<code>loading="lazy"</code>) or loaded immediately (<code>loading="eager"</code>).
   </td>
  </tr>
  <tr>
   <td><code>list</code></td>
   <td>Identifies a list of pre-defined options to suggest to the user.</td>
  </tr>
  <tr>
   <td><code>loop</code></td>
   <td>Indicates whether the media should start playing from the start when it's finished.</td>
  </tr>
  <tr>
   <td><code>low</code></td>
   <td>Indicates the upper bound of the lower range.</td>
  </tr>
  <tr>
   <td><code>manifest</code></td>
   <td>Specifies the URL of the document's cache manifest.

   </td>
  </tr>
  <tr>
   <td><code>max</code></td>
   <td>Indicates the maximum value allowed.</td>
  </tr>
  <tr>
   <td><code>maxlength</code></td>
   <td>Defines the maximum number of characters allowed in the element.</td>
  </tr>
  <tr>
   <td><code>minlength</code></td>
   <td>Defines the minimum number of characters allowed in the element.</td>
  </tr>
  <tr>
   <td><code>media</code></td>
   <td>Specifies a hint of the media for which the linked resource was designed.</td>
  </tr>
  <tr>
   <td>method</td>
   <td>Defines which HTTP method to use when submitting the form. Can be <code>GET</code> (default) or <code>POST</code>.</td>
  </tr>
  <tr>
   <td><code>min</code></td>
   <td>Indicates the minimum value allowed.</td>
  </tr>
  <tr>
   <td><code>multiple</code></td>
   <td>Indicates whether multiple values can be entered in an input of the type <code>email</code> or <code>file</code>.</td>
  </tr>
  <tr>
   <td><code>muted</code></td>
   <td>Indicates whether the audio will be initially silenced on page load.</td>
  </tr>
  <tr>
   <td><code>name</code></td>
   <td>Name of the element. For example used by the server to identify the fields in form submits.</td>
  </tr>
  <tr>
   <td><code>novalidate</code></td>
   <td>This attribute indicates that the form shouldn't be validated when submitted.</td>
  </tr>
  <tr>
   <td><code>open</code></td>
   <td>Indicates whether the details will be shown on page load.</td>
  </tr>
  <tr>
   <td><code>optimum</code></td>
   <td>Indicates the optimal numeric value.</td>
  </tr>
  <tr>
   <td><code>pattern</code></td>
   <td>Defines a regular expression which the element's value will be validated against.</td>
  </tr>
  <tr>
   <td><code>ping</code></td>
   <td>The <code>ping</code> attribute specifies a space-separated list of URLs to be notified if a user follows the hyperlink.</td>
  </tr>
  <tr>
   <td><code>placeholder</code></td>
   <td>Provides a hint to the user of what can be entered in the field.</td>
  </tr>
  <tr>
   <td><code>poster</code></td>
   <td>A URL indicating a poster frame to show until the user plays or seeks.</td>
  </tr>
  <tr>
   <td><code>preload</code></td>
   <td>Indicates whether the whole resource, parts of it or nothing should be preloaded.</td>
  </tr>
  <tr>
   <td><code>radiogroup</code></td>
   <td></td>
  </tr>
  <tr>
   <td><code>readonly</code></td>
   <td>Indicates whether the element can be edited.</td>
  </tr>
  <tr>
   <td><code>referrerpolicy</code></td>
   <td>Specifies which referrer is sent when fetching the resource.</td>
  </tr>
  <tr>
   <td><code>rel</code></td>
   <td>Specifies the relationship of the target object to the link object.</td>
  </tr>
  <tr>
   <td><code>required</code></td>
   <td>Indicates whether this element is required to fill out or not.</td>
  </tr>
  <tr>
   <td><code>reversed</code></td>
   <td>Indicates whether the list should be displayed in a descending order instead of a ascending.</td>
  </tr>
  <tr>
   <td><code>rows</code></td>
   <td>Defines the number of rows in a text area.</td>
  </tr>
  <tr>
   <td><code>rowspan</code></td>
   <td>Defines the number of rows a table cell should span over.</td>
  </tr>
  <tr>
   <td><code>sandbox</code></td>
   <td>Stops a document loaded in an iframe from using certain features (such as submitting forms or opening new windows).</td>
  </tr>
  <tr>
   <td><code>scope</code></td>
   <td>Defines the cells that the header test (defined in the <code>th</code> element) relates to.</td>
  </tr>
  <tr>
   <td><code>scoped</code></td>
   <td></td>
  </tr>
  <tr>
   <td><code>selected</code></td>
   <td>Defines a value which will be selected on page load.</td>
  </tr>
  <tr>
   <td><code>shape</code></td>
   <td></td>
  </tr>
  <tr>
   <td><code>size</code></td>
   <td>Defines the width of the element (in pixels). If the element's <code>type</code> attribute is <code>text</code> or <code>password</code> then it's the number of characters.</td>
  </tr>
  <tr>
   <td><code>sizes</code></td>
   <td></td>
  </tr>
  <tr>
   <td><code>slot</code></td>
   <td>Assigns a slot in a shadow DOM shadow tree to an element.</td>
  </tr>
  <tr>
   <td><code>span</code></td>
   <td></td>
  </tr>
  <tr>
   <td><code>spellcheck</code></td>
   <td>Indicates whether spell checking is allowed for the element.</td>
  </tr>
  <tr>
   <td><code>src</code></td>
   <td>The URL of the embeddable content.</td>
  </tr>
  <tr>
   <td><code>srcdoc</code></td>
   <td></td>
  </tr>
  <tr>
   <td><code>srclang</code></td>
   <td></td>
  </tr>
  <tr>
   <td><code>srcset</code></td>
   <td>One or more responsive image candidates.</td>
  </tr>
  <tr>
   <td><code>start</code></td>
   <td>Defines the first number if other than 1.</td>
  </tr>
  <tr>
   <td><code>step</code></td>
   <td></td>
  </tr>
  <tr>
   <td><code>style</code></td>
   <td>Defines CSS styles which will override styles previously set.</td>
  </tr>
  <tr>
   <td><code>summary</code></td>
   <td></td>
  </tr>
  <tr>
   <td><code>tabindex</code></td>
   <td>Overrides the browser's default tab order and follows the one specified instead.</td>
  </tr>
  <tr>
   <td><code>target</code></td>
   <td></td>
  </tr>
  <tr>
   <td><code>title</code></td>
   <td>Text to be displayed in a tooltip when hovering over the element.</td>
  </tr>
  <tr>
   <td><code>translate</code></td>
   <td>Specify whether an element’s attribute values and the values of
its <code> text. </td>
  </tr>
  <tr>
   <td><code>type</code></td>
   <td>Defines the type of the element.</td>
  </tr>
  <tr>
   <td><code>usemap</code></td>
   <td></td>
  </tr>
  <tr>
   <td><code>value</code></td>
   <td>Defines a default value which will be displayed in the element on page load.</td>
  </tr>
  <tr>
   <td><code>width</code></td>
   <td>
    <p>Establishes the element's width.</p>


   </td>
  </tr>
  <tr>
   <td><code>wrap</code></td>
   <td>Indicates whether the text should be wrapped.</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="Boolean_Attributes">Boolean Attributes</h2>

<p>Some content attributes (e.g. <code>required</code>, <code>readonly</code>, <code>disabled</code>) are called boolean attributes. If a boolean attribute is present, its value is <strong>true</strong>, and if it’s absent, its value is <strong>false</strong>.</p>

<p>HTML5 defines restrictions on the allowed values of boolean attributes: If the attribute is present, its value must either be the empty string (equivalently, the attribute may have an unassigned value), or a value that is an ASCII case-insensitive match for the attribute’s canonical name, with no leading or trailing whitespace. The following examples are valid ways to mark up a boolean attribute:</p>

<pre class="line-numbers language-html"><code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">itemscope</span><span class="token punctuation">&gt;</span></span> This is valid HTML but invalid XML. <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">itemscope</span><span class="token attr-value"><span class="token punctuation">=</span>itemscope</span><span class="token punctuation">&gt;</span></span> This is also valid HTML but invalid XML. <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">itemscope</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> This is valid HTML and also valid XML. <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">itemscope</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>itemscope<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> This is also valid HTML and XML, but perhaps a bit verbose. <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span></span></code></pre>

<p>To be clear, the values "<code>true</code>" and "<code>false</code>" are not allowed on boolean attributes. To represent a false value, the attribute has to be omitted altogether. This restriction clears up some common misunderstandings: With <code>checked="false"</code> for example, the element’s <code>checked</code> attribute would be interpreted as <strong>true</strong> because the attribute is present.</p>


</article>
