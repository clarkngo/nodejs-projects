const fs = require('fs');

/*
  First Example - Creating a File and reading
*/


// 1st arg as name of file
// 2nd arg as what you want to write
// 3rd arg as callback function
// fs.writeFile('example.txt', 'this is an example',(err)=>{
//   if (err)
//     console.log(err);
//   else
//     console.log('File successfully created');

//     // 1st arg as the filename
//     // 2nd arg as encoding type
//     // 3rd arg as callback function with 2 params: error and file
//     fs.readFile('example.txt', 'utf-8', (err,file)=>{
//       if(err)
//         console.log(err);
//       else
//         // if default, encoding output:
//         // <Buffer 74 68 69 73 20 69 73 20 61 6e 20 65 61 6d 70 6c 65>
//         // Buffer stream stores in binary
//         console.log(file);  // outputs whatever is in the file
//     });
// });

/*
  Second Example - Renaming a file
*/
// 1st arg as filename
// 2nd arg as the new name we want
// 3rd arg as callback function
// fs.rename('example.txt', 'example2.txt', (err)=>{
//   if(err)
//     console.log(err);
//   else
//     console.log('Successfully renamed the file');
// });

/*
  Third Example - Appending a file
*/
// 1st arg as the filename
// 2nd arg as data you want to append the file
// 3rd arg as callback function
// fs.appendFile('example2.txt', 'Some data being appended', (err)=>{
//   if(err)
//     console.log(err);
//   else
//     console.log('Succesfully appended data to the file');
// });

/*
  Fourth Example - Deleting a file
*/
// 1st arg as filename
// 2nd arg as callback function
fs.unlink('example2.txt', (err)=>{
  if(err)
    console.log(err);
  else
    console.log('Successfully deleted the file')
});
