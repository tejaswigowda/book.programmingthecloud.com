# More on Operators
The JavaScript execution sequence is one statement at-a-time,
left-to-right (like we would read English). However operators and
certain programming constructs(`if/else`, `for`, `while` etc.) can alter
this. We now look at how operators affect the execution sequence.

## Operator Precedence
Consider the assignment operator:

```
var x = 2 + 3;
```

The assignment operator has 2 operands, commonly known as the
left-hand-side (`var x`) and the right-hand-side (`2 + 3`).
The default execution sequence dicatates that the left-hand-side be
evaluated by the interpreter first. The assignment operator changes
this. It dictates that the right-hand-side is evaluated first. Thus the
expression `2 + 3` is evaluated (`5`) and then is **assigned** to the
left-hand-side. That is, the variable declaration and assignment happens
after the right-hand-side expression is evaluated.

All other operators also alter the execution sequence. The interpreter
uses the precedence order to evaluate operators. The following table
lists the precedence of each JS operator.

<div style='overflow:auto'>

<table class="fullwidth-table">
 <tbody>
  <tr>
   <th>Precedence</th>
   <th>Operator type</th>
   <th>Associativity</th>
   <th>Individual operators</th>
  </tr>
  <tr>
   <td>21</td>
   <td>Grouping</td>
   <td>n/a</td>
   <td><code>( … )</code></td>
  </tr>
  <tr>
   <td colspan="1" rowspan="5">20</td>
   <td>Member Access</td>
   <td>left-to-right</td>
   <td><code>… . …</code></td>
  </tr>
  <tr>
   <td>Computed Member Access</td>
   <td>left-to-right</td>
   <td><code>… [ … ]</code></td>
  </tr>
  <tr>
   <td><code>new</code> (with argument list)</td>
   <td>n/a</td>
   <td><code>new … ( … )</code></td>
  </tr>
  <tr>
   <td>Function Call</td>
   <td>left-to-right</td>
   <td><code>… ( <var>… </var>)</code></td>
  </tr>
  <tr>
   <td>Optional chaining</td>
   <td>left-to-right</td>
   <td><code>?.</code></td>
  </tr>
  <tr>
   <td rowspan="1">19</td>
   <td><code>new</code> (without argument list)</td>
   <td>right-to-left</td>
   <td><code>new …</code></td>
  </tr>
  <tr>
   <td rowspan="2">18</td>
   <td>Postfix Increment</td>
   <td colspan="1" rowspan="2">n/a</td>
   <td><code>… ++</code></td>
  </tr>
  <tr>
   <td>Postfix Decrement</td>
   <td><code>… --</code></td>
  </tr>
  <tr>
   <td colspan="1" rowspan="10">17</td>
   <td>Logical NOT</td>
   <td colspan="1" rowspan="10">right-to-left</td>
   <td><code>! …</code></td>
  </tr>
  <tr>
   <td>Bitwise NOT</td>
   <td><code>~ …</code></td>
  </tr>
  <tr>
   <td>Unary Plus</td>
   <td><code>+ …</code></td>
  </tr>
  <tr>
   <td>Unary Negation</td>
   <td><code>- …</code></td>
  </tr>
  <tr>
   <td>Prefix Increment</td>
   <td><code>++ …</code></td>
  </tr>
  <tr>
   <td>Prefix Decrement</td>
   <td><code>-- …</code></td>
  </tr>
  <tr>
   <td><code>typeof</code></td>
   <td><code>typeof …</code></td>
  </tr>
  <tr>
   <td><code>void</code></td>
   <td><code>void …</code></td>
  </tr>
  <tr>
   <td><code>delete</code></td>
   <td><code>delete …</code></td>
  </tr>
  <tr>
   <td><code>await</code></td>
   <td><code>await …</code></td>
  </tr>
  <tr>
   <td>16</td>
   <td>Exponentiation</td>
   <td>right-to-left</td>
   <td><code>… ** …</code></td>
  </tr>
  <tr>
   <td rowspan="3">15</td>
   <td>Multiplication</td>
   <td colspan="1" rowspan="3">left-to-right</td>
   <td><code>… * …</code></td>
  </tr>
  <tr>
   <td>Division</td>
   <td><code>… / …</code></td>
  </tr>
  <tr>
   <td>Remainder</td>
   <td><code>… % …</code></td>
  </tr>
  <tr>
   <td rowspan="2">14</td>
   <td>Addition</td>
   <td colspan="1" rowspan="2">left-to-right</td>
   <td><code>… + …</code></td>
  </tr>
  <tr>
   <td>Subtraction</td>
   <td><code>… - …</code></td>
  </tr>
  <tr>
   <td rowspan="3">13</td>
   <td>Bitwise Left Shift</td>
   <td colspan="1" rowspan="3">left-to-right</td>
   <td><code>… &lt;&lt; …</code></td>
  </tr>
  <tr>
   <td>Bitwise Right Shift</td>
   <td><code>… &gt;&gt; …</code></td>
  </tr>
  <tr>
   <td>Bitwise Unsigned Right Shift</td>
   <td><code>… &gt;&gt;&gt; …</code></td>
  </tr>
  <tr>
   <td rowspan="6">12</td>
   <td>Less Than</td>
   <td colspan="1" rowspan="6">left-to-right</td>
   <td><code>… &lt; …</code></td>
  </tr>
  <tr>
   <td>Less Than Or Equal</td>
   <td><code>… &lt;= …</code></td>
  </tr>
  <tr>
   <td>Greater Than</td>
   <td><code>… &gt; …</code></td>
  </tr>
  <tr>
   <td>Greater Than Or Equal</td>
   <td><code>… &gt;= …</code></td>
  </tr>
  <tr>
   <td><code>in</code></td>
   <td><code>… in …</code></td>
  </tr>
  <tr>
   <td><code>instanceof</code></td>
   <td><code>… instanceof …</code></td>
  </tr>
  <tr>
   <td rowspan="4">11</td>
   <td>Equality</td>
   <td colspan="1" rowspan="4">left-to-right</td>
   <td><code>… == …</code></td>
  </tr>
  <tr>
   <td>Inequality</td>
   <td><code>… != …</code></td>
  </tr>
  <tr>
   <td>Strict Equality</td>
   <td><code>… === …</code></td>
  </tr>
  <tr>
   <td>Strict Inequality</td>
   <td><code>… !== …</code></td>
  </tr>
  <tr>
   <td>10</td>
   <td>Bitwise AND</td>
   <td>left-to-right</td>
   <td><code>… &amp; …</code></td>
  </tr>
  <tr>
   <td>9</td>
   <td>Bitwise XOR</td>
   <td>left-to-right</td>
   <td><code>… ^ …</code></td>
  </tr>
  <tr>
   <td>8</td>
   <td>Bitwise OR</td>
   <td>left-to-right</td>
   <td><code>… | …</code></td>
  </tr>
  <tr>
   <td>7</td>
   <td>Logical AND</td>
   <td>left-to-right</td>
   <td><code>… &amp;&amp; …</code></td>
  </tr>
  <tr>
   <td>6</td>
   <td>Logical OR</td>
   <td>left-to-right</td>
   <td><code>… || …</code></td>
  </tr>
  <tr>
   <td>5</td>
   <td>Nullish coalescing operator</td>
   <td>left-to-right</td>
   <td><code>… ?? …</code></td>
  </tr>
  <tr>
   <td>4</td>
   <td>Conditional</td>
   <td>right-to-left</td>
   <td><code>… ? … : …</code></td>
  </tr>
  <tr>
   <td rowspan="16">3</td>
   <td rowspan="16">Assignment</td>
   <td rowspan="16">right-to-left</td>
   <td><code>… = …</code></td>
  </tr>
  <tr>
   <td><code>… += …</code></td>
  </tr>
  <tr>
   <td><code>… -= …</code></td>
  </tr>
  <tr>
   <td><code>… **= …</code></td>
  </tr>
  <tr>
   <td><code>… *= …</code></td>
  </tr>
  <tr>
   <td><code>… /= …</code></td>
  </tr>
  <tr>
   <td><code>… %= …</code></td>
  </tr>
  <tr>
   <td><code>… &lt;&lt;= …</code></td>
  </tr>
  <tr>
   <td><code>… &gt;&gt;= …</code></td>
  </tr>
  <tr>
   <td><code>… &gt;&gt;&gt;= …</code></td>
  </tr>
  <tr>
   <td><code>… &amp;= …</code></td>
  </tr>
  <tr>
   <td><code>… ^= …</code></td>
  </tr>
  <tr>
   <td><code>… |= …</code></td>
  </tr>
  <tr>
   <td><code>… &amp;&amp;= …</code></td>
  </tr>
  <tr>
   <td><code>… ||= …</code></td>
  </tr>
  <tr>
   <td><code>… ??= …</code></td>
  </tr>
  <tr>
   <td rowspan="2">2</td>
   <td><code>yield</code></td>
   <td colspan="1" rowspan="2">right-to-left</td>
   <td><code>yield …</code></td>
  </tr>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/yield*"><code>yield*</code></td>
   <td><code>yield* …</code></td>
  </tr>
  <tr>
   <td>1</td>
   <td>Comma / Sequence</td>
   <td>left-to-right</td>
   <td><code>… , …</code></td>
  </tr>
 </tbody>
