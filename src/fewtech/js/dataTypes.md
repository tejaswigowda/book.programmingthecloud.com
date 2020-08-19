# JS Data Types

JavaScript variables are **loosely typed**, that is the data type of a
variable can be changed at anytime. This is an important distinction
from other *strongly typed* languages such as C, C++ and Java.

## `var` Keyword

Since JS is loosely typed there is only one variable declaration type --
using the `var` keyword (as opposed to a language like C, which has
`int`, `float`, `char` and other variable types).

## `typeof` Operator
Even though there is only one type of variable declaration, JS does have
different data types. Loose typing allows for the same variable (think
of it as a container for values) to be reassigned to different data types.
The `typeof` operator allows us to inspect the datatype of the 
variable.

```js
var x;
typeof x; // undefined

x = 1;
typeof x; // number

x = "a string";
typeof x; // string
```


## Undefined
A variable that is yet to be assigned a value is of the type
**Undefined**. It holds the value `undefined`. 
<div class='notes'>

Note that the <b>Undefined</b> data type has only one value `undefined`.
</div>

## Numbers

When a varible is assigned a number (whether a whole number of a decimal
it is now holds the data type **Number**.

<div class='notes'>
Apart from <i>regular</i> whole numbers and decimals there are some special
<b>Number</b> values. For example:

```js
var x = 9/0; // Infinity
typeof x; // number

x = -x // - Infinity
typeof x; // number

x = 0/0 // NaN -- not a number
typeof x; // number
```
</div>

### Number Methods
Number is not an object (objects will be discussed in detail later),
but a variable with typeof "number" has
some methods associated with it.

### `toString()`
A number can be converted to its string representation by the
`toString()` method. 

```js
var x = 10;
y = x.toString();
typeof y; // string

x = 3.142;
y = x.toString();
typeof y; // string
```

This method also allows for conversion from one base to another.

```js
var x = 13;
y = x.toString(2); // 1101
z = x.toString(16); // d
```


### `toFixed()`
This function allows convertion to different precision strings

```js
var x = 13;
y = x.toFixed(2); // 13.00
z = x.toFixed(1); // 13.0
```

### `toExponential()`

This function converts numbers into its scientific notation string.

```js
var x = 13;
y = x.toExponential(2); // 1.30e+1
z = x.toExponential(1); // 1.3e+1
a = x.toExponential(0); // 1e+1
```


<div class='notes'>
<b>Other Number mainipulation Methods</b>

### `parseInt()`
This function converts strings to respective integers.

```js
parseInt("13"); // 13
parseInt("3.142"); // 3
parseInt("3slndv"); // 3
parseInt("3.14slndv"); // 3
```

### `parseFloat()`

```js
parseFloat("13"); // 13
parseFloat("3.142"); // 3.142
parseFloat("3slndv"); // 3
parseFloat("3.14slndv"); // 3.14
```




</div>


## String

String is a built in data-type in all JS interpreters. A String can be
assigned to any variable by the assignment (`=`) operator. A string
literal can be enclosed with either single or double quotes.

```js
var st = "a string"; // string assignment
var st1 = 'another string'; // string literals can use either single or
double quotes
```

Each element (character) of the string can be **indexed** by using its
**index**, or the position. Remember strings are zero-indexed i.e.
indexing starts with zero. Therfore `st[0]` refers to the first
character in a string, `st[1]` refers to the second character and so on.
The total number of characters can be accessed by the `length` property.

```js
var st = "a string"; 
var len = st.length; // 8
```
 
A string is also an object and has built-in methods. Let is look at a
few of them in action.

```js
var st = "a string";
var x = st.indexOf("s"); // 2

var words = st.split(" "); // [ "a", "string" ]

var aChar = st.charAt(6); // "n"

var charCode = st.charCodeAt(6); // 110 

```

A full list of String methods are listed below.
### String Methods

[<a href='../../bib.html#javascript-string-reference-w3schoolscom'> Ref.</a>]




<div style='overflow:auto'>
<table>
  <tbody><tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>charAt()</code></td>
    <td>Returns the character at the specified index (position)</td>
  </tr>
  <tr>
    <td><code>charCodeAt()</code></td>
    <td>Returns the Unicode of the character at the specified index</td>
  </tr>
  <tr>
    <td><code>concat()</code></td>
    <td>Joins two or more strings, and returns a new joined strings</td>
  </tr>
  <tr>
    <td><code>endsWith()</code></td>
    <td>Checks whether a string ends with specified string/characters</td>
  </tr>
  <tr>
    <td><code>fromCharCode()</code></td>
    <td>Converts Unicode values to characters</td>
  </tr>
    <tr>
    <td><code>includes()</code></td>
    <td>Checks whether a string contains the specified string/characters</td>
    </tr>
  <tr>
    <td><code>indexOf()</code></td>
    <td>Returns the position of the first found occurrence of a specified value in a string</td>
  </tr>
  <tr>
    <td><code>lastIndexOf()</code></td>
    <td>Returns the position of the last found occurrence of a specified value in a string</td>
  </tr>
  <tr>
    <td><code>localeCompare()</code></td>
    <td>Compares two strings in the current locale</td>
  </tr>
  <tr>
    <td><code>match()</code></td>
    <td>Searches a string for a match against a regular expression, and returns the matches</td>
  </tr>
    <tr>
    <td><code>repeat()</code></td>
    <td>Returns a new string with a specified number of copies of an existing string</td>
    </tr>
  <tr>
    <td><code>replace()</code></td>
    <td>Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced</td>
  </tr>
  <tr>
    <td><code>search()</code></td>
    <td>Searches a string for a specified value, or regular expression, and returns the position of the match</td>
  </tr>
  <tr>
    <td><code>slice()</code></td>
    <td>Extracts a part of a string and returns a new string</td>
  </tr>
    <tr>
    <td><code>split()</code></td>
    <td>Splits a string into an array of substrings</td>
    </tr>
  <tr>
    <td><code>startsWith()</code></td>
    <td>Checks whether a string begins with specified characters</td>
  </tr>
  <tr>
    <td><code>substr()</code></td>
    <td>Extracts the characters from a string, beginning at a specified start position, and through the specified number of character</td>
  </tr>
  <tr>
    <td><code>substring()</code></td>
    <td>Extracts the characters from a string, between two specified indices</td>
  </tr>
  <tr>
    <td><code>toLocaleLowerCase()</code></td>
    <td>Converts a string to lowercase letters, according to the host's locale</td>
  </tr>
  <tr>
    <td><code>toLocaleUpperCase()</code></td>
    <td>Converts a string to uppercase letters, according to the host's locale</td>
  </tr>
  <tr>
    <td><code>toLowerCase()</code></td>
    <td>Converts a string to lowercase letters</td>
  </tr>
  <tr>
    <td><code>toString()</code></td>
    <td>Returns the value of a String object</td>
  </tr>
  <tr>
    <td><code>toUpperCase()</code></td>
    <td>Converts a string to uppercase letters</td>
  </tr>
  <tr>
    <td><code>trim()</code></td>
    <td>Removes whitespace from both ends of a string</td>
  </tr>
  <tr>
    <td><code>valueOf()</code></td>
    <td>Returns the primitive value of a String object</td>
  </tr>
</tbody></table>
</div>

## Arrays
Arrays are another built in data-type that allows the programmer to
manage lists. Unlike strings, which only allows characters to be part of
the list, arrays can have any valid JS value(variable/literal) as members.
Similar to string, the number of list members can be accessed via the
`length` property.

```js
var arr = ["a", 1, "a string", 3.14];
var len = arr.length; // 4
```

### Array Methods 

[<a href='../../bib.html#javascript-array-reference-w3schoolscom'> Ref.</a>]

<div style='overflow:auto'>
<table>
  <tbody><tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>concat()</code></td>
    <td>Joins two or more arrays, and returns a copy of the joined arrays</td>
  </tr>
  <tr>
    <td><code>copyWithin()</code></td>
    <td>Copies array elements within the array, to and from specified positions</td>
  </tr>
  <tr>
    <td><code>entries()</code></td>
    <td>Returns a key/value pair Array Iteration Object</td>
    </tr>
  <tr>
    <td><code>every()</code></td>
    <td>Checks if every element in an array pass a test</td>
    </tr>
    <tr>
    <td><code>fill()</code></td>
    <td>Fill the elements in an array with a static value</td>
    </tr>
    <tr>
    <td><code>filter()</code></td>
    <td>Creates a new array with every element in an array that pass a test</td>
    </tr>
    <tr>
    <td><code>find()</code></td>
    <td>Returns the value of the first element in an array that pass a test</td>
    </tr>
    <tr>
    <td><code>findIndex()</code></td>
    <td>Returns the index of the first element in an array that pass a test</td>
    </tr>
  <tr>
    <td><code>forEach()</code></td>
    <td>Calls a function for each array element</td>
    </tr>
  <tr>
    <td><code>from()</code></td>
    <td>Creates an array from an object</td>
    </tr>
  <tr>
    <td><code>includes()</code></td>
    <td>Check if an array contains the specified element</td>
    </tr>
    <tr>
    <td><code>indexOf()</code></td>
    <td>Search the array for an element and returns its position</td>
    </tr>
  <tr>
    <td><code>isArray()</code></td>
    <td>Checks whether an object is an array</td>
    </tr>
  <tr>
    <td><code>join()</code></td>
    <td>Joins all elements of an array into a string</td>
    </tr>
  <tr>
    <td><code>keys()</code></td>
    <td>Returns a Array Iteration Object, containing the keys of the original array</td>
    </tr>
  <tr>
    <td><code>lastIndexOf()</code></td>
    <td>Search the array for an element, starting at the end, and returns its position</td>
    </tr>
    <tr>
    <td><code>map()</code></td>
    <td>Creates a new array with the result of calling a function for each array element</td>
    </tr>
  <tr>
    <td><code>pop()</code></td>
    <td>Removes the last element of an array, and returns that element</td>
    </tr>
  <tr>
    <td><code>push()</code></td>
    <td>Adds new elements to the end of an array, and returns the new length</td>
    </tr>
    <tr>
    <td><code>reduce()</code></td>
    <td>Reduce the values of an array to a single value (going left-to-right)</td>
    </tr>
    <tr>
    <td><code>reduceRight()</code></td>
    <td>Reduce the values of an array to a single value (going right-to-left)</td>
    </tr>
  <tr>
    <td><code>reverse()</code></td>
    <td>Reverses the order of the elements in an array</td>
    </tr>
  <tr>
    <td><code>shift()</code></td>
    <td>Removes the first element of an array, and returns that element</td>
    </tr>
  <tr>
    <td><code>slice()</code></td>
    <td>Selects a part of an array, and returns the new array</td>
    </tr>
  <tr>
    <td><code>some()</code></td>
    <td>Checks if any of the elements in an array pass a test</td>
    </tr>
  <tr>
    <td><code>sort()</code></td>
    <td>Sorts the elements of an array</td>
    </tr>
  <tr>
    <td><code>splice()</code></td>
    <td>Adds/Removes elements from an array</td>
    </tr>
  <tr>
    <td><code>toString()</code></td>
    <td>Converts an array to a string, and returns the result</td>
    </tr>
  <tr>
    <td><code>unshift()</code></td>
    <td>Adds new elements to the beginning of an array, and returns the new length</td>
    </tr>
  <tr>
    <td><code>valueOf()</code></td>
    <td>Returns the primitive value of an array</td>
    </tr>
</tbody></table>

</div>


## Boolean

The **Boolean** data type contains 2 values `true` and `false`;

```js
var x = true;
typeof x // boolean

x = false;
typeof x // boolean
```

Before continuing with more complex data-types (objects) and functions
we will now look at more operators and programming constructs used in
JavaScript.
