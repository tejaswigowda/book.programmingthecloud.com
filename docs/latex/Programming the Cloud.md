# Programming the Cloud

**Programming the Cloud (PtC)** is a reference for learning by example the
following:

1. Front end web technologies ([HTML](https://www.w3schools.com/html/),
   [CSS](https://www.w3schools.com/css/) and
[JavaScript](https://www.w3schools.com/js/)).
2. [Full-stack](https://skillcrush.com/2017/02/27/front-end-back-end-full-stack/) architecture design.
3. Backend server using [Node.js](https://nodejs.org/en/).
4. Administrating and programming [mongoDb](https://www.mongodb.com/).
5. Building apps using [Cordova](https://cordova.apache.org/), [Capacitor](https://capacitor.ionicframework.com/) and [Electron](https://electronjs.org/).
6. Advanced JS concepts like the [event-model](https://en.wikipedia.org/wiki/Event_(computing)), [anonymous functions](https://en.wikibooks.org/wiki/JavaScript/Anonymous_functions), [callbacks](https://www.learn-js.org/en/Callbacks) etc.
7. Program internet/bluetooth enabled microcontrollers (focus on [esp32](https://www.espressif.com/en/products/hardware/esp32/overview)).
8. Design/implement [Voice UI](https://en.wikipedia.org/wiki/Voice_user_interface) for Amazon Echo, Google Nest etc.

<div style='text-align:right'>.... and much, much more.</div>


PtC is free and open source, you can find the source code on
[GitHub](https://github.com/tejaswigowda/programmingthecloud).
 Issues and feature
requests can be posted on the [GitHub issue
tracker](https://github.com/tejaswigowda/programmingthecloud/issues).

## License

"Programming the Cloud" book, all the source code, is released under the
[GNU General Public License v2](https://github.com/tejaswigowda/programmingthecloud/blob/master/LICENSE).

# Preliminaries

In this section we will develop a concept map and vocabulary that will
serve as a foundation for our discussion throughout this book. We will
first discuss the Client-Server Model; then learn where in the
"Programmer's model" of a computer these client and server programs reside.
We finally learn how these client-server programs communicate with each
other over the Internet using URLs.

By the end of this section you should have a working definition and
a concept map linking the following terms

- Client
- Server
- Computer
- Program
- Programmer's Model
- Port
- IP address
- URL
- Internet
- OSI Model
- HTTP
- HTTP request
- HTTP response
# The Client Server Model

The world wide web is build on top of the client server model. The
client server model consists of clients and servers that communicate
with each other. There are 2 rules in the client server protocol:

1. The client initiates contact with the server by sending a
   <b>request</b>.
  
2. The server (whose job is to <b>listen</b> to these client requests),
   processes the request and then sends a <b>response</b> back.

 <img style="display:block;margin:auto" src='../../imgs/clientServer.png'>    
 <figcaption> Fig: 1.1.1.1. The Client Server Model</figcaption>              

The server is an application program and can hence respond differently
based on the request URL <b>path</b>. For Eg: the URLs <https://google.com> and
<https://google.com/maps> both send a request to google.com, but based on the
path (if it has "maps" or not) a different page is <b>served</b>.

# Programmer's Model of a Computer

We now know that clients and servers can communicate with one another
using the client server model. But <i>where within the nodes of the Internet
(computers, phones, tablets) do clients and servers exist?</i>.

 <img style="display:block;margin:auto" src='../../imgs/pModel.png'>      
 <figcaption> Fig: 1.1.2.1. Programmer's model of a Computer</figcaption>   

Clients and servers are <b>applications</b> that reside in the application
layer of a computer (see Figure above). For eg. YouTube.com is a server which can be
accessed via a web browser (on computers and phones) or apps (also on
computers and phone). Other examples include GitHub.com, Slack,
Facebook, Google etc. All these "Internet Software" have a server and
client apps as part of their ecosystem. Developing and maintaining these
is referred to as <b>devops</b> (Developer Operations).

This book is a guide to train you in devops for Internet Software.
Chapter 3 of the book deals with deploying clients and servers on
Microcontrollers (small bare bones computers with no OS, but programmable
firmware).
# The Internet

We all have a working definition of what
<i>Internet</i> means to us. However, just like there are different ways to
visualize a computer (as seen in last section), the Internet can
defined using different deinitions. These definitions are related by a
hierarchy called the Open Systems Interconnection (OSI) Model. 


 <img style="display:block;margin:auto" src='../../imgs/iNet.png'>  
 <figcaption> Fig: 1.1.3.1. OSI Model of Internet</figcaption>        


To learn more about the OSI model please read this:
<https://en.wikipedia.org/wiki/OSI_model>
# Uniform Resource Locator (URL)


URL is how the client constructs the request sent to a server.
The client <i>addresses</i> the server and embed all the parameters of
the request in a URL. The Figures below shows an example of a URL, and
components that make up a URL.

 <img style="display:block;margin:auto" src='../../imgs/urlEg.png'>    
 <figcaption> Fig: 1.1.4.1 URL example</figcaption>                    

 <img style="display:block;margin:auto" src='../../imgs/ytURL.png'>    
 <figcaption> Fig: 1.1.4.3 Parts of a URL</figcaption>                 

The URL provides the following basic information in order to route the
request to the right server:

0. Protocol scheme (http or https in case of websites/apps).
1. IP address (or DNS name which resolves to an IP address), which is
   unique to every computer including the server.
2. Port. This allows request to be sent to different server programs on
   the same computer. Hidden in case of http/https and defaults to
80/443. 
3. Path, invoking the right request handler in the server.
4. a query string that provides arguments to the request handler in
   key-value pairs.


Routing these request correctly is what
makes youtube.com respond with the video. Depending on the video ID
(argument `v`) a
different video is served. A playlist is displayed if a valid `list`
argument is present. Try opeing the following 2 urls:
1. <https://www.youtube.com/watch?v=BKo3SBfjiX4&list=PLbpi6ZahtOH4iOdBSB7PLd079Nw9-2ep4>
2. <https://www.youtube.com/watch?v=BKo3SBfjiX4>


Can you notice the difference?

The Figure below shows the parts of a generic URL.

 <img style="display:block;margin:auto" src='../../imgs/urlGrammar.png'>    
 <figcaption> Fig: 1.1.4.2 URL Grammar</figcaption>                         



# Basic Skills

This section covers the basic skills needed to follow along the code
examples in this book. If unfamiliar using the command line the section
on Bash will introduce you to the BASH shell. This shell is available on
all major operating systems -- Linux, Mac OS and Windows, via git-bash.
Once we have some familiarity with the command line, we will learn to
use GIT for managing our code. The chapter ends with a discussion on
code editors and how to deploy code on remote machines.
# Using BASH

Bash is available by default on Mac and Linux and can be access via
git-bash (installed when git is installed) on Windows. Bash is a
"command line interpretor" meaning that it awaits your commands, usually
one line at a time and executes them.

You know you are in a bash shell if you see a dollar ($) prompt with a
blinking cursor awaiting your command.
<img style="display:block;margin:auto" src='../../imgs/bashBlink.gif'> 

Once you are at the bash prompt, you can find our who you are by typing
$ ``whoami``

This will print your username.

Next we can find out where in the filesystem we are by typing 
$ ``pwd``

This will print the <i> present working directory</i> (within file
system).

Here are some other basic commands to try out

1. $ ``ls``
      List the contents of the present working directory. You can also 

      - $``ls -a`` : lists all files including hidden ones.
      - $``ls -l`` : list files with details

2. $ ``cd <directory path>``
        Change directory. If no directory name is specified then
present working directory is set to your $HOME.


3. $ ``cat <filename>``
       Prints the contect of file `<filename>`.


4. $ ``man <command>``
      Prints the manual for `<command>`.



## Reference of basic commands
 
Use $`man <command>` to learn more about these commands and flags.

### basic shell 
 - clear : clear all previous commands' output text from the terminal
 - exit (or logout) : quits the shell
 - history : show a list of all past commands you have typed into this shell

### manage directories 
  - ls : list files in a directory
  - pwd : displays the shell's current working directory
  - cd : changes the shell's working directory to the given directory; can be a relative or absolute path
  - mkdir : creates a new directory with the given name
  - rmdir : removes the directory with the given name (the directory must be empty)

### file operations 
  - cp : copies a file/directory
  - mv : moves (or renames) a file/directory
  - rm : deletes a file
  - touch : update the last-modified time of a file (or create an empty file)
  - cat : output the contents of a file
  - more (or less) : output the contents of a file, one page at a time
  - head, tail : output the beginning or ending of a file
  - wc : output a count of the number of characters, lines, words, etc. in a file
  - du : report disk space used by a file/directory
  - diff : output differences between two files
  - chmod : change the permissions on a file or group of files
  - chown : change the owner of a file
  - chgrp : change the group associated with a file
  - umask : change the default permissions given to newly created files

### searching and sorting 
  - grep : search a file for a given string or expression
  - sort : convert an input into a sorted output
  - uniq : strip duplicate lines
  - find : search for files by name within a given directory
  - xargs : launch a command over each of a set of lines of input (often used with find)
  - locate : search for files by name on the entire system
  - which : shows the complete path of a command or file

### compression 
  - zip, unzip : create a .zip archive or extract its contents
  - tar : Unix archiving/de-archiving program
  - gzip, gunzip : GNU compression/decompression programs
  - bzip2, bunzip2 : improved compression/decompression programs

### system information 
  - date : outputs the current date/time
  - cal : outputs an ASCII calendar
  - uname : print information about the system
  - time : measure how long a program takes to run

### process management 
  - ps, jobs : list the processes you are running; every process has a unique integer id number (PID)
  - top : see what processes are using the most CPU/memory, and show system memory/CPU stats
  - kill : terminate a process
  - killall : terminate a group of processes by name
  - ^C or ^\ : (hotkey) terminates (kills) the currently running process
  - ^Z : (hotkey) suspends the currently running process
  - & : (special character) when & is placed at the end of a command, that command is run in the background (shell does not wait for the command to finish before returning to the input prompt)

### users
  - whoami : outputs your user name
  - passwd : changes your password
  - groups : list the groups to which a user belongs
  - sudo : execute a single command as the super-user
  - su : log in to a shell as the super-user

### network 
  - lynx : text-only web browser
  - ssh : connect to a remote Unix server
  - wget : download from a URL and save it to a file on the local hard drive
  - curl : download from a URL and output its contents to the console

### text editors 
  - vi, vim : good command line editor
  - emacs : a complicated text editor with a steep learning curve

### programming 
  - node : run a JavaScript program, or enter JS shell
  - javac, java, python, perl, ruby, gcc, sml, ... : compile or run programs in various other languages
# Node.js

Node.js is a JavaScripot Interpretor. In fact it is the same Interpretor
found in Chrome ([V8](https://v8.dev/)). Node.js however is used to
write server and desktop (command line) software.

## Installation
Download the lastes version: <https://nodejs.org/en/>

Install using the installer. On Mac OS if you are blocked (unidentified
developer etc.) Go to `System Preferences` -> `Security & Privacy` ->
`General` and click on the buttomn `Open Anyway`.

Once the installation is complete you can use Node.js in bash. Type

$ ``node``

To enter the JS shell.

To execute(interpret) a JS file

$ ``node <filename.js>``

To install node_modules

$ ``npm install <package_name>``


## http-server

 http-server is a command line server tool. It can turn any folder into
a static http-server. Once executed it prints out the URL where your
files can be accessed over http.

To install 

$ ``npm install http-server``

To use

$ ``http-server <folder_path>``

If no folder is specified then the `pwd` will be used.

You can also specify port number as:

$ ``http-server <folder_path> -p <port_no>``

# Browser Developer Tools

In order to bring up the development tools, right-click anywhere on the
html document. You should be able to choose <i>inspect</i> from the
context menu that appears.

 <img style="display:block;margin:auto" src='../../../imgs/inspect.png'>    
 <figcaption> Fig: 2.1.1.1. Trigger inspector for contect menu
(right-click)</figcaption>              

 <img style="display:block;margin:auto" src='../../../imgs/devTools.png'>    
 <figcaption> Fig: 2.1.1.2. Developer Tools
</figcaption>              


# Using GIT 
    
## Motivation

Why use Git? If you are interested in doing any/all of the following

1. Use GIT for maintaining your code/design project files.
2. Collaborate with teammates over the cloud (think Google docs but for project files).
3. Better than backups:
   <https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F> (GIT
stores entire files that have been changed -- see Figure below. For each version of GIT we
have to manually "stage" the changed files to be included.

 <img style="display:block;margin:auto" src='../../imgs/vcsVSgit.png'>    
 <figcaption> Fig: 1.2.2.1. Traditional Version Control System vs. GIT</figcaption> 

4. Publish/access open source code.

This guide teaches you step-by-step how to get started with github, or other flavors of git (using the command line).

## Installation

### Mac OS:

1. Open terminal.
2. $ ``git --version``

    If you see output like:
    
    ``git version 2.20.1 (Apple Git-117)``; Git is installed.
    
    Otherwise you will be prompted to install xcode tools. Please follow steps to install these.
    
### Linux

In console

$ ``sudo apt install git``.

### Windows

Download Installer

<https://git-scm.com/download/win>


Please install git-bash as well. We will assume you are using git-bash
to execute bash commonds on Windows.

    



## Lifecycle

The git lifecycle includes creating versions ("commits") of your development folder as and when it changes. You will 
"add" files to be "tracked" in your folder by the `git add` command. You stage the added files for a "commit" (version) by using the `git commit`. If your repository is maintained on the cloud, you will need `git push` to sync the new version created with your cloud (remote) repository.

 <img style="display:block;margin:auto" src='../../imgs/lifecycle.png'>    
 <figcaption> Fig: 1.2.2.2. GIT Lifecycle</figcaption>                     

You can create a remote repository by hosting your own git server, or use Git-as-a-Service(GaaS) providewrs like [GitHub](https://github.com/), [GitLab](https://gitlab.com), [Bitbucket](https://bitbucket.org/) etc. The following tutorial uses Github as GaaS, but the commain-line steps should work the same with any GaaS.





##  Step-by-step

1. Create a Github account
2. Create a Github Repo

 <img style="display:block;margin:auto" src='../../imgs/new.png'> 
 <figcaption> Fig: 1.2.2.3. Create new repository </figcaption>   
    
3. Find repo url

 <img style="display:block;margin:auto" src='../../imgs/clone.png'> 
 <figcaption> Fig: 1.2.2.4. Clone repository </figcaption>            

4. Clone repo
    $ ``git clone <yout repo-url> ``
    This will create a folder with the repo name and "checkout" the lastest commit.
    
5. cd to new folder created, you can now add/edit delete/files from this folder.

6. To create new commit
    $`` git add *``
    $`` git commit -m "<your-message>"``
    
7. To sync your repo with cloud repo
        $`` git push``

8. Continue editiong your project files and to create a new version use
   git commands add -> commit -> push (Figure 1.2.2.2).


## GIT Command Reference

- git config : set your user name and email.
- git init : initialise a git repository.
- git clone : close your git repo.
- git status : status of git repo
- git add : stage files for commit
- git commit : create commit. use -m flag to ad message (recommended)
- git push : sync local commits to remote repo.
- git pull : sync remote commits to local clone.

# Editing Code

The examples in this book will need you to edit code/document format
files (HTML, CSS, JS, C++ etc.). You can use any editor you are
comfortable with. It is recommended that you use an editir with syntax
highlighting.

Here is a list of recommended code editors
- [Atom](https://atom.io/)
- [Brackets](http://brackets.io/)
- [Sublime](https://www.sublimetext.com/3)
- [TextMate](https://macromates.com/)
- VI (use in bash)
- Emacs (use in bash)

The first 4 are visual editors with a 
simple to use with a user-friendly GUI. VI and EMACS on the other has
are command-line (bash) editors. This will come in handy when you need
to edit on a remote machine. However both have steep learning curves and
will take practice to perfect. If you are new to programming this book
suggests you start with Atom Editor (first choice in the above list). It
has a tabbed editor and a project manager pane (Figure 1.2.3.1). You can easily add new
files, manage folders and edit/modify/save individual files.

 <img style="display:block;margin:auto" src='../../imgs/atom.png'>    
 <figcaption> Fig: 1.2.3.1 Atom Editor </figcaption>               
# Code Deployment

Some of the code examples (usually server or db management) need to be
deployed on a remote machine provisioned by you (you can provision such
machines using IaaSs like Amazon Web Services, Google Cloud Compute, Ali
Yun, Microsoft Azure and others).

When you provision a Linux machine on these remote servers you only have
shell access via SSH. In such circumstances use a cloud git repository
to transfer your development code to the remote server. The figure below
sketches this workflow.

 <img style="display:block;margin:auto" src='../../imgs/codeMgmt.png'>    
 <figcaption> Fig: 1.2.4.1. Deploy server code to IaaS server</figcaption> 


# Book Organization

The book is organized into 4 chapters. 
- Chapter 1 (you are here, and almost done) teaches you the preliminary
concepts and basic skills.
- Chapter 2 discusses front end technologies
such as HTML, CSS, JS, jQuery, JSON.
- Chapter 3 completes our discussion
on full-stack programming by covering back-end technologies such as
servers, databases and scaling.
- Chapter 4 covers how to write client and
server programs on microcontrollers thus enabling us to connect everyday
objetcs to the Internet (an emerging field called the Internet-of-Things
(IoT)).


# Front End Web Technologies

 <img style="display:block;margin:auto" src='../imgs/html5-css-javascript-logos.png'>

HTML5, CSS3 and JavaScript (ECMA Script) are the principal web technologies that allow
us to make clients (websites and apps). This chapter will teach you each
of these (and related tech like jQuery, JSON) in that order.

# HTML

Hypertext markup language (HTML) is the lingua franca of the World Wide
Web (www). It is also a medium for designing websites and apps. It is
however NOT a programming language. <i>Then what is HTML?</i> IT is a
<b>document format</b> much like pdf. You can create documents using
HTML, style them using CSS (a sub-set of HTML). But such pages will lack
interaction (like a pdf document). Interactivity can be added by adding
JavaScript to HTML. More on this later.

HTML can be rendered by Browsers like Chrome, Firefox and Safari. In
order to edit html files however we will need a text editor (see Figure
below). It is
convenient to use code editors for this purpose as they provide syntax
highlighting, autocomplete, lint and other tools.

 <img style="display:block;margin:auto" src='../../imgs/htmlSource.png'>  
 <figcaption> Fig: 2.1.1. HTML Source and Output</figcaption>        


There are 2 main concepts in HTML <b>Tags</b> and
<b>Attributes</b>. 



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


## Tag Reference

<div style="overflow-x:auto;">
<article id="wikiArticle"><div></div>

<p><span class="seoSummary">This page&nbsp;lists all the <a class="glossaryLink" href="https://developer.mozilla.org/en-US/docs/Glossary/HTML" title="HTML: HTML (HyperText Markup Language) is a descriptive language that specifies webpage structure.">HTML</a> <a class="glossaryLink" href="https://developer.mozilla.org/en-US/docs/Glossary/Element" title="elements: An element is a part of a webpage. In XML and HTML, an element may contain a data item or a chunk of text or an image, or perhaps nothing. A typical element includes an opening tag with some attributes, enclosed text content, and a closing tag.
 ">elements</a>, which are created using <a class="glossaryLink" href="https://developer.mozilla.org/en-US/docs/Glossary/Tag" title="tags: In HTML a tag is used for creating an element.&nbsp; The name of an HTML element is the name used in angle brackets such as <p> for paragraph.&nbsp; Note that the end tag's name is preceded by a slash character, &quot;</p>&quot;, and that in empty elements the end tag is neither required nor allowed. If attributes are not mentioned, default values are used in each case.">tags</a>.</span> They are grouped by function to help you find what you have in mind easily. An alphabetical list of all elements is provided in the sidebar on every element's page as well as this one.</p>

<div class="note">
<p>For more information about the basics of HTML elements and attributes, see <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Introduction#Elements_%E2%80%94_the_basic_building_blocks">the section on elements in the Introduction to HTML article</a>.</p>
</div>

<h2 id="Main_root">Main root</h2>

<table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html" title="The HTML <html> element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element."><code>&lt;html&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;html&gt;</code> element</strong> represents the root (top-level element) of an HTML document, so it is also referred to as the <em>root element</em>. All other elements must be descendants of this element.</td>
  </tr>

 </tbody>
</table>

<h2 id="Document_metadata">Document metadata</h2>

<p>Metadata contains information about the page. This includes information about styles, scripts and data to help software (<a class="glossaryLink" href="https://developer.mozilla.org/en-US/docs/Glossary/search_engine" title="search engines: A search engine is a software system that collects information from the World Wide Web and presents it to users who are looking for specific information.">search engines</a>, <a class="glossaryLink" href="https://developer.mozilla.org/en-US/docs/Glossary/Browser" title="browsers: A Web browser or browser is a program that retrieves and displays pages from&nbsp;the Web, and lets users access further pages through hyperlinks. A browser is the most familiar type of user agent.">browsers</a>, etc.) use and render the page. Metadata for styles and scripts may be defined in the page or link to another file that has the information.&nbsp;</p>

<table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base" title="The HTML <base> element specifies the base URL to use for all relative URLs in a document."><code>&lt;base&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;base&gt;</code> element</strong> specifies the base URL to use for all relative URLs in a document.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head" title="The HTML <head> element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets."><code>&lt;head&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;head&gt;</code> element</strong> contains machine-readable information (<a class="glossaryLink" href="https://developer.mozilla.org/en-US/docs/Glossary/metadata" title="metadata: Metadata is — in its very simplest definition — data that describes data. For example, an HTML document is data, but HTML can also contain metadata in its <head> element that describes the document — for example who wrote it, and its summary.">metadata</a>) about the document, like its <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title">title</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script">scripts</a>, and <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style">style sheets</a>.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link" title="The HTML External Resource Link element (<link>) specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both &quot;favicon&quot; style icons and icons for the home screen and apps on mobile devices) among other things."><code>&lt;link&gt;</code></a></td>
   <td>The <strong>HTML External Resource Link element (<code>&lt;link&gt;</code>)</strong> specifies relationships between the current document and an external resource. This element is most commonly used to link to <a class="glossaryLink" href="https://developer.mozilla.org/en-US/docs/Glossary/CSS" title="stylesheets: CSS (Cascading Style Sheets) is a declarative language that controls how webpages look in the browser.">stylesheets</a>, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta" title="The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>."><code>&lt;meta&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;meta&gt;</code> element</strong> represents <a class="glossaryLink" href="https://developer.mozilla.org/en-US/docs/Glossary/Metadata" title="metadata: Metadata is — in its very simplest definition — data that describes data. For example, an HTML document is data, but HTML can also contain metadata in its <head> element that describes the document — for example who wrote it, and its summary.">metadata</a> that cannot be represented by other HTML meta-related elements, like <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base" title="The HTML <base> element specifies the base URL to use for all relative URLs in a document."><code>&lt;base&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link" title="The HTML External Resource Link element (&amp;lt;link&amp;gt;) specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both &quot;favicon&quot; style icons and icons for the home screen and apps on mobile devices) among other things."><code>&lt;link&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" title="The HTML <script> element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code."><code>&lt;script&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style" title="The HTML <style> element contains style information for a document, or part of a document."><code>&lt;style&gt;</code></a> or <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title" title="The HTML Title element (<title>) defines the document's title that is shown in a browser's title bar or a page's tab."><code>&lt;title&gt;</code></a>.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style" title="The HTML <style> element contains style information for a document, or part of a document."><code>&lt;style&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;style&gt;</code> element</strong> contains style information for a document, or part of a document.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title" title="The HTML Title element (<title>) defines the document's title that is shown in a browser's title bar or a page's tab."><code>&lt;title&gt;</code></a></td>
   <td>The <strong>HTML Title element</strong> (<strong><code>&lt;title&gt;</code></strong>) defines the document's title that is shown in a <a class="glossaryLink" href="https://developer.mozilla.org/en-US/docs/Glossary/Browser" title="browser: A Web browser or browser is a program that retrieves and displays pages from&nbsp;the Web, and lets users access further pages through hyperlinks. A browser is the most familiar type of user agent.">browser</a>'s title bar or a page's tab.</td>
  </tr>

 </tbody>
</table>

<h2 id="Sectioning_root">Sectioning root</h2>

<table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body" title="The HTML <body> Element represents the content of an HTML&nbsp;document. There can be only one <body> element in a document."><code>&lt;body&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;body&gt;</code> Element</strong> represents the content of an HTML&nbsp;document. There can be only one <code>&lt;body&gt;</code> element in a document.</td>
  </tr>

 </tbody>
</table>

<h2 id="Content_sectioning">Content sectioning</h2>

<p>Content sectioning elements allow you to organize the document content into logical pieces. Use the sectioning elements to create a broad outline for your page content, including header and footer navigation, and heading elements to identify sections of content.&nbsp; &nbsp;</p>

<table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address" title="The HTML <address> element indicates that the enclosed HTML provides contact information for a person or people, or for an organization."><code>&lt;address&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;address&gt;</code> element</strong> indicates that the enclosed HTML provides contact information for a person or people, or for an organization.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article" title="The HTML <article> element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication)."><code>&lt;article&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;article&gt;</code> element</strong> represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication).</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside" title="The HTML <aside> element represents a portion of a document whose content is only indirectly related to the document's main content."><code>&lt;aside&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;aside&gt;</code> element</strong> represents a portion of a document whose content is only indirectly related to the document's main content.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer" title="The HTML <footer> element represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents."><code>&lt;footer&gt;</code></a></td>
   <td>The<strong> HTML <code>&lt;footer&gt;</code> element</strong> represents a footer for its nearest <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Sectioning_content">sectioning content</a> or <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document#Sectioning_roots">sectioning root</a> element. A footer typically contains information about the author of the section, copyright data or links to related documents.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header" title="The HTML <header> element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements."><code>&lt;header&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;header&gt;</code> element</strong> represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1" title="REDIRECT Heading elements [en-US]"><code>&lt;h1&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h2" title="REDIRECT Heading elements [en-US]"><code>&lt;h2&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h3" title="REDIRECT Heading elements [en-US]"><code>&lt;h3&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h4" title="REDIRECT Heading elements [en-US]"><code>&lt;h4&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h5" title="REDIRECT Heading elements [en-US]"><code>&lt;h5&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h6" title="REDIRECT Heading elements [en-US]"><code>&lt;h6&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> elements</strong> represent six levels of section headings. <code>&lt;h1&gt;</code> is the highest section level and <code>&lt;h6&gt;</code> is the lowest.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup" title="The HTML <hgroup> element represents a multi-level heading for a section of a document. It groups a set of <h1>–<h6> elements."><code>&lt;hgroup&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;hgroup&gt;</code> element</strong> represents a multi-level heading for a section of a document. It groups a set of <code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements">&lt;h1&gt;–&lt;h6&gt;</a></code> elements.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main" title="The HTML <main> element represents the dominant content of the <body> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application."><code>&lt;main&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;main&gt;</code> element</strong> represents the dominant content of the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body" title="The HTML <body> Element represents the content of an HTML&nbsp;document. There can be only one <body> element in a document."><code>&lt;body&gt;</code></a> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav" title="The HTML <nav> element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes."><code>&lt;nav&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;nav&gt;</code> element</strong> represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section" title="The HTML <section> element represents a standalone section — which doesn't have a more specific semantic element to represent it — contained within an HTML document."><code>&lt;section&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;section&gt;</code> element</strong> represents a standalone section — which doesn't have a more specific semantic element to represent it — contained within an HTML document.</td>
  </tr>

 </tbody>
</table>

<h2 id="Text_content">Text content</h2>

<p>Use HTML text content elements to organize blocks or sections of content placed between the opening <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body" title="The HTML <body> Element represents the content of an HTML&nbsp;document. There can be only one <body> element in a document."><code>&lt;body&gt;</code></a> and closing <code>&lt;/body&gt;</code> tags. Important for <a class="glossaryLink" href="https://developer.mozilla.org/en-US/docs/Glossary/accessibility" title="accessibility: Web Accessibility (A11Y) refers to best practices for keeping a website usable despite&nbsp;physical and technical restrictions.&nbsp;Web accessibility is formally defined and discussed at the W3C through the Web Accessibility Initiative (WAI).">accessibility</a> and <a class="glossaryLink" href="https://developer.mozilla.org/en-US/docs/Glossary/SEO" title="SEO: SEO (Search Engine Optimization) is the process of making a website more visible in search results, also termed improving search rankings.">SEO</a>, these elements identify the purpose or structure of that content.&nbsp; &nbsp;&nbsp;&nbsp;</p>

<table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote" title="The HTML <blockquote> Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element."><code>&lt;blockquote&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see <a href="https://developer.mozilla.org#Usage_notes" rel="internal">Notes</a> for how to change it). A URL for the source of the quotation may be given using the <strong>cite</strong> attribute, while a text representation of the source can be given using the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite" title="The HTML Citation element (<cite>) is used to describe a reference to a cited creative work, and must include the title of that work."><code>&lt;cite&gt;</code></a> element.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd" title="The HTML <dd> element provides the description, definition, or value for the preceding term (<dt>) in a description list (<dl>)."><code>&lt;dd&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;dd&gt;</code> element</strong> provides the description, definition, or value for the preceding term (<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt" title="The HTML <dt> element specifies a term in a description or definition list, and as such must be used inside a <dl> element."><code>&lt;dt&gt;</code></a>) in a description list (<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl" title="The HTML <dl> element represents a description list. The element encloses a list of groups of terms (specified using the <dt> element) and descriptions (provided by <dd> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs)."><code>&lt;dl&gt;</code></a>).</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div" title="The HTML Content Division element (<div>) is the generic container for flow content. It has no effect on the content or layout until styled using CSS."><code>&lt;div&gt;</code></a></td>
   <td>The <strong>HTML Content Division element</strong> (<strong><code>&lt;div&gt;</code></strong>) is the generic container for flow content. It has no effect on the content or layout until styled using <a class="glossaryLink" href="https://developer.mozilla.org/en-US/docs/Glossary/CSS" title="CSS: CSS (Cascading Style Sheets) is a declarative language that controls how webpages look in the browser.">CSS</a>.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl" title="The HTML <dl> element represents a description list. The element encloses a list of groups of terms (specified using the <dt> element) and descriptions (provided by <dd> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs)."><code>&lt;dl&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;dl&gt;</code> </strong>element represents a description list. The element encloses a list of groups of terms (specified using the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt" title="The HTML <dt> element specifies a term in a description or definition list, and as such must be used inside a <dl> element."><code>&lt;dt&gt;</code></a> element) and descriptions (provided by <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd" title="The HTML <dd> element provides the description, definition, or value for the preceding term (<dt>) in a description list (<dl>)."><code>&lt;dd&gt;</code></a> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt" title="The HTML <dt> element specifies a term in a description or definition list, and as such must be used inside a <dl> element."><code>&lt;dt&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;dt&gt;</code> element</strong> specifies a term in a description or definition list, and as such must be used inside a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl" title="The HTML <dl> element represents a description list. The element encloses a list of groups of terms (specified using the <dt> element) and descriptions (provided by <dd> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs)."><code>&lt;dl&gt;</code></a> element.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption" title="The HTML <figcaption> or Figure Caption element represents a caption or legend describing the rest of the contents of its parent <figure> element."><code>&lt;figcaption&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;figcaption&gt;</code> or Figure Caption element</strong> represents a caption or legend describing the rest of the contents of its parent <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure" title="The HTML <figure> (Figure With Optional Caption) element represents self-contained content, potentially with an optional caption, which is specified using the (<figcaption>) element."><code>&lt;figure&gt;</code></a> element.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure" title="The HTML <figure> (Figure With Optional Caption) element represents self-contained content, potentially with an optional caption, which is specified using the (<figcaption>) element."><code>&lt;figure&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;figure&gt;</code> (Figure With Optional Caption) element</strong> represents self-contained content, potentially with an optional caption, which is specified using the (<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption" title="The HTML <figcaption> or Figure Caption element represents a caption or legend describing the rest of the contents of its parent <figure> element."><code>&lt;figcaption&gt;</code></a>) element.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr" title="The HTML <hr> element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section."><code>&lt;hr&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;hr&gt;</code> element</strong> represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li" title="The HTML <li> element is used to represent an item in a list."><code>&lt;li&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;li&gt;</code> element</strong> is used to represent an item in a list.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main" title="The HTML <main> element represents the dominant content of the <body> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application."><code>&lt;main&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;main&gt;</code> element</strong> represents the dominant content of the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body" title="The HTML <body> Element represents the content of an HTML&nbsp;document. There can be only one <body> element in a document."><code>&lt;body&gt;</code></a> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol" title="The HTML <ol> element represents an ordered list of items — typically rendered as a numbered list."><code>&lt;ol&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;ol&gt;</code> element</strong> represents an ordered list of items — typically rendered as a numbered list.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p" title="The HTML <p> element represents a paragraph."><code>&lt;p&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;p&gt;</code> element</strong> represents a paragraph.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre" title="The HTML <pre> element represents preformatted text which is to be presented exactly as written in the HTML file."><code>&lt;pre&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;pre&gt;</code> element</strong> represents preformatted text which is to be presented exactly as written in the HTML file.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul" title="The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list."><code>&lt;ul&gt;</code></a></td>
   <td>The<strong> HTML <code>&lt;ul&gt;</code> element</strong> represents an unordered list of items, typically rendered as a bulleted list.</td>
  </tr>

 </tbody>
</table>

<h2 id="Inline_text_semantics">Inline text semantics</h2>

<p>Use the HTML inline text semantic to define the meaning, structure, or style of a word, line, or any arbitrary piece of text.</p>

<table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" title="The HTML <a> element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address."><code>&lt;a&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;a&gt;</code> element</strong> (or <em>anchor</em> element), with <a href="https://developer.mozilla.org#href">its <code>href</code> attribute</a>, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr" title="The HTML Abbreviation element (<abbr>) represents an abbreviation or acronym; the optional title attribute can provide an expansion or description for the abbreviation."><code>&lt;abbr&gt;</code></a></td>
   <td>The <strong>HTML Abbreviation element </strong>(<strong><code>&lt;abbr&gt;</code></strong>) represents an abbreviation or acronym; the optional <code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-title">title</a></code> attribute can provide an expansion or description for the abbreviation.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b" title="The HTML Bring Attention To element (<b>)&nbsp; is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance."><code>&lt;b&gt;</code></a></td>
   <td>The <strong>HTML Bring Attention To element (<code>&lt;b&gt;</code>)</strong>&nbsp; is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi" title="The HTML Bidirectional Isolate element (<bdi>)&nbsp; tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text."><code>&lt;bdi&gt;</code></a></td>
   <td>The HTML <strong>Bidirectional Isolate element</strong> (<strong><code>&lt;bdi&gt;</code></strong>)&nbsp; tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo" title="The HTML Bidirectional Text Override element (<bdo>) overrides the current directionality of text, so that the text within is rendered in a different direction."><code>&lt;bdo&gt;</code></a></td>
   <td>The <strong>HTML Bidirectional Text Override element</strong> (<strong><code>&lt;bdo&gt;</code></strong>) overrides the current directionality of text, so that the text within is rendered in a different direction.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br" title="The HTML <br> element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant."><code>&lt;br&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;br&gt;</code> element</strong> produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite" title="The HTML Citation element (<cite>) is used to describe a reference to a cited creative work, and must include the title of that work."><code>&lt;cite&gt;</code></a></td>
   <td>The <strong>HTML Citation element</strong> (<strong><code>&lt;cite&gt;</code></strong>) is used to describe a reference to a cited creative work, and must include the title of that work.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code" title="The HTML <code> element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code."><code>&lt;code&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;code&gt;</code> element</strong> displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data" title="The HTML <data> element links a given content with a machine-readable translation. If the content is time- or date-related, the <time> element must be used."><code>&lt;data&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;data&gt;</code> element</strong> links a given content with a machine-readable translation. If the content is time- or date-related, the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time" title="The HTML <time> element represents a specific period in time."><code>&lt;time&gt;</code></a> element must be used.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn" title="The HTML Definition element (<dfn>) is used to indicate the term being defined within the context of a definition phrase or sentence."><code>&lt;dfn&gt;</code></a></td>
   <td>The <strong>HTML Definition element</strong> (<code><strong><dfn>&lt;dfn&gt;</dfn></strong></code>) is used to indicate the term being defined within the context of a definition phrase or sentence.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em" title="The HTML <em> element marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis."><code>&lt;em&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;em&gt;</code> element</strong> marks text that has stress emphasis. The <code>&lt;em&gt;</code> element can be nested, with each level of nesting indicating a greater degree of emphasis.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i" title="The HTML <i> element represents a range of text that is set off from the normal text for some reason."><code>&lt;i&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;i&gt;</code> element</strong> represents a range of text that is set off from the normal text for some reason.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd" title="The HTML Keyboard Input element (<kbd>) represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device."><code>&lt;kbd&gt;</code></a></td>
   <td>The <strong>HTML Keyboard Input element</strong> (<strong><code>&lt;kbd&gt;</code></strong>) represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark" title="The HTML Mark Text element (<mark>) represents text which is marked or highlighted for reference or notation purposes, due to the marked passage's relevance or importance in the enclosing context."><code>&lt;mark&gt;</code></a></td>
   <td>The <strong>HTML Mark Text element</strong> (<strong><code>&lt;mark&gt;</code></strong>) represents text which is <strong>marked</strong> or <strong>highlighted</strong> for reference or notation purposes, due to the marked passage's relevance or importance in the enclosing context.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q" title="The HTML <q> element  indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. "><code>&lt;q&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;q&gt;</code> element </strong> indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. </td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rb" title="The HTML Ruby Base (<rb>) element is used to delimit the base text component of a&nbsp; <ruby> annotation, i.e. the text that is being annotated."><code>&lt;rb&gt;</code></a></td>
   <td>The <strong>HTML Ruby Base (<code>&lt;rb&gt;</code>) element</strong> is used to delimit the base text component of a&nbsp; <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby" title="The HTML <ruby> element represents a ruby annotation. Ruby annotations are for showing pronunciation of East Asian characters."><code>&lt;ruby&gt;</code></a> annotation, i.e. the text that is being annotated.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp" title="The HTML Ruby Fallback Parenthesis (<rp>) element is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the <ruby> element."><code>&lt;rp&gt;</code></a></td>
   <td>The <strong>HTML Ruby Fallback Parenthesis (<code>&lt;rp&gt;</code>) element</strong> is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby" title="The HTML <ruby> element represents a ruby annotation. Ruby annotations are for showing pronunciation of East Asian characters."><code>&lt;ruby&gt;</code></a> element.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt" title="The HTML Ruby Text (<rt>) element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The <rt> element must always be contained within a <ruby> element."><code>&lt;rt&gt;</code></a></td>
   <td>The <strong>HTML Ruby Text (<code>&lt;rt&gt;</code>) element</strong> specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The <code>&lt;rt&gt;</code> element must always be contained within a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby" title="The HTML <ruby> element represents a ruby annotation. Ruby annotations are for showing pronunciation of East Asian characters."><code>&lt;ruby&gt;</code></a> element.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rtc" title="The HTML Ruby Text Container (<rtc>) element embraces semantic annotations of characters presented in a ruby of <rb> elements used inside of <ruby> element. <rb> elements can have both pronunciation (<rt>) and semantic (<rtc>) annotations."><code>&lt;rtc&gt;</code></a></td>
   <td>The <strong>HTML Ruby Text Container (<code>&lt;rtc&gt;</code>) element</strong> embraces semantic annotations of characters presented in a ruby of <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rb" title="The HTML Ruby Base (<rb>) element is used to delimit the base text component of a&nbsp; <ruby> annotation, i.e. the text that is being annotated."><code>&lt;rb&gt;</code></a> elements used inside of <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby" title="The HTML <ruby> element represents a ruby annotation. Ruby annotations are for showing pronunciation of East Asian characters."><code>&lt;ruby&gt;</code></a> element. <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rb" title="The HTML Ruby Base (<rb>) element is used to delimit the base text component of a&nbsp; <ruby> annotation, i.e. the text that is being annotated."><code>&lt;rb&gt;</code></a> elements can have both pronunciation (<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt" title="The HTML Ruby Text (<rt>) element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The <rt> element must always be contained within a <ruby> element."><code>&lt;rt&gt;</code></a>) and semantic (<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rtc" title="The HTML Ruby Text Container (<rtc>) element embraces semantic annotations of characters presented in a ruby of <rb> elements used inside of <ruby> element. <rb> elements can have both pronunciation (<rt>) and semantic (<rtc>) annotations."><code>&lt;rtc&gt;</code></a>) annotations.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby" title="The HTML <ruby> element represents a ruby annotation. Ruby annotations are for showing pronunciation of East Asian characters."><code>&lt;ruby&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;ruby&gt;</code> element</strong> represents a ruby annotation. Ruby annotations are for showing pronunciation of East Asian characters.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s" title="The HTML <s> element renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the <del> and <ins> elements, as appropriate."><code>&lt;s&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;s&gt;</code> element</strong> renders text with a strikethrough, or a line through it. Use the <code>&lt;s&gt;</code> element to represent things that are no longer relevant or no longer accurate. However, <code>&lt;s&gt;</code> is not appropriate when indicating document edits; for that, use the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del" title="The HTML <del> element represents a range of text that has been deleted from a document."><code>&lt;del&gt;</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins" title="The HTML <ins> element represents a range of text that has been added to a document."><code>&lt;ins&gt;</code></a> elements, as appropriate.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp" title="The HTML Sample Element (<samp>) is used to enclose inline text which represents sample (or quoted) output from a computer program."><code>&lt;samp&gt;</code></a></td>
   <td>The <strong>HTML Sample Element</strong> (<strong><code>&lt;samp&gt;</code></strong>) is used to enclose inline text which represents sample (or quoted) output from a computer program.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small" title="The HTML <small> element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from small to x-small."><code>&lt;small&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;small&gt;</code></strong> <strong>element </strong>represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from <code>small</code> to <code>x-small</code>.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span" title="The HTML <span> element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang."><code>&lt;span&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;span&gt;</code> element</strong> is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the <code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-class">class</a></code> or <code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-id">id</a></code> attributes), or because they share attribute values, such as <code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-lang">lang</a></code>.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong" title="The HTML Strong Importance Element (<strong>) indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type."><code>&lt;strong&gt;</code></a></td>
   <td>The HTML <strong>Strong Importance Element</strong> (<strong><code>&lt;strong&gt;</code></strong>) indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub" title="The HTML Subscript element (<sub>) specifies inline text which should be displayed as subscript for solely typographical reasons."><code>&lt;sub&gt;</code></a></td>
   <td>The HTML <strong>Subscript element</strong> (<strong><code>&lt;sub&gt;</code></strong>) specifies inline text which should be displayed as subscript for solely typographical reasons.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup" title="The HTML Superscript element (<sup>) specifies inline text which is to be displayed as superscript for solely typographical reasons."><code>&lt;sup&gt;</code></a></td>
   <td>The <strong>HTML Superscript element</strong> (<strong><code>&lt;sup&gt;</code></strong>) specifies inline text which is to be displayed as superscript for solely typographical reasons.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time" title="The HTML <time> element represents a specific period in time."><code>&lt;time&gt;</code></a></td>
   <td>The HTML <strong><code>&lt;time&gt;</code> element</strong> represents a specific period in time.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u" title="The HTML Unarticulated Annotation Element (<u>) represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation."><code>&lt;u&gt;</code></a></td>
   <td>The HTML <strong>Unarticulated Annotation Element</strong> (<strong><code>&lt;u&gt;</code></strong>) represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var" title="The HTML Variable element (<var>) represents the name of a variable in a mathematical expression or a programming context."><code>&lt;var&gt;</code></a></td>
   <td>The HTML <strong>Variable element</strong> (<strong><code>&lt;var&gt;</code></strong>) represents the name of a variable in a mathematical expression or a programming context.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr" title="The HTML <wbr> element represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location."><code>&lt;wbr&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;wbr&gt;</code> element</strong> represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location.</td>
  </tr>

 </tbody>
</table>

<h2 id="Image_and_multimedia">Image and multimedia</h2>

<p>HTML supports various multimedia resources such as images, audio, and video.</p>

<table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area" title="The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element."><code>&lt;area&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;area&gt;</code> element</strong> defines a hot-spot region on an image, and optionally associates it with a <a class="glossaryLink" href="https://developer.mozilla.org/en-US/docs/Glossary/Hyperlink" title="hypertext link: Hyperlinks connect webpages or data items to one another. In HTML, <a> elements define hyperlinks from a spot on a webpage (like a text string or image) to another spot on some other webpage (or even on the same page).">hypertext link</a>. This element is used only within a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map" title="The HTML <map> element is used with <area> elements to define an image map (a clickable link area)."><code>&lt;map&gt;</code></a> element.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" title="The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:&nbsp;the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."><code>&lt;audio&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;audio&gt;</code> element</strong> is used to embed sound content in documents. It may contain one or more audio sources, represented using the <code>src</code> attribute or the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source" title="The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element."><code>&lt;source&gt;</code></a> element:&nbsp;the browser will choose the most suitable one. It can also be the destination for streamed media, using a <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaStream" title="The MediaStream interface represents a stream of media content. A stream consists of several tracks such as&nbsp;video or audio tracks. Each track is specified as an instance of MediaStreamTrack."><code>MediaStream</code></a>.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;img&gt;</code> element</strong> embeds an image into the document.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map" title="The HTML <map> element is used with <area> elements to define an image map (a clickable link area)."><code>&lt;map&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;map&gt;</code> element</strong> is used with <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area" title="The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element."><code>&lt;area&gt;</code></a> elements to define an image map (a clickable link area).</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track" title="The HTML <track> element is used as a child of the media elements <audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks or&nbsp;Timed Text Markup Language (TTML)."><code>&lt;track&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;track&gt;</code> element</strong> is used as a child of the media elements <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" title="The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:&nbsp;the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."><code>&lt;audio&gt;</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" title="The&nbsp;HTML Video element&nbsp;(<video>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<video>&nbsp;for audio content as well, but the <audio> element may provide a more appropriate user experience."><code>&lt;video&gt;</code></a>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Video_Text_Tracks_Format">WebVTT format</a> (<code>.vtt</code> files) — Web Video Text Tracks or&nbsp;<a class="external" href="https://developer.mozilla.orghttps://w3c.github.io/ttml2/index.html" rel="noopener">Timed Text Markup Language (TTML).</a></td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" title="The&nbsp;HTML Video element&nbsp;(<video>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<video>&nbsp;for audio content as well, but the <audio> element may provide a more appropriate user experience."><code>&lt;video&gt;</code></a></td>
   <td>The&nbsp;<strong>HTML Video element</strong>&nbsp;(<strong><code>&lt;video&gt;</code></strong>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<code>&lt;video&gt;</code>&nbsp;for audio content as well, but the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" title="The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:&nbsp;the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."><code>&lt;audio&gt;</code></a> element may provide a more appropriate user experience.</td>
  </tr>

 </tbody>
</table>

<h2 id="Embedded_content">Embedded content</h2>

<p>In addition to regular multimedia content, HTML can include a variety of other content, even if it's not always easy to interact with.</p>

<table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed" title="The HTML <embed> element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in."><code>&lt;embed&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;embed&gt;</code> element</strong> embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" title="The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one."><code>&lt;iframe&gt;</code></a></td>
   <td>The <strong>HTML Inline Frame element (<code>&lt;iframe&gt;</code>)</strong> represents a nested <a class="glossaryLink" href="https://developer.mozilla.org/en-US/docs/Glossary/browsing_context" title="browsing context: A browsing context is the environment in which a browser displays a Document (normally a tab nowadays, but possibly also a window or a frame within a page).">browsing context</a>, embedding another HTML page into the current one.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object" title="The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin."><code>&lt;object&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;object&gt;</code> element</strong> represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param" title="The HTML <param> element defines parameters for an <object> element."><code>&lt;param&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;param&gt;</code> element</strong> defines parameters for an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object" title="The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin."><code>&lt;object&gt;</code></a> element.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture" title="The HTML <picture> element contains zero or more <source> elements and one <img> element to offer alternative versions of an image for different display/device scenarios."><code>&lt;picture&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;picture&gt;</code> element</strong> contains zero or more <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source" title="The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element."><code>&lt;source&gt;</code></a> elements and one <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a> element to offer alternative versions of an image for different display/device scenarios.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source" title="The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element."><code>&lt;source&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;source&gt;</code> element</strong> specifies multiple media resources for the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture" title="The HTML <picture> element contains zero or more <source> elements and one <img> element to offer alternative versions of an image for different display/device scenarios."><code>&lt;picture&gt;</code></a>, the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" title="The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:&nbsp;the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."><code>&lt;audio&gt;</code></a> element, or the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" title="The&nbsp;HTML Video element&nbsp;(<video>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<video>&nbsp;for audio content as well, but the <audio> element may provide a more appropriate user experience."><code>&lt;video&gt;</code></a> element.</td>
  </tr>

 </tbody>
</table>

<h2 id="Scripting">Scripting</h2>

<p>In order to create dynamic content and Web applications, HTML supports the use of scripting languages, most prominently JavaScript. Certain elements support this capability.</p>

<table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas" title="Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations."><code>&lt;canvas&gt;</code></a></td>
   <td>Use the <strong>HTML <code>&lt;canvas&gt;</code> element</strong> with either the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">canvas scripting API</a> or the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API">WebGL API</a> to draw graphics and animations.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript" title="The HTML <noscript> element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser."><code>&lt;noscript&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;noscript&gt;</code> element</strong> defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" title="The HTML <script> element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code."><code>&lt;script&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;script&gt;</code> element</strong> is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code.</td>
  </tr>

 </tbody>
</table>

<h2 id="Demarcating_edits">Demarcating edits</h2>

<p>These elements let you provide indications that specific parts of the text have been altered.</p>

<table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del" title="The HTML <del> element represents a range of text that has been deleted from a document."><code>&lt;del&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;del&gt;</code> element</strong> represents a range of text that has been deleted from a document.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins" title="The HTML <ins> element represents a range of text that has been added to a document."><code>&lt;ins&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;ins&gt;</code> element</strong> represents a range of text that has been added to a document.</td>
  </tr>

 </tbody>
</table>

<h2 id="Table_content">Table content</h2>

<p>The elements here are used to create and handle tabular data.</p>

<table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption" title="The HTML Table Caption element (<caption>) specifies the caption (or title) of a table, and if used is always the first child of a <table>."><code>&lt;caption&gt;</code></a></td>
   <td>The <strong>HTML Table Caption element</strong> (<strong><code>&lt;caption&gt;</code></strong>) specifies the caption (or title) of a table, and if used is <em>always</em> the first child of a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" title="The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data."><code>&lt;table&gt;</code></a>.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col" title="The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element."><code>&lt;col&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;col&gt;</code> element</strong> defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup" title="The HTML <colgroup> element defines a group of columns within a table."><code>&lt;colgroup&gt;</code></a> element.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup" title="The HTML <colgroup> element defines a group of columns within a table."><code>&lt;colgroup&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;colgroup&gt;</code> element</strong> defines a group of columns within a table.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" title="The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data."><code>&lt;table&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;table&gt;</code> element</strong> represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody" title="The HTML Table Body element (<tbody>) encapsulates a set of table rows (<tr> elements), indicating that they comprise the body of the table (<table>)."><code>&lt;tbody&gt;</code></a></td>
   <td>The <strong>HTML Table Body element</strong> (<strong><code>&lt;tbody&gt;</code></strong>) encapsulates a set of table rows (<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr" title="The HTML <tr> element defines a row of cells in a table. The row's cells can then be established using a mix of <td> (data cell) and <th> (header cell) elements."><code>&lt;tr&gt;</code></a> elements), indicating that they comprise the body of the table (<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" title="The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data."><code>&lt;table&gt;</code></a>).</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td" title="The HTML <td> element defines a cell of a table that contains data. It participates in the table model."><code>&lt;td&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;td&gt;</code> element</strong> defines a cell of a table that contains data. It participates in the <em>table model</em>.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot" title="The HTML <tfoot> element defines a set of rows summarizing the columns of the table."><code>&lt;tfoot&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;tfoot&gt;</code> element</strong> defines a set of rows summarizing the columns of the table.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th" title="The HTML <th> element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes."><code>&lt;th&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;th&gt;</code> element</strong> defines a cell as header of a group of table cells. The exact nature of this group is defined by the <code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope">scope</a></code> and <code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-headers">headers</a></code> attributes.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead" title="The HTML <thead> element defines a set of rows defining the head of the columns of the table."><code>&lt;thead&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;thead&gt;</code> element</strong> defines a set of rows defining the head of the columns of the table.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr" title="The HTML <tr> element defines a row of cells in a table. The row's cells can then be established using a mix of <td> (data cell) and <th> (header cell) elements."><code>&lt;tr&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;tr&gt;</code> element</strong> defines a row of cells in a table. The row's cells can then be established using a mix of <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td" title="The HTML <td> element defines a cell of a table that contains data. It participates in the table model."><code>&lt;td&gt;</code></a> (data cell) and <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th" title="The HTML <th> element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes."><code>&lt;th&gt;</code></a> (header cell) elements.</td>
  </tr>

 </tbody>
</table>

<h2 id="Forms">Forms</h2>

<p>HTML provides a number of elements which can be used together to create forms which the user can fill out and submit to the Web site or application. There's a great deal of further information about this available in the <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms">HTML forms guide</a>.</p>

<table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" title="The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality."><code>&lt;button&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;button&gt;</code> element</strong> represents a clickable button, which can be used in <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms">forms</a> or anywhere in a document that needs simple, standard button functionality.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist" title="The HTML <datalist> element contains a set of <option> elements that represent the permissible or recommended options available to choose from within other controls."><code>&lt;datalist&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;datalist&gt;</code> element</strong> contains a set of <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option" title="The HTML <option> element is used to define an item contained in a <select>, an <optgroup>, or a <datalist>&nbsp;element. As such,&nbsp;<option>&nbsp;can represent menu items in popups and other lists of items in an HTML document."><code>&lt;option&gt;</code></a> elements that represent the permissible or recommended options available to choose from within other controls.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset" title="The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form."><code>&lt;fieldset&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;fieldset&gt;</code> element</strong> is used to group several controls as well as labels (<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label" title="The HTML <label> element represents a caption for an item in a user interface."><code>&lt;label&gt;</code></a>) within a web form.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" title="The HTML <form> element represents a document section containing interactive controls for submitting information."><code>&lt;form&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;form&gt;</code> element</strong> represents a document section containing interactive controls for submitting information.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and <a class="glossaryLink" href="https://developer.mozilla.org/en-US/docs/Glossary/user_agent" title="user agent: A user agent is a computer program representing a person, for example, a browser in a Web context.">user agent</a>. </td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label" title="The HTML <label> element represents a caption for an item in a user interface."><code>&lt;label&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;label&gt;</code> element</strong> represents a caption for an item in a user interface.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend" title="The HTML <legend> element represents a caption for the content of its parent <fieldset>."><code>&lt;legend&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;legend&gt;</code> element</strong> represents a caption for the content of its parent <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset" title="The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form."><code>&lt;fieldset&gt;</code></a>.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter" title="The HTML <meter> element represents either a scalar value within a known range or a fractional value."><code>&lt;meter&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;meter&gt;</code> element</strong> represents either a scalar value within a known range or a fractional value.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup" title="The HTML <optgroup> element creates a grouping of options within a <select> element."><code>&lt;optgroup&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;optgroup&gt;</code> element</strong> creates a grouping of options within a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select" title="The HTML <select> element represents a control that provides a menu of options"><code>&lt;select&gt;</code></a> element.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option" title="The HTML <option> element is used to define an item contained in a <select>, an <optgroup>, or a <datalist>&nbsp;element. As such,&nbsp;<option>&nbsp;can represent menu items in popups and other lists of items in an HTML document."><code>&lt;option&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;option&gt;</code> element</strong> is used to define an item contained in a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select" title="The HTML <select> element represents a control that provides a menu of options"><code>&lt;select&gt;</code></a>, an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup" title="The HTML <optgroup> element creates a grouping of options within a <select> element."><code>&lt;optgroup&gt;</code></a>, or a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist" title="The HTML <datalist> element contains a set of <option> elements that represent the permissible or recommended options available to choose from within other controls."><code>&lt;datalist&gt;</code></a>&nbsp;element. As such,&nbsp;<code>&lt;option&gt;</code>&nbsp;can represent menu items in popups and other lists of items in an HTML document.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output" title="The HTML Output element (<output>) is a container element into which a site or app can inject the results of a calculation or the outcome of a user action."><code>&lt;output&gt;</code></a></td>
   <td>The <strong>HTML Output element</strong> (<strong><code>&lt;output&gt;</code></strong>) is a container element into which a site or app can inject the results of a calculation or the outcome of a user action.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress" title="The HTML <progress> element displays an indicator showing the completion progress of a task, typically displayed as a progress bar."><code>&lt;progress&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;progress&gt;</code> element</strong> displays an indicator showing the completion progress of a task, typically displayed as a progress bar.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select" title="The HTML <select> element represents a control that provides a menu of options"><code>&lt;select&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;select&gt;</code> element</strong> represents a control that provides a menu of options</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" title="The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."><code>&lt;textarea&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;textarea&gt;</code> element</strong> represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.</td>
  </tr>

 </tbody>
</table>

<h2 id="Interactive_elements">Interactive elements</h2>

<p>HTML offers a selection of elements which help to create interactive user interface objects.</p>

<table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details" title="The HTML Details Element (<details>) creates a disclosure widget in which information is visible only when the widget is toggled into an &quot;open&quot; state."><code>&lt;details&gt;</code></a></td>
   <td>The <strong>HTML Details Element (<code>&lt;details&gt;</code>)</strong> creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog" title="The HTML <dialog> element represents a dialog box or other interactive component, such as an inspector or window."><code>&lt;dialog&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;dialog&gt;</code> element</strong> represents a dialog box or other interactive component, such as an inspector or window.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu" title="The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked."><code>&lt;menu&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;menu&gt;</code> element</strong> represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem" title="The HTML <menuitem> element represents a command that a user is able to invoke through a popup menu. This includes context menus, as well as menus that might be attached to a menu button."><code>&lt;menuitem&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;menuitem&gt;</code> element</strong> represents a command that a user is able to invoke through a popup menu. This includes context menus, as well as menus that might be attached to a menu button.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary" title="The HTML Disclosure Summary element (<summary>) element specifies a summary, caption, or legend for a <details> element's disclosure box."><code>&lt;summary&gt;</code></a></td>
   <td>The <strong>HTML Disclosure Summary element</strong> (<strong><code>&lt;summary&gt;</code></strong>) element specifies a summary, caption, or legend for a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details" title="The HTML Details Element (&amp;lt;details&amp;gt;) creates a disclosure widget in which information is visible only when the widget is toggled into an &quot;open&quot; state."><code>&lt;details&gt;</code></a> element's disclosure box.</td>
  </tr>

 </tbody>
</table>

<h2 id="Web_Components">Web Components</h2>

<p>Web Components is an HTML-related technology which makes it possible to, essentially, create and use custom elements as if it were regular HTML. In addition, you can create custom versions of standard HTML elements.</p>

<table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/content" title="The HTML <content> element—an obsolete part of the Web Components suite of technologies—was used inside of Shadow DOM as an insertion point, and wasn't meant to be used in ordinary HTML."><code>&lt;content&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;content&gt;</code> element</strong>—an obsolete part of the <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a> suite of technologies—was used inside of <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM">Shadow DOM</a> as an <a class="glossaryLink new" rel="nofollow" title="The definition of that term (insertion point) has not been written yet; please consider contributing it!">insertion point</a>, and wasn't meant to be used in ordinary HTML.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/element" title="The obsolete HTML <element> element was part of the Web Components specification; it was intended to be used to define new custom DOM elements."><code>&lt;element&gt;</code></a></td>
   <td>The obsolete <strong>HTML <code>&lt;element&gt;</code> element</strong> was part of the <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a> specification; it was intended to be used to define new custom DOM elements.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/shadow" title="The HTML <shadow> element—an obsolete part of the Web Components technology suite—was intended to be used as a shadow DOM insertion point."><code>&lt;shadow&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;shadow&gt;</code> element</strong>—an obsolete part of the <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a> technology suite—was intended to be used as a shadow DOM <a class="glossaryLink new" rel="nofollow" title="The definition of that term (insertion point) has not been written yet; please consider contributing it!">insertion point</a>.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot" title="The HTML <slot> element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together."><code>&lt;slot&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;slot&gt;</code> element</strong>—part of the <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a> technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template" title="The HTML Content Template (<template>) element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript."><code>&lt;template&gt;</code></a></td>
   <td>The <strong>HTML Content Template (<code>&lt;template&gt;</code>) element</strong> is a mechanism for holding <a class="glossaryLink" href="https://developer.mozilla.org/en-US/docs/Glossary/HTML" title="HTML: HTML (HyperText Markup Language) is a descriptive language that specifies webpage structure.">HTML</a> that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.</td>
  </tr>

 </tbody>
</table>

<h2 id="Obsolete_and_deprecated_elements">Obsolete and deprecated elements</h2>

<div class="warning">
<p><strong>Warning:</strong> These are old HTML elements which are deprecated and should not be used.&nbsp;<strong>You should never use them in new projects, and should replace them in old projects as soon as you can.</strong>&nbsp;They are listed here for informational purposes only.</p>
</div>

<table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/acronym" title="The HTML Acronym Element (<acronym>) allows authors to clearly indicate a sequence of characters that compose an acronym or abbreviation for a word."><code>&lt;acronym&gt;</code></a></td>
   <td>The HTML Acronym Element (<code>&lt;acronym&gt;</code>) allows authors to clearly indicate a sequence of characters that compose an acronym or abbreviation for a word.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/applet" title="The obsolete HTML Applet Element (<applet>) embeds a Java applet into the document; this element has been deprecated in favor of <object>."><code>&lt;applet&gt;</code></a></td>
   <td>The obsolete <strong>HTML Applet Element</strong> (<strong><code>&lt;applet&gt;</code></strong>) embeds a Java applet into the document; this element has been deprecated in favor of <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object" title="The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin."><code>&lt;object&gt;</code></a>.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/basefont" title="The obsolete HTML Base Font element (<basefont>) sets a default font face, size, and color for the other elements which are descended from its parent element."><code>&lt;basefont&gt;</code></a></td>
   <td>The obsolete <strong>HTML Base Font element</strong> (<strong><code>&lt;basefont&gt;</code></strong>) sets a default font face, size, and color for the other elements which are descended from its parent element.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bgsound" title="The Internet Explorer only HTML Background Sound element (<bgsound>) sets up a sound file to play in the background while the page is used; use <audio> instead."><code>&lt;bgsound&gt;</code></a></td>
   <td>The Internet Explorer only <strong>HTML Background Sound element</strong> (<strong><code>&lt;bgsound&gt;</code></strong>) sets up a sound file to play in the background while the page is used; use <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" title="The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:&nbsp;the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."><code>&lt;audio&gt;</code></a> instead.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/big" title="The obsolete HTML Big Element (<big>) renders the enclosed text at a font size one level larger than the surrounding text (medium becomes large, for example)."><code>&lt;big&gt;</code></a></td>
   <td>The obsolete <strong>HTML Big Element</strong> (<strong><code>&lt;big&gt;</code></strong>) renders the enclosed text at a font size one level larger than the surrounding text (<code>medium</code> becomes <code>large</code>, for example).</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blink" title="The HTML Blink Element (<blink>) is a non-standard element which causes the enclosed text to flash slowly."><code>&lt;blink&gt;</code></a></td>
   <td>The <strong>HTML Blink Element</strong> (<code>&lt;blink&gt;</code>) is a non-standard element which causes the enclosed text to flash slowly.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center" title="The obsolete HTML Center Element (<center>) is a block-level element that displays its block-level or inline contents centered horizontally within its containing element."><code>&lt;center&gt;</code></a></td>
   <td>The obsolete <strong>HTML Center Element</strong> (<strong><code>&lt;center&gt;</code></strong>) is a <a href="https://developer.mozilla.org/en-US/docs/HTML/Block-level_elements" title="HTML/Block-level_elements">block-level element</a> that displays its block-level or inline contents centered horizontally within its containing element.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/command" title="The HTML Command element (<command>) represents a command which the user can invoke. Commands are often used as part of a context menu or toolbar."><code>&lt;command&gt;</code></a></td>
   <td>The <strong>HTML Command element</strong> (<strong><code>&lt;command&gt;</code></strong>) represents a command which the user can invoke. Commands are often used as part of a context menu or toolbar.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/content" title="The HTML <content> element—an obsolete part of the Web Components suite of technologies—was used inside of Shadow DOM as an insertion point, and wasn't meant to be used in ordinary HTML."><code>&lt;content&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;content&gt;</code> element</strong>—an obsolete part of the <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a> suite of technologies—was used inside of <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM">Shadow DOM</a> as an <a class="glossaryLink new" rel="nofollow" title="The definition of that term (insertion point) has not been written yet; please consider contributing it!">insertion point</a>, and wasn't meant to be used in ordinary HTML.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dir" title="The obsolete HTML Directory element (<dir>) is used as a container for a directory of files and/or folders, potentially with styles and icons applied by the user agent."><code>&lt;dir&gt;</code></a></td>
   <td>The obsolete <strong>HTML Directory element</strong> (<strong><code>&lt;dir&gt;</code></strong>) is used as a container for a directory of files and/or folders, potentially with styles and icons applied by the <a class="glossaryLink" href="https://developer.mozilla.org/en-US/docs/Glossary/user_agent" title="user agent: A user agent is a computer program representing a person, for example, a browser in a Web context.">user agent</a>.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/element" title="The obsolete HTML <element> element was part of the Web Components specification; it was intended to be used to define new custom DOM elements."><code>&lt;element&gt;</code></a></td>
   <td>The obsolete <strong>HTML <code>&lt;element&gt;</code> element</strong> was part of the <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a> specification; it was intended to be used to define new custom DOM elements.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font" title="The HTML Font Element (<font>) defines the font size, color and face for its content."><code>&lt;font&gt;</code></a></td>
   <td>The <em>HTML Font Element</em> (<code>&lt;font&gt;</code>) defines the font size, color and face for its content.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame" title="<frame> is an HTML element which defines a particular area in which another HTML document can be displayed. A frame should be used within a <frameset>."><code>&lt;frame&gt;</code></a></td>
   <td><code>&lt;frame&gt;</code> is an HTML element which defines a particular area in which another HTML document can be displayed. A frame should be used within a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frameset" title="The HTML <frameset> element is used to contain <frame> elements."><code>&lt;frameset&gt;</code></a>.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frameset" title="The HTML <frameset> element is used to contain <frame> elements."><code>&lt;frameset&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;frameset&gt;</code> element</strong> is used to contain <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame" title="<frame> is an HTML element which defines a particular area in which another HTML document can be displayed. A frame should be used within a <frameset>."><code>&lt;frame&gt;</code></a> elements.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/image" title="The obsolete HTML Image element (<image>) is an obsolete remnant of an ancient version of HTML lost in the mists of time; use the standard <img> element instead."><code>&lt;image&gt;</code></a></td>
   <td>The obsolete <strong>HTML Image element (<code>&lt;image&gt;</code>)</strong> is an obsolete remnant of an ancient version of HTML lost in the mists of time; use the standard <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a> element instead.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex" title="<isindex> is an obsolete HTML element that puts a text field in a page for querying the document."><code>&lt;isindex&gt;</code></a></td>
   <td><strong><code>&lt;isindex&gt;</code></strong> is an obsolete HTML element that puts a text field in a page for querying the document.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen" title="The HTML <keygen> element exists to facilitate generation of key material, and submission of the public key as part of an HTML form. This mechanism is designed for use with Web-based certificate management systems. It is expected that the <keygen> element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate."><code>&lt;keygen&gt;</code></a></td>
   <td>The HTML <code>&lt;keygen&gt;</code> element exists to facilitate generation of key material, and submission of the public key as part of an <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms">HTML form</a>. This mechanism is designed for use with Web-based certificate management systems. It is expected that the <code>&lt;keygen&gt;</code> element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/listing" title="The HTML Listing Element (<listing>) renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML 2 standard recommended that lines shouldn't be broken when not greater than 132 characters."><code>&lt;listing&gt;</code></a></td>
   <td>The <em>HTML Listing Element</em> (<code>&lt;listing&gt;</code>) renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML 2 standard recommended that lines shouldn't be broken when not greater than 132 characters.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee" title="The HTML <marquee> element is used to insert a scrolling area of text. You can control what happens when the text reaches the edges of its content area using its attributes."><code>&lt;marquee&gt;</code></a></td>
   <td>The HTML <code>&lt;marquee&gt;</code> element is used to insert a scrolling area of text. You can control what happens when the text reaches the edges of its content area using its attributes.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem" title="The HTML <menuitem> element represents a command that a user is able to invoke through a popup menu. This includes context menus, as well as menus that might be attached to a menu button."><code>&lt;menuitem&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;menuitem&gt;</code> element</strong> represents a command that a user is able to invoke through a popup menu. This includes context menus, as well as menus that might be attached to a menu button.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/multicol" title="The HTML Multi-Column Layout element (<multicol>) was an experimental element designed to allow multi-column layouts and must not be used."><code>&lt;multicol&gt;</code></a></td>
   <td>The <strong>HTML Multi-Column Layout element</strong> (<strong><code>&lt;multicol&gt;</code></strong>) was an experimental element designed to allow multi-column layouts and must not be used.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nextid" title="<nextid> is an obsolete HTML element that served to enable the NeXT web designing tool to generate automatic NAME labels for its anchors."><code>&lt;nextid&gt;</code></a></td>
   <td><strong><code>&lt;nextid&gt;</code></strong> is an obsolete HTML element that served to enable the NeXT web designing tool to generate automatic NAME labels for its anchors.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nobr" title="The non-standard, obsolete HTML <nobr> element prevents the text it contains from automatically wrapping across multiple lines, potentially resulting in the user having to scroll horizontally to see the entire width of the text."><code>&lt;nobr&gt;</code></a></td>
   <td>The non-standard, obsolete HTML <code>&lt;nobr&gt;</code> element prevents the text it contains from automatically wrapping across multiple lines, potentially resulting in the user having to scroll horizontally to see the entire width of the text.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noembed" title="The <noembed> element is an obsolete, non-standard way to provide alternative, or &quot;fallback&quot;, content for browsers that do not support the <embed> element or do not support the type of embedded content an author wishes to use."><code>&lt;noembed&gt;</code></a></td>
   <td>The <code><strong>&lt;noembed&gt;</strong></code> element is an obsolete, non-standard way to provide alternative, or "fallback", content for browsers that do not support the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed" title="The HTML <embed> element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in."><code>&lt;embed&gt;</code></a> element or do not support the type of <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Embedded_content">embedded content</a> an author wishes to use.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noframes" title="The obsolete HTML No Frames or frame fallback element, <noframes>, provides content to be presented in browsers that don't support (or have disabled support for) the <frame> element."><code>&lt;noframes&gt;</code></a></td>
   <td>The obsolete HTML <strong>No Frames</strong> or <strong>frame fallback</strong> element, <strong><code>&lt;noframes&gt;</code></strong>, provides content to be presented in browsers that don't support (or have disabled support for) the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame" title="<frame> is an HTML element which defines a particular area in which another HTML document can be displayed. A frame should be used within a <frameset>."><code>&lt;frame&gt;</code></a> element.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/plaintext" title="The HTML Plaintext Element (<plaintext>) renders everything following the start tag as raw text, ignoring any following HTML."><code>&lt;plaintext&gt;</code></a></td>
   <td>The <em>HTML Plaintext Element</em> (<code>&lt;plaintext&gt;</code>) renders everything following the start tag as raw text, ignoring any following HTML.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/shadow" title="The HTML <shadow> element—an obsolete part of the Web Components technology suite—was intended to be used as a shadow DOM insertion point."><code>&lt;shadow&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;shadow&gt;</code> element</strong>—an obsolete part of the <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a> technology suite—was intended to be used as a shadow DOM <a class="glossaryLink new" rel="nofollow" title="The definition of that term (insertion point) has not been written yet; please consider contributing it!">insertion point</a>.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/spacer" title="<spacer> is an obsolete HTML element which allowed insertion of empty spaces on pages. It was devised by Netscape to accomplish the same effect as a single-pixel layout image, which was something web designers used to use to add white spaces to web pages without actually using an image. However, <spacer> no longer supported by any major browser and the same effects can now be achieved using simple CSS. "><code>&lt;spacer&gt;</code></a></td>
   <td><strong><code>&lt;spacer&gt;</code></strong> is an obsolete HTML element which allowed insertion of empty spaces on pages. It was devised by Netscape to accomplish the same effect as a single-pixel layout image, which was something web designers used to use to add white spaces to web pages without actually using an image. However, <code>&lt;spacer&gt;</code> no longer supported by any major browser and the same effects can now be achieved using simple CSS. </td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strike" title="The HTML <strike> element (or HTML Strikethrough Element) places&nbsp;a strikethrough (horizontal line) over text."><code>&lt;strike&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;strike&gt;</code> element</strong> (or <em>HTML Strikethrough Element</em>) places&nbsp;a strikethrough (horizontal line) over text.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tt" title="The obsolete HTML Teletype Text element (<tt>) creates inline text which is presented using the user agent's default monospace font face."><code>&lt;tt&gt;</code></a></td>
   <td>The obsolete <strong>HTML Teletype Text element</strong> (<strong><code>&lt;tt&gt;</code></strong>) creates inline text which is presented using the <a class="glossaryLink" href="https://developer.mozilla.org/en-US/docs/Glossary/user_agent" title="user agent's: A user agent is a computer program representing a person, for example, a browser in a Web context.">user agent's</a> default monospace font face.</td>
  </tr>

  <tr>

   <td style="vertical-align: top;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/xmp" title="The HTML Example Element (<xmp>) renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML2 specification recommended that it should be rendered wide enough to allow 80 characters per line."><code>&lt;xmp&gt;</code></a></td>
   <td>The <em>HTML Example Element</em> (<code>&lt;xmp&gt;</code>) renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML2 specification recommended that it should be rendered wide enough to allow 80 characters per line.</td>
  </tr>

 </tbody>
</table>
</div>
</article>
# Attributes


## Attribute Reference

<i>

</i>
<article id="wikiArticle"><div></div>

<p>Elements in HTML have <strong>attributes</strong>; these are additional values that configure the elements or adjust their behavior in various ways to meet the criteria the users want.</p>

<h2 id="Attribute_list">Attribute list</h2>

<div style="overflow-x:auto;">
<table class="standard-table">
 <thead>
  <tr>
   <th>Attribute Name</th>
   <th>Elements</th>
   <th>Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept">accept</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" title="The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server."><code>&lt;form&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a></td>
   <td>List of types the server accepts, typically a file type.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">accept-charset</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" title="The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server."><code>&lt;form&gt;</code></a></td>
   <td>List of supported charsets.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey">accesskey</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td>Keyboard shortcut to activate or add focus to the element.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">action</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" title="The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server."><code>&lt;form&gt;</code></a></td>
   <td>The URI of a program that processes the information submitted via the form.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">align</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/applet" title="The obsolete HTML Applet Element (<applet>) embeds a Java applet into the document; this element has been deprecated in favor of <object>."><code>&lt;applet&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption" title="The HTML Table Caption element (<caption>) specifies the caption (or title) of a table, and if used is always the first child of a <table>."><code>&lt;caption&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col" title="The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element."><code>&lt;col&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup" title="The HTML <colgroup> element defines a group of columns within a table."><code>&lt;colgroup&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr" title="The HTML <hr> element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section."><code>&lt;hr&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" title="The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one."><code>&lt;iframe&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" title="The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data."><code>&lt;table&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody" title="The HTML Table Body element (<tbody>) encapsulates a set of table rows (<tr> elements), indicating that they comprise the body of the table (<table>)."><code>&lt;tbody&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td" title="The HTML <td> element defines a cell of a table that contains data. It participates in the table model."><code>&lt;td&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot" title="The HTML <tfoot> element defines a set of rows summarizing the columns of the table."><code>&lt;tfoot&gt;</code></a> , <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th" title="The HTML <th> element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes."><code>&lt;th&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead" title="The HTML <thead> element defines a set of rows defining the head of the columns of the table."><code>&lt;thead&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr" title="The HTML <tr> element defines a row of cells in a table. The row's cells can then be established using a mix of <td> (data cell) and <th> (header cell) elements."><code>&lt;tr&gt;</code></a></td>
   <td>Specifies the horizontal alignment of the element.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">allow</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" title="The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one."><code>&lt;iframe&gt;</code></a></td>
   <td>Specifies a feature-policy for the iframe.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">alt</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/applet" title="The obsolete HTML Applet Element (<applet>) embeds a Java applet into the document; this element has been deprecated in favor of <object>."><code>&lt;applet&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area" title="The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element."><code>&lt;area&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a></td>
   <td>Alternative text in case an image can't be displayed.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">async</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" title="The HTML <script> element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code."><code>&lt;script&gt;</code></a></td>
   <td>Executes the script asynchronously.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize">autocapitalize</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td>Sets whether input is automatically capitalized when entered by user</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete">autocomplete</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" title="The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server."><code>&lt;form&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>,&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select" title="The HTML <select> element represents a control that provides a menu of options"><code>&lt;select&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" title="The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."><code>&lt;textarea&gt;</code></a></td>
   <td>Indicates whether controls in this form can by default have their values automatically completed by the browser.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">autofocus</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" title="The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality."><code>&lt;button&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen" title="The HTML <keygen> element exists to facilitate generation of key material, and submission of the public key as part of an HTML form. This mechanism is designed for use with Web-based certificate management systems. It is expected that the <keygen> element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate."><code>&lt;keygen&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select" title="The HTML <select> element represents a control that provides a menu of options"><code>&lt;select&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" title="The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."><code>&lt;textarea&gt;</code></a></td>
   <td>The element should be automatically focused after the page loaded.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">autoplay</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" title="The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:&nbsp;the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."><code>&lt;audio&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" title="The&nbsp;HTML Video element&nbsp;(<video>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<video>&nbsp;for audio content as well, but the <audio> element may provide a more appropriate user experience."><code>&lt;video&gt;</code></a></td>
   <td>The audio or video should play as soon as possible.</td>
  </tr>
  <tr>
   <td><code>background</code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body" title="The HTML <body> Element represents the content of an HTML&nbsp;document. There can be only one <body> element in a document."><code>&lt;body&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" title="The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data."><code>&lt;table&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td" title="The HTML <td> element defines a cell of a table that contains data. It participates in the table model."><code>&lt;td&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th" title="The HTML <th> element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes."><code>&lt;th&gt;</code></a></td>
   <td>Specifies the URL of an image file.
    <div class="note"><strong>Note:</strong> Although browsers and email clients may still support this attribute, it is obsolete. Use CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-image" title="The background-image CSS property sets one or more background images on an element."><code>background-image</code></a> instead.</div>
   </td>
  </tr>
  <tr>
   <td><code>bgcolor</code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body" title="The HTML <body> Element represents the content of an HTML&nbsp;document. There can be only one <body> element in a document."><code>&lt;body&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col" title="The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element."><code>&lt;col&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup" title="The HTML <colgroup> element defines a group of columns within a table."><code>&lt;colgroup&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee" title="The HTML <marquee> element is used to insert a scrolling area of text. You can control what happens when the text reaches the edges of its content area using its attributes."><code>&lt;marquee&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" title="The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data."><code>&lt;table&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody" title="The HTML Table Body element (<tbody>) encapsulates a set of table rows (<tr> elements), indicating that they comprise the body of the table (<table>)."><code>&lt;tbody&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot" title="The HTML <tfoot> element defines a set of rows summarizing the columns of the table."><code>&lt;tfoot&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td" title="The HTML <td> element defines a cell of a table that contains data. It participates in the table model."><code>&lt;td&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th" title="The HTML <th> element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes."><code>&lt;th&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr" title="The HTML <tr> element defines a row of cells in a table. The row's cells can then be established using a mix of <td> (data cell) and <th> (header cell) elements."><code>&lt;tr&gt;</code></a></td>
   <td>
    <p>Background color of the element.</p>

    <div class="note">
    <p><strong>Note:</strong> This is a legacy attribute. Please use the CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-color" title="The background-color CSS property sets the background color of an element."><code>background-color</code></a> property instead.</p>
    </div>
   </td>
  </tr>
  <tr>
   <td><code>border</code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object" title="The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin."><code>&lt;object&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" title="The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data."><code>&lt;table&gt;</code></a></td>
   <td>
    <p>The border width.</p>

    <div class="note">
    <p><strong>Note:</strong> This is a legacy attribute. Please use the CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border" title="The border shorthand CSS property sets an element's border."><code>border</code></a> property instead.</p>
    </div>
   </td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">buffered</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" title="The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:&nbsp;the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."><code>&lt;audio&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" title="The&nbsp;HTML Video element&nbsp;(<video>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<video>&nbsp;for audio content as well, but the <audio> element may provide a more appropriate user experience."><code>&lt;video&gt;</code></a></td>
   <td>Contains the time range of already buffered media.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture">capture</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a></td>
   <td>From the <a class="external" href="https://developer.mozilla.orghttps://w3c.github.io/html-media-capture/#the-capture-attribute" hreflang="en" lang="en" rel="noopener">HTML Media Capture<br><small lang="en-US">The definition of 'media capture' in that specification.</small></a>spec, specifies a new file can be captured.</td>
  </tr>
  <tr>
   <td><code>challenge</code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen" title="The HTML <keygen> element exists to facilitate generation of key material, and submission of the public key as part of an HTML form. This mechanism is designed for use with Web-based certificate management systems. It is expected that the <keygen> element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate."><code>&lt;keygen&gt;</code></a></td>
   <td>A challenge string that is submitted along with the public key.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">charset</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta" title="The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>."><code>&lt;meta&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" title="The HTML <script> element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code."><code>&lt;script&gt;</code></a></td>
   <td>Declares the character encoding of the page or script.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">checked</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/command" title="The HTML Command element (<command>) represents a command which the user can invoke. Commands are often used as part of a context menu or toolbar."><code>&lt;command&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a></td>
   <td>Indicates whether the element should be checked on page load.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">cite</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote" title="The HTML <blockquote> Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element."><code>&lt;blockquote&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del" title="The HTML <del> element represents a range of text that has been deleted from a document."><code>&lt;del&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins" title="The HTML <ins> element represents a range of text that has been added to a document."><code>&lt;ins&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q" title="The HTML <q> element  indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. "><code>&lt;q&gt;</code></a></td>
   <td>Contains a URI which points to the source of the quote or change.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class">class</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td>Often used with CSS to style elements with common properties.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">code</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/applet" title="The obsolete HTML Applet Element (<applet>) embeds a Java applet into the document; this element has been deprecated in favor of <object>."><code>&lt;applet&gt;</code></a></td>
   <td>Specifies the URL of the applet's class file to be loaded and executed.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">codebase</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/applet" title="The obsolete HTML Applet Element (<applet>) embeds a Java applet into the document; this element has been deprecated in favor of <object>."><code>&lt;applet&gt;</code></a></td>
   <td>This attribute gives the absolute or relative URL of the directory where applets' .class files referenced by the code attribute are stored.</td>
  </tr>
  <tr>
   <td><code>color</code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/basefont" title="The obsolete HTML Base Font element (<basefont>) sets a default font face, size, and color for the other elements which are descended from its parent element."><code>&lt;basefont&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font" title="The HTML Font Element (<font>) defines the font size, color and face for its content."><code>&lt;font&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr" title="The HTML <hr> element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section."><code>&lt;hr&gt;</code></a></td>
   <td>
    <p>This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format.</p>

    <div class="note">
    <p><strong>Note:</strong> This is a legacy attribute. Please use the CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color" title="The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value."><code>color</code></a> property instead.</p>
    </div>
   </td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">cols</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" title="The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."><code>&lt;textarea&gt;</code></a></td>
   <td>Defines the number of columns in a textarea.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">colspan</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td" title="The HTML <td> element defines a cell of a table that contains data. It participates in the table model."><code>&lt;td&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th" title="The HTML <th> element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes."><code>&lt;th&gt;</code></a></td>
   <td>The colspan attribute defines the number of columns a cell should span.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">content</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta" title="The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>."><code>&lt;meta&gt;</code></a></td>
   <td>A value associated with <code>http-equiv</code> or <code>name</code> depending on the context.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable">contenteditable</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td>Indicates whether the element's content is editable.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">contextmenu</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td>Defines the ID of a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu" title="The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked."><code>&lt;menu&gt;</code></a> element which will serve as the element's context menu.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">controls</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" title="The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:&nbsp;the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."><code>&lt;audio&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" title="The&nbsp;HTML Video element&nbsp;(<video>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<video>&nbsp;for audio content as well, but the <audio> element may provide a more appropriate user experience."><code>&lt;video&gt;</code></a></td>
   <td>Indicates whether the browser should show playback controls to the user.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">coords</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area" title="The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element."><code>&lt;area&gt;</code></a></td>
   <td>A set of values specifying the coordinates of the hot-spot region.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/docs/Web/HTML/CORS_settings_attributes">crossorigin</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" title="The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:&nbsp;the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."><code>&lt;audio&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link" title="The HTML External Resource Link element (<link>) specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both &quot;favicon&quot; style icons and icons for the home screen and apps on mobile devices) among other things."><code>&lt;link&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" title="The HTML <script> element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code."><code>&lt;script&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" title="The&nbsp;HTML Video element&nbsp;(<video>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<video>&nbsp;for audio content as well, but the <audio> element may provide a more appropriate user experience."><code>&lt;video&gt;</code></a></td>
   <td>How the element handles cross-origin requests</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/docs/Web/API/HTMLiframeElement/csp">csp</a></code>&nbsp;<span class="icon-only-inline" title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" title="The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one."><code>&lt;iframe&gt;</code></a></td>
   <td>Specifies the Content Security Policy that an embedded document must agree to enforce upon itself.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">data</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object" title="The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin."><code>&lt;object&gt;</code></a></td>
   <td>Specifies the URL of the resource.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*">data-*</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td>Lets you attach custom attributes to an HTML element.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">datetime</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del" title="The HTML <del> element represents a range of text that has been deleted from a document."><code>&lt;del&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins" title="The HTML <ins> element represents a range of text that has been added to a document."><code>&lt;ins&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time" title="The HTML <time> element represents a specific period in time."><code>&lt;time&gt;</code></a></td>
   <td>Indicates the date and time associated with the element.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">decoding</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a></td>
   <td>Indicates the preferred method to decode the image.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">default</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track" title="The HTML <track> element is used as a child of the media elements <audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks or&nbsp;Timed Text Markup Language (TTML)."><code>&lt;track&gt;</code></a></td>
   <td>Indicates that the track should be enabled unless the user's preferences indicate something different.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">defer</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" title="The HTML <script> element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code."><code>&lt;script&gt;</code></a></td>
   <td>Indicates that the script should be executed after the page has been parsed.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir">dir</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td>Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">dirname</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" title="The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."><code>&lt;textarea&gt;</code></a></td>
   <td></td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled">disabled</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" title="The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality."><code>&lt;button&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/command" title="The HTML Command element (<command>) represents a command which the user can invoke. Commands are often used as part of a context menu or toolbar."><code>&lt;command&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset" title="The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form."><code>&lt;fieldset&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen" title="The HTML <keygen> element exists to facilitate generation of key material, and submission of the public key as part of an HTML form. This mechanism is designed for use with Web-based certificate management systems. It is expected that the <keygen> element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate."><code>&lt;keygen&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup" title="The HTML <optgroup> element creates a grouping of options within a <select> element."><code>&lt;optgroup&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option" title="The HTML <option> element is used to define an item contained in a <select>, an <optgroup>, or a <datalist>&nbsp;element. As such,&nbsp;<option>&nbsp;can represent menu items in popups and other lists of items in an HTML document."><code>&lt;option&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select" title="The HTML <select> element represents a control that provides a menu of options"><code>&lt;select&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" title="The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."><code>&lt;textarea&gt;</code></a></td>
   <td>Indicates whether the user can interact with the element.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">download</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" title="The HTML <a> element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address."><code>&lt;a&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area" title="The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element."><code>&lt;area&gt;</code></a></td>
   <td>Indicates that the hyperlink is to be used for downloading a resource.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">draggable</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td>Defines whether the element can be dragged.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">dropzone</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td>Indicates that the element accept the dropping of content on it.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">enctype</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" title="The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server."><code>&lt;form&gt;</code></a></td>
   <td>Defines the content type of the form date when the <code>method</code> is POST.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">enterkeyhint</a></code> <span class="icon-only-inline" title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" title="The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."><code>&lt;textarea&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable"><code>contenteditable</code></a></td>
   <td>The <a class="external" href="https://developer.mozilla.orghttps://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute" rel="noopener"><code>enterkeyhint</code></a> specifies what action label (or icon) to present for the enter key on virtual keyboards. The attribute can be used with form controls (such as the value of <code>textarea</code> elements), or in elements in an editing host (e.g., using <code>contenteditable</code> attribute).</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">for</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label" title="The HTML <label> element represents a caption for an item in a user interface."><code>&lt;label&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output" title="The HTML Output element (<output>) is a container element into which a site or app can inject the results of a calculation or the outcome of a user action."><code>&lt;output&gt;</code></a></td>
   <td>Describes elements which belongs to this one.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">form</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" title="The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality."><code>&lt;button&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset" title="The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form."><code>&lt;fieldset&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen" title="The HTML <keygen> element exists to facilitate generation of key material, and submission of the public key as part of an HTML form. This mechanism is designed for use with Web-based certificate management systems. It is expected that the <keygen> element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate."><code>&lt;keygen&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label" title="The HTML <label> element represents a caption for an item in a user interface."><code>&lt;label&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter" title="The HTML <meter> element represents either a scalar value within a known range or a fractional value."><code>&lt;meter&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object" title="The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin."><code>&lt;object&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output" title="The HTML Output element (<output>) is a container element into which a site or app can inject the results of a calculation or the outcome of a user action."><code>&lt;output&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress" title="The HTML <progress> element displays an indicator showing the completion progress of a task, typically displayed as a progress bar."><code>&lt;progress&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select" title="The HTML <select> element represents a control that provides a menu of options"><code>&lt;select&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" title="The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."><code>&lt;textarea&gt;</code></a></td>
   <td>Indicates the form that is the owner of the element.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">formaction</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" title="The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality."><code>&lt;button&gt;</code></a></td>
   <td>Indicates the action of the element, overriding the action defined in the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" title="The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server."><code>&lt;form&gt;</code></a>.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">formenctype</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" title="The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality."><code>&lt;button&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a></td>
   <td>If the button/input is a submit button (<code>type="submit"</code>), this attribute sets the encoding type to use during form submission. If this attribute is specified, it overrides the <code>enctype</code> attribute of the button's <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form">form</a> owner.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">formmethod</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" title="The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality."><code>&lt;button&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a></td>
   <td>If the button/input is a submit button (<code>type="submit"</code>), this attribute sets the submission method to use during form submission (<code>GET</code>, <code>POST</code>, etc.). If this attribute is specified, it overrides the <code>method</code> attribute of the button's <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form">form</a> owner.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">formnovalidate</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" title="The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality."><code>&lt;button&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a></td>
   <td>If the button/input is a submit button (<code>type="submit"</code>), this boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the <code>novalidate</code> attribute of the button's <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form">form</a> owner.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">formtarget</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" title="The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality."><code>&lt;button&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a></td>
   <td>If the button/input is a submit button (<code>type="submit"</code>), this attribute specifies the browsing context (for example, tab, window, or inline frame) in which to display the response that is received after submitting the form. If this attribute is specified, it overrides the <code>target</code> attribute of the button's <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form">form</a> owner.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">headers</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td" title="The HTML <td> element defines a cell of a table that contains data. It participates in the table model."><code>&lt;td&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th" title="The HTML <th> element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes."><code>&lt;th&gt;</code></a></td>
   <td>IDs of the <code>&lt;th&gt;</code> elements which applies to this element.</td>
  </tr>
  <tr>
   <td><code>height</code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas" title="Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations."><code>&lt;canvas&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed" title="The HTML <embed> element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in."><code>&lt;embed&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" title="The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one."><code>&lt;iframe&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object" title="The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin."><code>&lt;object&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" title="The&nbsp;HTML Video element&nbsp;(<video>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<video>&nbsp;for audio content as well, but the <audio> element may provide a more appropriate user experience."><code>&lt;video&gt;</code></a></td>
   <td>
    <p>Specifies the height of elements listed here. For all other elements, use the CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/height" title="The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area."><code>height</code></a> property.</p>

    <div class="note">
    <p><strong>Note:</strong> In some instances, such as <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div" title="The HTML Content Division element (<div>) is the generic container for flow content. It has no effect on the content or layout until styled using CSS."><code>&lt;div&gt;</code></a>, this is a legacy attribute, in which case the CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/height" title="The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area."><code>height</code></a> property should be used instead.</p>
    </div>
   </td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden">hidden</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td>Prevents rendering of given element, while keeping child elements, e.g. script elements, active.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">high</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter" title="The HTML <meter> element represents either a scalar value within a known range or a fractional value."><code>&lt;meter&gt;</code></a></td>
   <td>Indicates the lower bound of the upper range.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">href</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" title="The HTML <a> element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address."><code>&lt;a&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area" title="The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element."><code>&lt;area&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base" title="The HTML <base> element specifies the base URL to use for all relative URLs in a document."><code>&lt;base&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link" title="The HTML External Resource Link element (<link>) specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both &quot;favicon&quot; style icons and icons for the home screen and apps on mobile devices) among other things."><code>&lt;link&gt;</code></a></td>
   <td>The URL of a linked resource.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">hreflang</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" title="The HTML <a> element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address."><code>&lt;a&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area" title="The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element."><code>&lt;area&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link" title="The HTML External Resource Link element (<link>) specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both &quot;favicon&quot; style icons and icons for the home screen and apps on mobile devices) among other things."><code>&lt;link&gt;</code></a></td>
   <td>Specifies the language of the linked resource.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">http-equiv</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta" title="The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>."><code>&lt;meta&gt;</code></a></td>
   <td>Defines a pragma directive.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">icon</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/command" title="The HTML Command element (<command>) represents a command which the user can invoke. Commands are often used as part of a context menu or toolbar."><code>&lt;command&gt;</code></a></td>
   <td>Specifies a picture which represents the command.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id">id</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td>Often used with CSS to style a specific element. The value of this attribute must be unique.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">importance</a></code>&nbsp;<span class="icon-only-inline" title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" title="The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one."><code>&lt;iframe&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link" title="The HTML External Resource Link element (<link>) specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both &quot;favicon&quot; style icons and icons for the home screen and apps on mobile devices) among other things."><code>&lt;link&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" title="The HTML <script> element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code."><code>&lt;script&gt;</code></a></td>
   <td>Indicates the relative fetch priority for the resource.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity">integrity</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link" title="The HTML External Resource Link element (<link>) specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both &quot;favicon&quot; style icons and icons for the home screen and apps on mobile devices) among other things."><code>&lt;link&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" title="The HTML <script> element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code."><code>&lt;script&gt;</code></a></td>
   <td>
    <p>Specifies a <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity">Subresource Integrity</a> value that allows browsers to verify what they fetch.</p>
   </td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-intrinsicsize"><code>intrinsicsize</code></a>&nbsp;<span class="icon-only-inline" title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a></td>
   <td>This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it’s the size specified in the attribute.</td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode"><code>inputmode</code></a></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" title="The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."><code>&lt;textarea&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable"><code>contenteditable</code></a></td>
   <td>Provides a hint as to the type of data that might be entered by the user while editing the element or its contents. The attribute can be used with form controls (such as the value of <code>textarea</code> elements), or in elements in an editing host (e.g., using <code>contenteditable</code> attribute).</td>
  </tr>
  <tr>
   <td><code>ismap</code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a></td>
   <td>Indicates that the image is part of a server-side image map.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemprop">itemprop</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td></td>
  </tr>
  <tr>
   <td><code>keytype</code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen" title="The HTML <keygen> element exists to facilitate generation of key material, and submission of the public key as part of an HTML form. This mechanism is designed for use with Web-based certificate management systems. It is expected that the <keygen> element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate."><code>&lt;keygen&gt;</code></a></td>
   <td>Specifies the type of key generated.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">kind</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track" title="The HTML <track> element is used as a child of the media elements <audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks or&nbsp;Timed Text Markup Language (TTML)."><code>&lt;track&gt;</code></a></td>
   <td>Specifies the kind of text track.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">label</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup" title="The HTML <optgroup> element creates a grouping of options within a <select> element."><code>&lt;optgroup&gt;</code></a>,&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option" title="The HTML <option> element is used to define an item contained in a <select>, an <optgroup>, or a <datalist>&nbsp;element. As such,&nbsp;<option>&nbsp;can represent menu items in popups and other lists of items in an HTML document."><code>&lt;option&gt;</code></a>,&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track" title="The HTML <track> element is used as a child of the media elements <audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks or&nbsp;Timed Text Markup Language (TTML)."><code>&lt;track&gt;</code></a></td>
   <td>Specifies a user-readable title of the element.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang">lang</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td>Defines the language used in the element.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">language</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" title="The HTML <script> element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code."><code>&lt;script&gt;</code></a></td>
   <td>Defines the script language used in the element.</td>
  </tr>
  <tr>
   <td><code>loading</code>&nbsp;<span class="icon-only-inline" title="This is an experimental API that should not be used in production code."><i class="icon-beaker"> </i></span></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" title="The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one."><code>&lt;iframe&gt;</code></a></td>
   <td>Indicates if the element should be loaded lazily (<code>loading="lazy"</code>) or loaded immediately (<code>loading="eager"</code>).
    <div class="note"><strong>WIP:</strong> <a class="external" href="https://developer.mozilla.orghttps://github.com/whatwg/html/pull/3752" rel="noopener">WHATWG PR #3752</a></div>
   </td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">list</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a></td>
   <td>Identifies a list of pre-defined options to suggest to the user.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">loop</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" title="The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:&nbsp;the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."><code>&lt;audio&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bgsound" title="The Internet Explorer only HTML Background Sound element (<bgsound>) sets up a sound file to play in the background while the page is used; use <audio> instead."><code>&lt;bgsound&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee" title="The HTML <marquee> element is used to insert a scrolling area of text. You can control what happens when the text reaches the edges of its content area using its attributes."><code>&lt;marquee&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" title="The&nbsp;HTML Video element&nbsp;(<video>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<video>&nbsp;for audio content as well, but the <audio> element may provide a more appropriate user experience."><code>&lt;video&gt;</code></a></td>
   <td>Indicates whether the media should start playing from the start when it's finished.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">low</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter" title="The HTML <meter> element represents either a scalar value within a known range or a fractional value."><code>&lt;meter&gt;</code></a></td>
   <td>Indicates the upper bound of the lower range.</td>
  </tr>
  <tr>
   <td><code>manifest</code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html" title="The HTML <html> element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element."><code>&lt;html&gt;</code></a></td>
   <td>Specifies the URL of the document's cache manifest.
    <div class="note"><strong>Note:</strong> This attribute is obsolete, use <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest"><code>&lt;link rel="manifest"&gt;</code></a> instead.</div>
   </td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max">max</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter" title="The HTML <meter> element represents either a scalar value within a known range or a fractional value."><code>&lt;meter&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress" title="The HTML <progress> element displays an indicator showing the completion progress of a task, typically displayed as a progress bar."><code>&lt;progress&gt;</code></a></td>
   <td>Indicates the maximum value allowed.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/maxlength">maxlength</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" title="The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."><code>&lt;textarea&gt;</code></a></td>
   <td>Defines the maximum number of characters allowed in the element.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/minlength">minlength</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" title="The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."><code>&lt;textarea&gt;</code></a></td>
   <td>Defines the minimum number of characters allowed in the element.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">media</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" title="The HTML <a> element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address."><code>&lt;a&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area" title="The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element."><code>&lt;area&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link" title="The HTML External Resource Link element (<link>) specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both &quot;favicon&quot; style icons and icons for the home screen and apps on mobile devices) among other things."><code>&lt;link&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source" title="The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element."><code>&lt;source&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style" title="The HTML <style> element contains style information for a document, or part of a document."><code>&lt;style&gt;</code></a></td>
   <td>Specifies a hint of the media for which the linked resource was designed.</td>
  </tr>
  <tr>
   <td><a class="new" rel="nofollow" title="Page has not yet been created.">method</a></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" title="The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server."><code>&lt;form&gt;</code></a></td>
   <td>Defines which <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP">HTTP</a> method to use when submitting the form. Can be <code>GET</code> (default) or <code>POST</code>.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/min">min</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter" title="The HTML <meter> element represents either a scalar value within a known range or a fractional value."><code>&lt;meter&gt;</code></a></td>
   <td>Indicates the minimum value allowed.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/multiple">multiple</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select" title="The HTML <select> element represents a control that provides a menu of options"><code>&lt;select&gt;</code></a></td>
   <td>Indicates whether multiple values can be entered in an input of the type <code>email</code> or <code>file</code>.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">muted</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" title="The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:&nbsp;the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."><code>&lt;audio&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" title="The&nbsp;HTML Video element&nbsp;(<video>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<video>&nbsp;for audio content as well, but the <audio> element may provide a more appropriate user experience."><code>&lt;video&gt;</code></a></td>
   <td>Indicates whether the audio will be initially silenced on page load.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">name</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" title="The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality."><code>&lt;button&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" title="The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server."><code>&lt;form&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset" title="The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form."><code>&lt;fieldset&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" title="The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one."><code>&lt;iframe&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen" title="The HTML <keygen> element exists to facilitate generation of key material, and submission of the public key as part of an HTML form. This mechanism is designed for use with Web-based certificate management systems. It is expected that the <keygen> element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate."><code>&lt;keygen&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object" title="The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin."><code>&lt;object&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output" title="The HTML Output element (<output>) is a container element into which a site or app can inject the results of a calculation or the outcome of a user action."><code>&lt;output&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select" title="The HTML <select> element represents a control that provides a menu of options"><code>&lt;select&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" title="The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."><code>&lt;textarea&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map" title="The HTML <map> element is used with <area> elements to define an image map (a clickable link area)."><code>&lt;map&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta" title="The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>."><code>&lt;meta&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param" title="The HTML <param> element defines parameters for an <object> element."><code>&lt;param&gt;</code></a></td>
   <td>Name of the element. For example used by the server to identify the fields in form submits.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">novalidate</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" title="The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server."><code>&lt;form&gt;</code></a></td>
   <td>This attribute indicates that the form shouldn't be validated when submitted.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">open</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details" title="The HTML Details Element (<details>) creates a disclosure widget in which information is visible only when the widget is toggled into an &quot;open&quot; state."><code>&lt;details&gt;</code></a></td>
   <td>Indicates whether the details will be shown on page load.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">optimum</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter" title="The HTML <meter> element represents either a scalar value within a known range or a fractional value."><code>&lt;meter&gt;</code></a></td>
   <td>Indicates the optimal numeric value.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern">pattern</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a></td>
   <td>Defines a regular expression which the element's value will be validated against.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-ping">ping</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" title="The HTML <a> element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address."><code>&lt;a&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area" title="The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element."><code>&lt;area&gt;</code></a></td>
   <td>The <code>ping</code> attribute specifies a space-separated list of URLs to be notified if a user follows the hyperlink.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">placeholder</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" title="The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."><code>&lt;textarea&gt;</code></a></td>
   <td>Provides a hint to the user of what can be entered in the field.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">poster</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" title="The&nbsp;HTML Video element&nbsp;(<video>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<video>&nbsp;for audio content as well, but the <audio> element may provide a more appropriate user experience."><code>&lt;video&gt;</code></a></td>
   <td>A URL indicating a poster frame to show until the user plays or seeks.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">preload</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" title="The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:&nbsp;the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."><code>&lt;audio&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" title="The&nbsp;HTML Video element&nbsp;(<video>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<video>&nbsp;for audio content as well, but the <audio> element may provide a more appropriate user experience."><code>&lt;video&gt;</code></a></td>
   <td>Indicates whether the whole resource, parts of it or nothing should be preloaded.</td>
  </tr>
  <tr>
   <td><code>radiogroup</code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/command" title="The HTML Command element (<command>) represents a command which the user can invoke. Commands are often used as part of a context menu or toolbar."><code>&lt;command&gt;</code></a></td>
   <td></td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly">readonly</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" title="The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."><code>&lt;textarea&gt;</code></a></td>
   <td>Indicates whether the element can be edited.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">referrerpolicy</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" title="The HTML <a> element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address."><code>&lt;a&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area" title="The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element."><code>&lt;area&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" title="The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one."><code>&lt;iframe&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link" title="The HTML External Resource Link element (<link>) specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both &quot;favicon&quot; style icons and icons for the home screen and apps on mobile devices) among other things."><code>&lt;link&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" title="The HTML <script> element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code."><code>&lt;script&gt;</code></a></td>
   <td>Specifies which referrer is sent when fetching the resource.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel">rel</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" title="The HTML <a> element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address."><code>&lt;a&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area" title="The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element."><code>&lt;area&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link" title="The HTML External Resource Link element (<link>) specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both &quot;favicon&quot; style icons and icons for the home screen and apps on mobile devices) among other things."><code>&lt;link&gt;</code></a></td>
   <td>Specifies the relationship of the target object to the link object.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required">required</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select" title="The HTML <select> element represents a control that provides a menu of options"><code>&lt;select&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" title="The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."><code>&lt;textarea&gt;</code></a></td>
   <td>Indicates whether this element is required to fill out or not.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">reversed</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol" title="The HTML <ol> element represents an ordered list of items — typically rendered as a numbered list."><code>&lt;ol&gt;</code></a></td>
   <td>Indicates whether the list should be displayed in a descending order instead of a ascending.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">rows</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" title="The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."><code>&lt;textarea&gt;</code></a></td>
   <td>Defines the number of rows in a text area.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">rowspan</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td" title="The HTML <td> element defines a cell of a table that contains data. It participates in the table model."><code>&lt;td&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th" title="The HTML <th> element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes."><code>&lt;th&gt;</code></a></td>
   <td>Defines the number of rows a table cell should span over.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox">sandbox</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" title="The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one."><code>&lt;iframe&gt;</code></a></td>
   <td>Stops a document loaded in an iframe from using certain features (such as submitting forms or opening new windows).</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">scope</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th" title="The HTML <th> element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes."><code>&lt;th&gt;</code></a></td>
   <td>Defines the cells that the header test (defined in the <code>th</code> element) relates to.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">scoped</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style" title="The HTML <style> element contains style information for a document, or part of a document."><code>&lt;style&gt;</code></a></td>
   <td></td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">selected</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option" title="The HTML <option> element is used to define an item contained in a <select>, an <optgroup>, or a <datalist>&nbsp;element. As such,&nbsp;<option>&nbsp;can represent menu items in popups and other lists of items in an HTML document."><code>&lt;option&gt;</code></a></td>
   <td>Defines a value which will be selected on page load.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">shape</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" title="The HTML <a> element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address."><code>&lt;a&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area" title="The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element."><code>&lt;area&gt;</code></a></td>
   <td></td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size">size</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select" title="The HTML <select> element represents a control that provides a menu of options"><code>&lt;select&gt;</code></a></td>
   <td>Defines the width of the element (in pixels). If the element's <code>type</code> attribute is <code>text</code> or <code>password</code> then it's the number of characters.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">sizes</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link" title="The HTML External Resource Link element (<link>) specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both &quot;favicon&quot; style icons and icons for the home screen and apps on mobile devices) among other things."><code>&lt;link&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source" title="The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element."><code>&lt;source&gt;</code></a></td>
   <td></td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">slot</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td>Assigns a slot in a shadow DOM shadow tree to an element.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">span</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col" title="The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element."><code>&lt;col&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup" title="The HTML <colgroup> element defines a group of columns within a table."><code>&lt;colgroup&gt;</code></a></td>
   <td></td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">spellcheck</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td>Indicates whether spell checking is allowed for the element.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">src</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" title="The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:&nbsp;the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."><code>&lt;audio&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed" title="The HTML <embed> element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in."><code>&lt;embed&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" title="The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one."><code>&lt;iframe&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" title="The HTML <script> element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code."><code>&lt;script&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source" title="The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element."><code>&lt;source&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track" title="The HTML <track> element is used as a child of the media elements <audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks or&nbsp;Timed Text Markup Language (TTML)."><code>&lt;track&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" title="The&nbsp;HTML Video element&nbsp;(<video>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<video>&nbsp;for audio content as well, but the <audio> element may provide a more appropriate user experience."><code>&lt;video&gt;</code></a></td>
   <td>The URL of the embeddable content.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">srcdoc</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" title="The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one."><code>&lt;iframe&gt;</code></a></td>
   <td></td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">srclang</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track" title="The HTML <track> element is used as a child of the media elements <audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks or&nbsp;Timed Text Markup Language (TTML)."><code>&lt;track&gt;</code></a></td>
   <td></td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">srcset</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source" title="The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element."><code>&lt;source&gt;</code></a></td>
   <td>One or more responsive image candidates.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">start</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol" title="The HTML <ol> element represents an ordered list of items — typically rendered as a numbered list."><code>&lt;ol&gt;</code></a></td>
   <td>Defines the first number if other than 1.</td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/step">step</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a></td>
   <td></td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style">style</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td>Defines CSS styles which will override styles previously set.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">summary</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" title="The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data."><code>&lt;table&gt;</code></a></td>
   <td></td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td>Overrides the browser's default tab order and follows the one specified instead.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">target</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" title="The HTML <a> element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address."><code>&lt;a&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area" title="The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element."><code>&lt;area&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base" title="The HTML <base> element specifies the base URL to use for all relative URLs in a document."><code>&lt;base&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" title="The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server."><code>&lt;form&gt;</code></a></td>
   <td></td>
  </tr>
  <tr>
   <td><code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title">title</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td>Text to be displayed in a tooltip when hovering over the element.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">translate</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">Global attribute</a></td>
   <td>Specify whether an element’s attribute values and the values of its <code><a class="external" href="https://developer.mozilla.orghttps://dom.spec.whatwg.org/#text" id="ref-for-text①⑦" rel="noopener">Text</a></code> node children are to be translated when the page is localized, or whether to leave them unchanged.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">type</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" title="The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality."><code>&lt;button&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/command" title="The HTML Command element (<command>) represents a command which the user can invoke. Commands are often used as part of a context menu or toolbar."><code>&lt;command&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed" title="The HTML <embed> element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in."><code>&lt;embed&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object" title="The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin."><code>&lt;object&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" title="The HTML <script> element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code."><code>&lt;script&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source" title="The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element."><code>&lt;source&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style" title="The HTML <style> element contains style information for a document, or part of a document."><code>&lt;style&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu" title="The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked."><code>&lt;menu&gt;</code></a></td>
   <td>Defines the type of the element.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">usemap</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object" title="The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin."><code>&lt;object&gt;</code></a></td>
   <td></td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">value</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" title="The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality."><code>&lt;button&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data" title="The HTML <data> element links a given content with a machine-readable translation. If the content is time- or date-related, the <time> element must be used."><code>&lt;data&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li" title="The HTML <li> element is used to represent an item in a list."><code>&lt;li&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter" title="The HTML <meter> element represents either a scalar value within a known range or a fractional value."><code>&lt;meter&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option" title="The HTML <option> element is used to define an item contained in a <select>, an <optgroup>, or a <datalist>&nbsp;element. As such,&nbsp;<option>&nbsp;can represent menu items in popups and other lists of items in an HTML document."><code>&lt;option&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress" title="The HTML <progress> element displays an indicator showing the completion progress of a task, typically displayed as a progress bar."><code>&lt;progress&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param" title="The HTML <param> element defines parameters for an <object> element."><code>&lt;param&gt;</code></a></td>
   <td>Defines a default value which will be displayed in the element on page load.</td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">width</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas" title="Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations."><code>&lt;canvas&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed" title="The HTML <embed> element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in."><code>&lt;embed&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" title="The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one."><code>&lt;iframe&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" title="The HTML <img> element embeds an image into the document."><code>&lt;img&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object" title="The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin."><code>&lt;object&gt;</code></a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" title="The&nbsp;HTML Video element&nbsp;(<video>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<video>&nbsp;for audio content as well, but the <audio> element may provide a more appropriate user experience."><code>&lt;video&gt;</code></a></td>
   <td>
    <p>For the elements listed here, this establishes the element's width.</p>

    <div class="note">
    <p><strong>Note:</strong> For all other instances, such as <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div" title="The HTML Content Division element (<div>) is the generic container for flow content. It has no effect on the content or layout until styled using CSS."><code>&lt;div&gt;</code></a>, this is a legacy attribute, in which case the CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/width" title="The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area."><code>width</code></a> property should be used instead.</p>
    </div>
   </td>
  </tr>
  <tr>
   <td><code><a class="new" rel="nofollow" title="Page has not yet been created.">wrap</a></code></td>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" title="The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."><code>&lt;textarea&gt;</code></a></td>
   <td>Indicates whether the text should be wrapped.</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="Content_versus_IDL_attributes">Content versus IDL attributes</h2>

<p>In HTML, most attributes have two faces: the <strong>content attribute</strong> and the <strong>IDL (Interface Definition Language) attribute</strong>.</p>

<p>The content attribute is the attribute as you set it from the content (the HTML code) and you can set it or get it via <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute" title="Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value."><code>element.setAttribute()</code></a> or <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute" title="The getAttribute() method of the Element interface returns the value of a specified attribute on the element."><code>element.getAttribute()</code></a>. The content attribute is always a string even when the expected value should be an integer. For example, to set an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a> element's <code>maxlength</code> to 42 using the content attribute, you have to call <code>setAttribute("maxlength", "42")</code> on that element.</p>

<p>The IDL attribute is also known as a JavaScript property. These are the attributes you can read or set using JavaScript properties like <code class="moz-txt-verticalline">element.foo</code>. The IDL attribute is always going to use (but might transform) the underlying content attribute to return a value when you get it and is going to save something in the content attribute when you set it. In other words, the IDL attributes, in essence, reflect the content attributes.</p>

<p>Most of the time, IDL attributes will return their values as they are really used. For example, the default <code>type</code> for <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" title="The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. "><code>&lt;input&gt;</code></a> elements is "text", so if you set <code>input.type="foobar"</code>, the <code>&lt;input&gt;</code> element will be of type text (in the appearance and the behavior) but the "type" content attribute's value will be "foobar". However, the <code>type</code> IDL attribute will return the string "text".</p>

<p>IDL attributes are not always strings; for example, <code>input.maxlength</code> is a number (a signed long). When using IDL attributes, you read or set values of the desired type, so <code>input.maxlength</code> is always going to return a number and when you set <code>input.maxlength</code> ,it wants a number. If you pass another type, it is automatically converted to a number as specified by the standard JavaScript rules for type conversion.</p>

<p>IDL attributes can <a class="external" href="https://developer.mozilla.orghttps://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes" rel="noopener">reflect other types</a> such as unsigned long, URLs, booleans, etc. Unfortunately, there are no clear rules and the way IDL attributes behave in conjunction with their corresponding content attributes depends on the attribute. Most of the time, it will follow <a class="external" href="https://developer.mozilla.orghttps://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes" rel="noopener">the rules laid out in the specification</a>, but sometimes it doesn't. HTML specifications try to make this as developer-friendly as possible, but for various reasons (mostly historical), some attributes behave oddly (<code>select.size</code>, for example) and you should read the specifications to understand how exactly they behave.</p>

<h2 id="Boolean_Attributes">Boolean Attributes</h2>

<p>Some content attributes (e.g. <code>required</code>, <code>readonly</code>, <code>disabled</code>) are called <a class="external" href="https://developer.mozilla.orghttps://www.w3.org/TR/html52/infrastructure.html#sec-boolean-attributes" rel="noopener">boolean attributes</a>. If a boolean attribute is present, its value is <strong>true</strong>, and if it’s absent, its value is <strong>false</strong>.</p>

<p>HTML5 defines restrictions on the allowed values of boolean attributes: If the attribute is present, its value must either be the empty string (equivalently, the attribute may have an unassigned value), or a value that is an ASCII case-insensitive match for the attribute’s canonical name, with no leading or trailing whitespace. The following examples are valid ways to mark up a boolean attribute:</p>

<pre class="line-numbers language-html"><code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">itemscope</span><span class="token punctuation">&gt;</span></span> This is valid HTML but invalid XML. <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">itemscope</span><span class="token attr-value"><span class="token punctuation">=</span>itemscope</span><span class="token punctuation">&gt;</span></span> This is also valid HTML but invalid XML. <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">itemscope</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> This is valid HTML and also valid XML. <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">itemscope</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>itemscope<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> This is also valid HTML and XML, but perhaps a bit verbose. <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span></span></code></pre>

<p>To be clear, the values "<code>true</code>" and "<code>false</code>" are not allowed on boolean attributes. To represent a false value, the attribute has to be omitted altogether. This restriction clears up some common misunderstandings: With <code>checked="false"</code> for example, the element’s <code>checked</code> attribute would be interpreted as <strong>true</strong> because the attribute is present.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">HTML elements</a></li>
</ul></article>
# Other Concepts
# A Simple HTML Page
# Publish Static Client Usiung Github Pages
# Full Stack Programming
# Full Stack Programming
# Full Stack Programming
# Full Stack Programming
# Full Stack Programming
# Full Stack Programming
# Programming the Internet of Things (IoT)