</table>

</div>

## Operator Polymorphism
The same operator can perform different operations depending on the
operands provided to it. This is known as operator polymorphism.

This concept is best explained using the addition(`+`) operator.

Look at the following examples:

```js
var num = 10;
var st = "hello";

typeof num; // "number"
typeof st; // "string"

var x = num + 20; // 30
typeof x; // "number"

var y = st + "world"; // "hello world"
typeof y; // "string"

var z = num + st; "10hello"
typeof z; // "string"

z = st + num; "hello10"
typeof z; // "string"
```

## Comparison Operators

These are binary operators that compare if the operands are *equal to*,
*greater than*, *less than* etc.

<div style='overflow:auto'>
<table>
 <thead>
  <tr>
   <th scope="col">Operator</th>
   <th scope="col">Description</th>
   <th scope="col">Examples returning true</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Equal (<code>==</code>)</td>
   <td>Returns <code>true</code> if the operands are equal.</td>
   <td><code>3 == var1</code>
    <p><code>"3" == var1</code></p>
    <code>3 == '3'</code></td>
  </tr>
  <tr>
   <td>Not equal (<code>!=</code>)</td>
   <td>Returns <code>true</code> if the operands are not equal.</td>
   <td><code>var1 != 4<br>
    var2 != "3"</code></td>
  </tr>
  <tr>
   <td>Strict equal (<code>===</code>)</td>
   <td>Returns <code>true</code> if the operands are equal and of the
