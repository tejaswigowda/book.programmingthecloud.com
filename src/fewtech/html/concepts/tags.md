# Tags

Tags are used to <b> mark up </b> content; this is where "markup
language" in HTML's acronym comes from. HTML is only one of the many
markup languages, and definitely the most popular one. In recent years a
new open standard for HTML is being created. This is called HTML5.
Everything discussed in here is current with this latest version of
HTML. 

A HTML tag has 3 parts
1. Start of Tag, written with the tag name within angle brackets
2. Content -- any valid html
3. End of Tag -- similar to start but the tag name has a forward slash
   (/) prefix.

```html
<TAG_NAME>

      content

</TAG_NAME>
```


Let us start by writing out first HTML.

```html
<!doctype html>

<html>
<head>
  <title> Hello World </title>
</head>
</body>
  <h1> Hello World </h1>
</body>
</html>
```

The first line in every html document is the "doctype tag". This tag is
stand alone (i.e. does not need to closed as it does not have content).
It is meta data to the browser that the file is an HTML file (browsers
rely on the file extension and also the doctype tag to determine if
valid html was served. However most browsers are forgiving if you forget
the doctype tag.


## Editing/ Viewing

Copy the above code and paste it into a new file (use atom if you don't
have a favorite code editor). Save the file as `index.html`. Serve this
file using ``http-server`` and open the URL in 
a browser. Notice the title of the browser tab -- it was what we
set (``Hello World``) as the content of the title tag. Try changing it
and see it change in the browser.



