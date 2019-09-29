```
'use strict'
```


# HTTP API
```
const http = require('http');
```
- module
- low-level
- deals with stream handling and messaging parsing
- parses a message into headers and body but it does not parse the actual headers or the body
Source: https://nodejs.org/api/http.html

```
const port = 3000;
// const hostname = 'localhost';
```
# HTTP API `http.createServer`
```
const server = http.createServer((req, res) => {
```
- createServer has a function as a parameter
- syntax: `http.createServer(requestListner)`
- in the example above, `(req, res) => {}` is the `requestListener`

- inside the `requestListner` we have two Objects as a parameter: `IncomingMessage` and `ServerResponse`
- syntax: `(IncomingMessage, ServerResponse) => {}`
- in the example above `req` is `Incoming Message` and `res` is `ServerResponse`

- returns `http.Server`

# Assign a variable
```
  let content;
```
# Class: `http.IncomingMessage`
- `IncomingMessage` object is created by `http.Server` or `http.ClientRequest`
-

```
  if (req.url === '/about') content = '<h3>This is the ABOUT page.</h3>';
```
- `.url` is the url provided by the requestor
```
  else if (req.url === '/') content = '<h1>This is the HOME page</h1>';
  else content = '<h2>404 Page is not found.</h2>';
```
- `req.url` is the url provided by the requestor
```
  res.statusCode = 200;
```
- `res.statusCode` respond with a status code
```
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
```
- `res.setHeader` respond with a status code
- sets a single header value for headers object
- `Header type`	The HTTP header type such as Accept-Encoding or Content-Type.
- `Header value`	The HTTP header value such as gzip,deflate or text/html.
```
  res.end(content);
});
```
- `res.end` ends the response process
- signals to the server that all the response headers and body have been sent
```
server.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
```
- `server.listen` starts the HTTP server listening for connections or requests

# References
- https://nodejs.org/api/http.html
- https://nodejs.org/api/http.html#http_class_http_incomingmessage
- https://nodejs.org/api/http.html#http_request_setheader_name_value
- https://s3.amazonaws.com/smhelpcenter/smhelp940/classic/Content/programming/javascript/reference/javascript_object_header.htm