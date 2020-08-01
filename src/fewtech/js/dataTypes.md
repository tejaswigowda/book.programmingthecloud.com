# JS Data Types

JavaScript variables are **loosely typed**, that is the data type of a
variable can be changed at anytime. This is an important distinction
from other *strongly typed* languages such as C, C++ and Java.

## `var` Keyword

Since Js is loosely typed there is only one variable declaration type --
using the `var` keyword.

## `typeof` operator
Even though there is only one type of variable declaration, Js does have
different dtat types. Loose typing allows for the same variable (think
of it as a container for values) to be reassigned to diffent data types.
The `typeof` operator allows us to inspect the datatype contained in a
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
Number is not an object (objects will be discussed in detail later), but
it does have some methods associated with it.

### `toFixed()`

### `toString()`

### `toExponential()`

### `toFixed()`

<div class='notes'>
<b>Other Number mainipulation Methods</b>

### `parseInt()`


### `parseFloat()`


</div>


## Boolean

The **Boolean** data type contains 2 values `true` and `false`;

```js
var x = true;
typeof x // boolean

x = false;
typeof x // boolean
```


## String

### String Methods

<table class="w3-table-all notranslate">
  <tbody><tr>
    <th style="width:24%">Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>charAt()</td>
    <td>Returns the character at the specified index (position)</td>
  </tr>
  <tr>
    <td>charCodeAt()</td>
    <td>Returns the Unicode of the character at the specified index</td>
  </tr>
  <tr>
    <td>concat()</td>
    <td>Joins two or more strings, and returns a new joined strings</td>
  </tr>
  <tr>
    <td>endsWith()</td>
    <td>Checks whether a string ends with specified string/characters</td>
  </tr>
  <tr>
    <td>fromCharCode()</td>
    <td>Converts Unicode values to characters</td>
  </tr>
    <tr>
    <td>includes()</td>
    <td>Checks whether a string contains the specified string/characters</td>
    </tr>
  <tr>
    <td>indexOf()</td>
    <td>Returns the position of the first found occurrence of a specified value in a string</td>
  </tr>
  <tr>
    <td>lastIndexOf()</td>
    <td>Returns the position of the last found occurrence of a specified value in a string</td>
  </tr>
  <tr>
    <td>localeCompare()</td>
    <td>Compares two strings in the current locale</td>
  </tr>
  <tr>
    <td>match()</td>
    <td>Searches a string for a match against a regular expression, and returns the matches</td>
  </tr>
    <tr>
    <td>repeat()</td>
    <td>Returns a new string with a specified number of copies of an existing string</td>
    </tr>
  <tr>
    <td>replace()</td>
    <td>Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced</td>
  </tr>
  <tr>
    <td>search()</td>
    <td>Searches a string for a specified value, or regular expression, and returns the position of the match</td>
  </tr>
  <tr>
    <td>slice()</td>
    <td>Extracts a part of a string and returns a new string</td>
  </tr>
    <tr>
    <td>split()</td>
    <td>Splits a string into an array of substrings</td>
    </tr>
  <tr>
    <td>startsWith()</td>
    <td>Checks whether a string begins with specified characters</td>
  </tr>
  <tr>
    <td>substr()</td>
    <td>Extracts the characters from a string, beginning at a specified start position, and through the specified number of character</td>
  </tr>
  <tr>
    <td>substring()</td>
    <td>Extracts the characters from a string, between two specified indices</td>
  </tr>
  <tr>
    <td>toLocaleLowerCase()</td>
    <td>Converts a string to lowercase letters, according to the host's locale</td>
  </tr>
  <tr>
    <td>toLocaleUpperCase()</td>
    <td>Converts a string to uppercase letters, according to the host's locale</td>
  </tr>
  <tr>
    <td>toLowerCase()</td>
    <td>Converts a string to lowercase letters</td>
  </tr>
  <tr>
    <td>toString()</td>
    <td>Returns the value of a String object</td>
  </tr>
  <tr>
    <td>toUpperCase()</td>
    <td>Converts a string to uppercase letters</td>
  </tr>
  <tr>
    <td>trim()</td>
    <td>Removes whitespace from both ends of a string</td>
  </tr>
  <tr>
    <td>valueOf()</td>
    <td>Returns the primitive value of a String object</td>
  </tr>
