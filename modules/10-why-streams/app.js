
// Suppose we have a 4 GB .txt file

// Running this readFile would encounter a RangeError
// RangeError: File size is greater than possible Buffer
// It means you need a 4 GB memory to load this file
const fs = require('fs');
fs.readFile('./largefile.txt',(err,file)=>{
  if(err)
    console.log(err);
  else{
    console.log(file);
  }
});

// readStream would enable us to read the large file
// streams uses buffer also, but a very small buffer
// readStream attempts to read chunks of the file and not the entire file right away
// This is more memory efficient
const readStream = fs.createReadStream('./largefile.txt')
readStream.on('data', (chunk)=>{
  console.log(chunk);
});

