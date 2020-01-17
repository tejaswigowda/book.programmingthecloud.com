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

