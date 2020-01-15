# The Client Server Model

The world wide web is build on top of the client server model. The
client server model consists of clients and servers that can communicate
to each other. There are 2 rules in the client server protocol:

1. The client initiates contact with the server by sending a
   <b>request</b>.
  
2. The server (whose job is to <b>listen</b> to these client requests),
   then sends a <b>response</b> back.

| <img style="display:block;margin:auto" src='../../imgs/clientServer.png'> |   |
| :--:                                                                      |   |
| <figcaption> Fig: 1.1.1.1. The Client Server Model</figcaption>           |   |

The server is an application program and can hence respond differently
based on the request URL <b>path</b>. For Eg: the URLs <https://google.com> and
<https://google.com/maps> both send a request to google.com, but based on the
path (if it has "maps" or not) a different page is <b>served</b>.

