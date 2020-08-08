# Slideshow Library

In this section we will discuss how to implement an library for creating
embeddable sildeshows using HTML/CSS and JS.

## Demo
 
<iframe style='border:1px dashed;width:
100%;height:400px;background:white'
src='https://tejaswigowda.github.io/PtC-slideShowLibrary/lib.html#https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Acer_diabolicum_9_%28medium_crop%29.jpg/320px-Acer_diabolicum_9_%28medium_crop%29.jpg,https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Delos_Museum_Mosaik_Dionysos_09.jpg/240px-Delos_Museum_Mosaik_Dionysos_09.jpg,https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/CSIRO_ScienceImage_3881_Five_Antennas_at_Narrabri_-_restoration1.jpg/800px-CSIRO_ScienceImage_3881_Five_Antennas_at_Narrabri_-_restoration1.jpg,https://upload.wikimedia.org/wikipedia/commons/1/1a/VIC0725Stevenson1944_%28cropped%29.jpg,https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Dáil_Chamber.jpg/320px-Dáil_Chamber.jpg,https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Sinustrombus_sinuatus%2C_Bohol%2C_Philippines.jpg/320px-Sinustrombus_sinuatus%2C_Bohol%2C_Philippines.jpg'> </iframe>

## Usage

In order to create an embeddable slideshow, create `<iframe>` with source as
`lib.html` with hash as a list of comma-seperated URLs to images.

Example:
```html
  <iframe src='lib.html#https://upload.wikimedia.org/wikipedia/commons/1/1a/VIC0725Stevenson1944_%28cropped%29.jpg,https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/D%C3%A1il_Chamber.jpg/320px-D%C3%A1il_Chamber.jpg,https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Sinustrombus_sinuatus%2C_Bohol%2C_Philippines.jpg/320px-Sinustrombus_sinuatus%2C_Bohol%2C_Philippines.jpg'> </iframe>
```


To run this example locally:
1.    $ git clone
      <https://github.com/tejaswigowda/PtC-slideShowLibrary.git>
2.    $ cd PtC-slideShowLibrary
3.    $ http-server -p 9005
4.    Open <http://127.0.0.1:9005> in browser.

## Implementation

The library is implemented in `lib.html` and the demonstration is in
`index.html`. Let us take a look at `lib.html` first:


<iframe style='border:1px dashed;width:
100%;height:400px;background:white'
src='https://www.onlinetool.io/gitoembed/widget?url=https%3A%2F%2Fgithub.com%2Ftejaswigowda%2FPtC-slideShowLibrary%2Fblob%2Fmaster%2Flib.html'
id=''></iframe>

The static markup for this example is straight-forward (lines `76-87`).
It included `<div id="imgWrapper">` that will be popluated by the slides
and `<div id="numWrapper">` that will hold the numbers of the slides.
There are also navigation buttons -- Next (line `85`) and Previous (line
`80`).



```html
  <body>
  <div id='imgWrapper'>
  </div>

  <button id='prev' onclick='goPrev()'> </button>

  <div id='numWrapper'>
  </div>

  <button id='next' onclick='goNext()'> </button>

    </body>
```

The CSS (lines `9-75` styles the slideshow. It makes sure that the
slides are placed one behind another (hidden, except the **current**
slide); the numbers indicating the number of slides is at the bottom,
and the previous and next arrows are to the left and right of the screen
respectively. Note that jQuery is also included via CDN (line `5`).

The JS is triggered after the  page loads (since it is after the
`<body>` tag) and first gets the list of images to be used in the slide
show (line `89`).

```js
var imgs = location.hash.replace("#","").split(",")
```

By iterating over the `imgs` variable the markup for the numbers at the
bottom are created at attached(lines `90-94`).

```js
var markup = "";
for(var i = 0; i < imgs.length; i++){
    markup = markup + "<button onclick='goToSlide(" + i + ")'>" + (i+1) + "</button>"
}
document.getElementById("numWrapper").innerHTML = markup;
```

Another iteration over the array of image URLs(`imgs`) creates the
markup for the slide show itself (lines `96-100`).

```js
var markup = "";
for(var i = 0; i < imgs.length; i++){
  markup = markup + "<div style='background-image:url(" + imgs[i] + ")'></div>"
}
document.getElementById("imgWrapper").innerHTML = markup;
```

The variable `currSlide` keeps track of the index of the current slide
(zero-indexed) (defined in line `102`).

```js
var currSlide = 0;
```

The function triggered by the user (by clicking the numbers on the
bottom is `goToSlide()`. This is defined
in lines `104-112`.

```js
var goToSlide = function(n){
  $("#imgWrapper div").css("opacity", 0);
  $($("#imgWrapper div")[n]).css("opacity", 1);


  currSlide = n;
  $("#numWrapper button").removeClass("active")
  $($("#numWrapper button")[currSlide]).addClass("active")
}
```


This function is also invoked by the `goPrev()` (invoked when user
clicks Previous button) and `goNext()` (invoked when user clicks Next
button). These functions are defined in lines `115-129`.

```js
var goPrev = function(){
  currSlide = currSlide - 1;
  if(currSlide < 0){
    currSlide = imgs.length - 1;
  }
  goToSlide(currSlide);
}

var goNext = function(){
  currSlide = currSlide + 1;
  if(currSlide > imgs.length - 1){
    currSlide = 0;
  }
  goToSlide(currSlide);
}
```

On line `114`, `goToSlide(0)` is called to initialize the slide show to
the first slide.
