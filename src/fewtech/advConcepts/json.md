#

<div class='notes'>

Please complete the section of <a href='../../fewtech/js/objects.html'>JS Objects</a> before continuing.


</div>

# JSON


JavaScript Object Notation (JSON) is exactly what the name implies -- it
is representing data as JS Objects. Therefore JSON syntax is identical
to the object definition syntax.


```js
// JSON Syntax
{
    property_1:   value_1,   // property_# may be an identifier...
    2:            value_2,   // or a number...
    // ...,
    'property n': value_n   // or a string
}; 
```


In practice JSON is a file that
holds the string that defines the JS Object. 

To make it easy to work
with JSON, JS Intepretors have a build in `JSON` Object. It has two
important static methods -- `JSON.parse()` and `JSON.stringify()` that
allow to parse a JSON String into an Object and vice-versa respectively.

```js
var obj = {
  name: "Jane Doe",
  classes:[ "Programming the Web", "Database Management", "Operating Systems"],
  school: "ABC Academy" 
}

var jsonString = JSON.stringify(obj); 
  // '{"name":"Jane Doe","classes":["Programming the Web","Database Management","Operating Systems"],"school":"ABC Academy"}'

var objCopy = JSON.parse(jsonString); 
```

JSON is strictly a data-interchange format, and can hold any data-type
with the exception of `functions`.

