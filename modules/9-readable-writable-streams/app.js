// Reading and writing the data in chunks

const fs = require('fs');

// arg as the path
// readStream object inherits from the EventEmitter class
// We want to listen to the data event
// 1st arg as filename
// 2nd arg as encoding (default is Buffer)
// Example output of Buffer:
// <Buffer 41 20 6c 69 6e 6b 65 64 20 6c 69 73 74 20 69...
const readStream = fs.createReadStream('./example.txt', 'utf8');

// creates a new file
const writeStream = fs.createWriteStream('example2.txt');


// Everytime we get a piece of 'data'
// We would invoke the callback function 'chunk'
// The benefits of reading a chunk instead of loading the whole file
//  1. When we get the chunk, we can immediately start manipulating it
//      instead of waiting for the whole file to load.
//  2. Start sending the chunk to a new file while reading the data itself.
readStream.on('data',(chunk)=>{
  // prints out the contents of the file
  // console.log(chunk);

  // write data to new file before the file is fully loaded
  writeStream.write(chunk)
});