</tbody></table>


## Arrays

### Array Methods

<table class="w3-table-all notranslate">
  <tbody><tr>
    <th style="width:20%">Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>concat()</td>
    <td>Joins two or more arrays, and returns a copy of the joined arrays</td>
  </tr>
  <tr>
    <td>copyWithin()</td>
    <td>Copies array elements within the array, to and from specified positions</td>
  </tr>
  <tr>
    <td>entries()</td>
    <td>Returns a key/value pair Array Iteration Object</td>
    </tr>
  <tr>
    <td>every()</td>
    <td>Checks if every element in an array pass a test</td>
    </tr>
    <tr>
    <td>fill()</td>
    <td>Fill the elements in an array with a static value</td>
    </tr>
    <tr>
    <td>filter()</td>
    <td>Creates a new array with every element in an array that pass a test</td>
    </tr>
    <tr>
    <td>find()</td>
    <td>Returns the value of the first element in an array that pass a test</td>
    </tr>
    <tr>
    <td>findIndex()</td>
    <td>Returns the index of the first element in an array that pass a test</td>
    </tr>
  <tr>
    <td>forEach()</td>
    <td>Calls a function for each array element</td>
    </tr>
  <tr>
    <td>from()</td>
    <td>Creates an array from an object</td>
    </tr>
  <tr>
    <td>includes()</td>
    <td>Check if an array contains the specified element</td>
    </tr>
    <tr>
    <td>indexOf()</td>
    <td>Search the array for an element and returns its position</td>
    </tr>
  <tr>
    <td>isArray()</td>
    <td>Checks whether an object is an array</td>
    </tr>
  <tr>
    <td>join()</td>
    <td>Joins all elements of an array into a string</td>
    </tr>
  <tr>
    <td>keys()</td>
    <td>Returns a Array Iteration Object, containing the keys of the original array</td>
    </tr>
  <tr>
    <td>lastIndexOf()</td>
    <td>Search the array for an element, starting at the end, and returns its position</td>
    </tr>
    <tr>
    <td>map()</td>
    <td>Creates a new array with the result of calling a function for each array element</td>
    </tr>
  <tr>
    <td>pop()</td>
    <td>Removes the last element of an array, and returns that element</td>
    </tr>
  <tr>
    <td>push()</td>
    <td>Adds new elements to the end of an array, and returns the new length</td>
    </tr>
    <tr>
    <td>reduce()</td>
    <td>Reduce the values of an array to a single value (going left-to-right)</td>
    </tr>
    <tr>
    <td>reduceRight()</td>
    <td>Reduce the values of an array to a single value (going right-to-left)</td>
    </tr>
  <tr>
    <td>reverse()</td>
    <td>Reverses the order of the elements in an array</td>
    </tr>
  <tr>
    <td>shift()</td>
    <td>Removes the first element of an array, and returns that element</td>
    </tr>
  <tr>
    <td>slice()</td>
    <td>Selects a part of an array, and returns the new array</td>
    </tr>
  <tr>
    <td>some()</td>
    <td>Checks if any of the elements in an array pass a test</td>
    </tr>
  <tr>
    <td>sort()</td>
    <td>Sorts the elements of an array</td>
    </tr>
  <tr>
    <td>splice()</td>
    <td>Adds/Removes elements from an array</td>
    </tr>
  <tr>
    <td>toString()</td>
    <td>Converts an array to a string, and returns the result</td>
    </tr>
  <tr>
    <td>unshift()</td>
    <td>Adds new elements to the beginning of an array, and returns the new length</td>
    </tr>
  <tr>
    <td>valueOf()</td>
    <td>Returns the primitive value of an array</td>
    </tr>
</tbody></table>
