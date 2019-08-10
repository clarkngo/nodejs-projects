'use strict'
const http = require('http');

const port = 4000;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
  let content;
  if (req.url === '/about') content = '<h3>This is the ABOUT page.</h3>';
  else if (req.url === '/address') content = '<h2>This is my address page</h2>';
  else if (req.url === '/') content = '<h1>This is the HOME page</h1>';
  else content = '<h2>404 Page is not found.</h2>';
  let visitor_ip = req.connection.remoteAddress;
  if (visitor_ip) content += '\n' + visitor_ip;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(content);
});

server.listen(port,hostname, () => console.log(`Visitor's IP address is `));
