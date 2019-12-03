// http server module

/*
  1st Example: Hello World
*/

// const http = require('http');

// // 1st arg as request from client to the server
// // 2nd arg as response from server to the client
// const server = http.createServer((req,res)=>{
//   res.write('Hello World from nodejs');
//   res.end();      // sends the response
// });

// // to get the server up and running
// // listen on port 3000
// server.listen('3000')

/*
  2nd Example:
*/

const http = require('http');

// 1st arg as request from client to the server
// 2nd arg as response from server to the client
const server = http.createServer((req,res)=>{
  // 'url' is a property of the request object
  // if 'url' requested is the root
  if(req.url === '/'){
    res.write('Hello world from nodejs');
    res.end();
  }
  else{
    res.write('using some other domain');
    res.end();
  }
});

// to get the server up and running
// listen on port 3000
server.listen('3000')
