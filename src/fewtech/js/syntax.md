# JS Syntax
A JS *program* is a list of JS statements. Each statement is interpreted
on the console one at a time.
Each statement is delimited from another by either a semicolon (`;`) or
a newline.


A Javascript program is read top-to-bottom, left-to-right. This is known
as the **execution sequence**. Programming involves manipulating the
execution sequence in order to achieve specific computational tasks.

## Statements
JS statements are made up of:

1. **Keywords**: Keywords are special words that provide commands to the
   interpreter. Keywords cannot be overloaded (i.e. used as variable
names).

The following is the list of JS keywords (an incomplete list; new keywords are added to JS
on a regular basis):
```html
break, case, catch, continue, debugger, default,
delete, do, else, finally, for, function, if,
in, instanceof, new, return, switch, this, throw, 
try, typeof, var, void, while, with
```

This is not a complete list as JS continues to evolve and new keywords can be added.


2. **Values**: Values can either be fixed or variable. Fixed values are
   called *literals* and variable values are called *variables*.

 Example of literals include constants like `1`, `100`, `3.142` etc.

Variables are subject to the *variable lifecycle* that includes (in that
order) -- **declaration**, **definition** and **usage**.

A variable is declared in a JS statement by using the `var` keyword.
For e.g.:

```js
var x;
```

Multiple variables can also be declared in one statement:
```js
var x,y,z;
```

These statements serve the purpose of "declaring" these variables to the
interpreter. JS does not require a declaration statement, but it is best
practice to use these declarative statements, to ensure readability and
ease of debugging.

The next stage in the lifecycle of a variable is *definition*. A
variable is defined using the assignment (`=`) operator. For example:

```js
x = 10;
y = "test string"
```

Once a variable is defined (it is `undefined` by default) it can be used
as a placeholder for value. e.g.:

```js
z = x + y;
```

3. **Operators**: Operators are special characters (similar to
   mathematical operators) that specify a particular operation to the
interpreter. The following is the list of basic operators:

<table>
<tbody>
<tr>
<th style="width:25%">Operator</th>
<th>Description</th>
</tr>
<tr>
<td>=</td>
<td>Assignment</td>
</tr>
<tr>
<td>+</td>
<td>Addition</td>
</tr>
<tr>
<td>-</td>
<td>Subtraction</td>
</tr>
<tr>
<td>*</td>
<td>Multiplication</td>
</tr>
<tr>
<td>**</td>
<td>Exponentiation </td>
</tr>
<tr>
<td>/</td>
<td>Division</td>
</tr>
<tr>
<td>%</td>
<td>Modulus (Division Remainder)</td>
</tr>
</tbody></table>

 <figcaption> Table: 6.1.1 Binary Operators</figcaption>               

<div class='notes'>
Operators can be classified (based on the number of operands) as: 
 
  - *Unary Operators*: These operators take in one operand as input. Some examples
are:

<table><tbody>
<tr>
<th style="width:25%">Operator</th>
<th>Description</th>
</tr>
<tr>
<td>++</td>
<td>Increment</td>
</tr>
<tr>
<td>--</td>
<td>Decrement</td>
</tr>
</tbody></table>

 <figcaption> Table: 6.1.2 Unary Operators</figcaption>               

  - *Binary Operators*: Binary operators require 2 operands. All 
standard examples mentioned before (Table 6.1.1) are binary operators. The following
as some special binary assignment operators:

<table class="">
<tbody><tr>
<th style="width:25%">Operator</th>
<th>Example</th>
<th>Same As</th>
</tr>
<tr>
<td>=</td>
<td>x = y</td>
<td>x = y</td>
</tr>
<tr>
<td>+=</td>
<td>x += y</td>
<td>x = x + y</td>
</tr>
<tr>
<td>-=</td>
<td>x -= y</td>
<td>x = x - y</td>
</tr>
<tr>
<td>*=</td>
<td>x *= y</td>
<td>x = x * y</td>
</tr>
<tr>
<td>/=</td>
<td>x /= y</td>
<td>x = x / y</td>
</tr>
  <tr>
<td>%=</td>
<td>x %= y</td>
<td>x = x % y</td>
  </tr>
<tr>
<td>**=</td>
<td>x **= y</td>
<td>x = x ** y</td>
</tr>
</tbody></table>
    
 <figcaption> Table: 6.1.3 Binary Assignment Operators</figcaption>               

  - *Ternary Operators*:
JavaScript supports one ternary operator -- `?:`. It can be combined
with an assignment operator to assign different values. For example:

```js
var fee = (age > 18) ? '$12.00' : '$2.00'
```

The variable fee will be assigned to `'$12.00'` if `age > 18` and will
be assigned a value of `'$2.00'` otherwise.


</div>

4. **Expressions**: JS expressions are statements that combine operators
   and operands (literals and variables). We have seen examples of this before. Here are more:

```js
x = 6 + 8 + z;
y = a++ * 10;
```

5. **Comments**: JavaScript supports both single-line and multi-line
   comments. Single line comments begin with a `//` and are delimited by
the end of line. Multiple line comments start with `/*` and end with
`*/`.

```js
// This is a single line comment

/*
This is 
a multi-line
comment
*/
```




## Variable Names

JS variable does not have to be single characters like `x`, `y`, `z`
etc. But can be anything as long as the following rules are followed:

1. The variable name can contain numbers, alphabets (alpha-numeric),
   underscore(`_`) and dollar sign (`$`).
2. The first character of a variable has to be an alphabet,
   underscore(`_`) or dollar sign(`$`).
3. Variables canot be a JS reserved keyword.



<div class='notes'>

- Variable names are case sensitive. Therefore `age`, `Age` and `AGE` are
3 distinct variables.
- Variable names cannot start with numbers.
- Variable names cannot contain spaces. Use camel-case or underscores to
ensure readability of multiple word variable names (e.g.: `maxValue` or
`max_value`).
- There is no length limit on JS variable names (a good rule-of-thumb is
to limit it to 32 characters).
</div>
