// serving static files

/*
  1st Example: Serving HTML
*/

// const http = require('http');
// const fs = require('fs');
// http.createServer((req,res)=>{
//   // read a static content
//   const readStream = fs.createReadStream('./static/index.html');

//   // write a header from my response
//   // header is responsiblity from letting the client know
//   // what data the server is expecting
//   res.writeHead(200, {'Content-type': 'text/html'});

//   // pipe the readstream to the user (res)
//   readStream.pipe(res);
// }).listen(3000);


/*
  2nd Example: Serving JSON
*/

// const http = require('http');
// const fs = require('fs');
// http.createServer((req,res)=>{
//   // read a static content
//   const readStream = fs.createReadStream('./static/example.json');

//   // write a header from my response
//   // header is responsiblity from letting the client know
//   // what data the server is expecting
//   res.writeHead(200, {'Content-type': 'application/json'});

//   // pipe the readstream to the user (res)
//   readStream.pipe(res);
// }).listen(3000);

/*
  2nd Example: Serving JSON
*/

const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
  // read a static content
  const readStream = fs.createReadStream('./static/example.png');

  // write a header from my response
  // header is responsiblity from letting the client know
  // what data the server is expecting
  res.writeHead(200, {'Content-type': 'image/png'});

  // pipe the readstream to the user (res)
  readStream.pipe(res);
}).listen(3000);
