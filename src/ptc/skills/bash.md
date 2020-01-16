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






