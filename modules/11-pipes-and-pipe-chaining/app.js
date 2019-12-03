/*
  1st Example
  pipe
*/
// Pipes allows us to get the source stream and
// send it to a destination stream
// pipes need two things: source stream and destination stream
// Shorter way to read a file and write to a new file
// const fs = require('fs');
// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('./example2.txt');
// readStream.pipe(writeStream)


/*
  2nd Example
  pipe chaining with compressing file
*/

// const fs = require('fs');

// // module for compressing file
// // to create a transform stream
// // transform stream receives a data and manipulates that data
// const zlib = require('zlib');

// // returns the transformed stream
// const gzip = zlib.createGzip();

// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('./example2.txt.gz');

// // gzip: takes the chunks and compressed it
// readStream.pipe(gzip).pipe(writeStream)

/*
  3rd Example
  pipe chaining with uncompressing file
*/

const fs = require('fs');

// module for compressing file
// to create a transform stream
// transform stream receives a data and manipulates that data
const zlib = require('zlib');

// returns the transformed stream
const gunzip = zlib.createGunzip();

const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('./uncompressed.txt');

// gzip: takes the chunks and compressed it
readStream.pipe(gunzip).pipe(writeStream)

