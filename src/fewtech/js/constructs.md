# Decisions and Looping 

## Code Blocks
A code block is a group of JS statements that are enclosed in between curly braces
(`{}`). Certain code-blocks allow for modification of the execution
sequence in interesting ways -- decision making and iteration.

## `if(){}`/`else(){}`
The `if/else` construct lends itself to implementing binary decision
trees in JS. An if/else block has the following syntax:

```js
if( <CONDITION> ){
  // execute statements in block
  // if the <CONDITION> is true
}
else{
  // execute statements in block
  // if the <CONDITION> is false
}
```

The `<CONDITION>` can be any valid JS expression. Unlike other languages
the `<CONDITION>` does not have to strictly evaluate to a Boolean `true` or
`false`. The Interpreter will typecast the `<CONDITION>` to the nearest
Boolean value (Either `true` or `false`).

Consider the following example where different entry prices apply
depending on age.

```js
var entryPrice, moviePrice;
if(age < 3){
  entryPrice = 0;
  moviePrice = 0;
}
else if(age < 16){
  entryPrice = 10;
  moviePrice = 2;
}
else{
  entryPrice = 100;
  moviePrice = 20;
}

```

## `switch(){}`/`case`
This construct allows implementation of decision trees and is best
suited for more than 2 decison options. Consider the following example
of assigning grades:

```js
// score variable holds the percent score earned by student
var grade;
if(score < 60){
  grade = "D";
}
else if(score < 70){
  grade = "C";
}
else if(score < 90){
  grade = "B";
}
else{
  grade = "A";
}
```

This can also be implemented using `switch/case`:

```js
switch (score){
  case (score < 60):
    grade = "D";
    break;
  case (score < 70):
    grade = "C";
    break;
  case (score < 90):
    grade = "B";
    break;
  default:
    grade = "A";
    break;
}

```

<div class='notes'>

#### The <code>break</code> keyword

The <code>break</code> keyword exits the code block. It is necessary in `switch/case`
as without a <code>break</code> the execution continues into the next set of
statements.
</div>

## `while(){}` and `for(){}`
The two constructs allow for iteration. This will be explained by
iterating over an array to find the minimum and maximum value from a
list of values.

Consider the following list of values:

```js
var values = [3, 13, 14, 234, 12, 4, 13, 54, 64, 76, 65];
```

This list can be **iterated** using an index variable `i` and the
`while()`
loop as follows:

```js
var i = 0; // define an initialize the index variable
// JS arrays are zero-indexed

while(i < values.length){
  console.log(values[i]);
  i++; //equivalent to i = i + 1;
}
```

This same `while` loop can be written as a `for` loop as follows:

```js
for(var i = 0; i < values.length; i++){
  console.log(values[i]);
}
```

As you can observe the `for` loop combines the index initialization and
increment together with the conditional.

<div class='notes'>

  `while` and `for` are equivalent -- anything you can do with `while`
yiou can do with `for` and vice-versa.
</div>



Now let us look how we can find the minimum and maximum value of an
array using `while` and `for`.

```js
// Using while
var values = [3, 13, 14, 234, 12, 4, 13, 54, 64, 76, 65];
var min = Infinity;
var max = 0;
var i = 0;
while(i < values.length){
  if(values[i]>max){
    max = values[i];
  }
  if(values[i]<min){
    min = values[i];
  }
  i++;
}
```

```js
// Using for
var values = [3, 13, 14, 234, 12, 4, 13, 54, 64, 76, 65];
var min = Infinity;
var max = 0;
for(var i = 0; i < values.length; i++){
  if(values[i]>max){
    max = values[i];
  }
  if(values[i]<min){
    min = values[i];
  }
}
```

<div class='notes'>

The <code>continue</code> keyword

The <code>continue</code> keyword gets the control (execution sequence) to the end
of the code block.

Let us look at an example on how to use this. In this example we will
calculate the average of a list of values that are positive.

```js
var values = [-1, -5, 35, 43, 234, -67, 76, 64, 34, 77];
var sum = 0;
for (var i = 0; i < values.length; i++){
  if(values[i] < 0){
    continue;
  }
  sum = sum + values[i];
}
var avg = sum/values.length;
``` 
</div>