same type.</td>
   <td><code>3 === var1</code></td>
  </tr>
  <tr>
   <td>Strict not equal (<code>!==</code>)</td>
   <td>Returns <code>true</code> if the operands are of the same type but not equal, or are of different type.</td>
   <td><code>var1 !== "3"<br>
    3 !== '3'</code></td>
  </tr>
  <tr>
   <td>Greater than (<code>&gt;</code>)</td>
   <td>Returns <code>true</code> if the left operand is greater than the right operand.</td>
   <td><code>var2 &gt; var1<br>
    "12" &gt; 2</code></td>
  </tr>
  <tr>
   <td>Greater than or equal (<code>&gt;=</code>)</td>
   <td>Returns <code>true</code> if the left operand is greater than or equal to the right operand.</td>
   <td><code>var2 &gt;= var1<br>
    var1 &gt;= 3</code></td>
  </tr>
  <tr>
   <td>Less than (<code>&lt;</code>)</td>
   <td>Returns <code>true</code> if the left operand is less than the right operand.</td>
   <td><code>var1 &lt; var2<br>
    "2" &lt; 12</code></td>
  </tr>
  <tr>
   <td>Less than or equal (<code>&lt;=</code>)</td>
   <td>Returns <code>true</code> if the left operand is less than or equal to the right operand.</td>
   <td><code>var1 &lt;= var2<br>
    var2 &lt;= 5</code></td>
  </tr>
 </tbody>
</table>

</div>

## Logical Operators

These operators can be used to combine 2 comparison operators. The
operands are Boolean (or else they are typecast to Boolean).

<div style='overflow:auto'>
<table>
<tbody><tr>
<th style="width:12%">Operator</th>
<th>Description</th>
<th>Example <code> var x = 9, y = 2;</code></th>
</tr>
<tr>
<td><code>&amp;&amp;</code></td>
<td>and</td>
<td> <code>(x &lt; 10 &amp;&amp; y &gt; 1)</code> is <code>true</code></td>
</tr>
<tr>
<td><code>||</code></td>
<td>or</td>
<td><code>(x == 5 || y == 5)</code> is <code>false</code></td>
</tr>
<tr>
<td><code>!</code></td>
<td>not</td>
<td> <code>!(x == y)</code> is <code>true</code></td>
</tr>
</tbody></table>

</div>
