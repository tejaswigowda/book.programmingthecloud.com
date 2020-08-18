# Using BASH

Bash is available by default on Mac and Linux and can be access via
git-bash (installed when git is installed) on Windows. Bash is a
"command line interpretor" meaning that it awaits your commands, usually
one line at a time and executes them.

You know you are in a bash shell if you see a dollar ($) prompt with a
blinking cursor awaiting your command.
<img style="display:block;margin:auto" src='../../imgs/bashBlink.gif'> 

Once you are at the bash prompt, you can find out who you are by typing
$ ``whoami``

This will print your *username*.

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
       Prints the content of file `<filename>`.


4. $ ``man <command>``
      Prints the manual for `<command>`.



## Reference of basic commands
 
Use $`man <command>` to learn more about these commands and flags.

### basic shell 
 - `clear` : clear all previous commands' output text from the terminal
 - `exit` (or `logout`) : quits the shell
 - `history` : show a list of all past commands you have typed into this shell

### manage directories 
  - `ls` : list files in a directory
  - `pwd` : displays the shell's current working directory
  - `cd` : changes the shell's working directory to the given directory; can be a relative or absolute path
  - `mkdir` : creates a new directory with the given name
  - `rmdir` : removes the directory with the given name (the directory must be empty)

### file operations 
  - `cp` : copies a file/directory
  - `mv` : moves (or renames) a file/directory
  - `rm` : deletes a file
  - `touch` : update the last-modified time of a file (or create an empty file)
  - `cat` : output the contents of a file
  - `more` (or `less`) : output the contents of a file, one page at a time
  - `head`, `tail` : output the beginning or ending of a file
  - `wc` : output a count of the number of characters, lines, words, etc. in a file
  - `du` : report disk space used by a file/directory
  - `diff` : output differences between two files
  - `chmod` : change the permissions on a file or group of files
  - `chown` : change the owner of a file
  - `chgrp` : change the group associated with a file
  - `umask` : change the default permissions given to newly created files

### searching and sorting 
  - `grep` : search a file for a given string or expression
  - `sort` : convert an input into a sorted output
  - `uniq` : strip duplicate lines
  - `find` : search for files by name within a given directory
  - `xargs` : launch a command over each of a set of lines of input (often used with find)
  - `locate` : search for files by name on the entire system
  - `which` : shows the complete path of a command or file

### compression 
  - zip, unzip : create a .zip archive or extract its contents
  - tar : Unix archiving/de-archiving program
  - gzip, gunzip : GNU compression/decompression programs
  - bzip2, bunzip2 : improved compression/decompression programs

### system information 
  - `date` : outputs the current date/time
  - `cal` : outputs an ASCII calendar
  - `uname` : print information about the system
  - `time` : measure how long a program takes to run

### process management 
  - `ps`, `jobs` : list the processes you are running; every process has a unique integer id number (PID)
  - `top` : see what processes are using the most CPU/memory, and show system memory/CPU stats
  - `kill` : terminate a process
  - `killall` : terminate a group of processes by name
  - `^C`: (hotkey) terminates (kills) the currently running process
  - `^Z` : (hotkey) suspends the currently running process
  - `&` : (special character) when & is placed at the end of a command, that command is run in the background (shell does not wait for the command to finish before returning to the input prompt)

### users
  - `whoami` : outputs your user name
  - `passwd` : changes your password
  - `groups` : list the groups to which a user belongs
  - `sudo` : execute a single command as the super-user
  - `su` : log in to a shell as the super-user

### network 
  - `lynx` : text-only web browser
  - `ssh` : connect to a remote Unix server
  - `wget` : download from a URL and save it to a file on the local hard drive
  - `curl` : download from a URL and output its contents to the console

### text editors 
  - `vi`, `vim` : good command line editor
  - `emacs` : a complicated text editor with a steep learning curve

### programming 
  - `node` : run a JavaScript program, or enter JS shell
  - `javac`, `java`, `python`, `perl`, `ruby`, `gcc`, `sml`, ... : compile or run programs in various other languages
