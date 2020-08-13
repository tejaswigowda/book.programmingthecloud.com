# Sorting

With JSON data and JS arrays, dorting based on a particular key becomes
an useful operation. In this section we discuss the basics of sorting by
looking at **bubbule sort** as a standard sorting algorithm. 

## Bubble Sort

Bubble Sort is a sorting algorithm that sorts the array two members at
a time. The idea of bubble sort is simple -- look at two adjacent
elements in the array; *are they sorted?*. If already sorted then do
nothing; if unsorted swap the position of the 2 elements.

 <img style="display:block;margin:auto" src='../../../imgs/sortingAlg.png'>    
 <figcaption> Fig: 7.2.1 Sorting Logic </figcaption>               

*How many passes (iterations) of the array is needed?* -- no more than
the size of the array. Let us look at sorting an array `[6,5,3,1,8,7,2,4]`

```js
var arr = [6,5,3,1,8,7,2,4];
for (var i = 0; i < arr.length; i++){
  for (var j = 0; j < arr.length -i; j++){
    if(arr[j]>arr[j+1]){
      var temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}

console.log(arr);
```

This process is visualized below [<a
href='../../bib.html#contributors-to-wikimedia-projects-simple-sorting-algorithm-wikipediaorg'>Ref.</a>]:
 <img style="display:block;margin:auto" src='../../../imgs/Bubble-sort-example-300px.gif'>    


## Other Sorting Algorithms
Bubble Sort is just one of the many different sorting algorithms. The
similarity between all these is that they all employ the *sorting
operator*. They differ in only how they traverse and iterate over
arrays. Therefore the key to any sorting is the comparison operator.


## Sorting Js Arrays

JS array has a built in `sort()` method. An array can be sorted like so:

```js
var arr = [6,5,3,1,8,7,2,4];
arr.sort();
```

The above invocation of `sort()` uses the default sorting function
`function(a,b){ return a > b }`, and is equivalent to:

```js
arr.sort(function(a,b){ return a > b });
```

To sort the array in decending order we reverse the sorting function.

```js
arr.sort(function(a,b){ return a < b });
```

