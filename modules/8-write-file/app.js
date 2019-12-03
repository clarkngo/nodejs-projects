const fs = require('fs');

/*
  First Example:
  Create a folder then create a file
*/

// create folder
// 1st arg as filename
// 2nd arg as callback function
// fs.mkdir('./tutorial', (err)=>{
//   if(err)
//     console.log(err);
//   else{
//     // create a file
//     // 1st arg as filename
//     // 2nd arg as the content
//     // 3rd arg as the callback function
//     fs.writeFile('./tutorial/example.txt', '123', (err)=>{
//       if(err)
//         console.log(err);
//       else{
//         console.log('successfully created file');
//       }
//     })
//   }
// })


/*
  Second Example:
  Delete the file inside the folder then delete the folder
*/

// deleting the file first
// fs.unlink('./tutorial/example.txt', (err)=>{
//   if(err)
//     console.log(err);
//   else{
//     console.log('successfully deleted the file');
//     // deleting the folder
//     fs.rmdir('./tutorial', (err)=>{
//       if(err)
//         console.log(err);
//       else{
//         console.log('deleted folder');
//       }
//     });
//   }
// })

/*
  Third Example:
  Delete the file inside the folder then delete the folder
*/

// Read contents inside folder / directory
// 1st arg as name of directory
// 2nd arg as callback function with err and files as parameter
// Given a folder 'example' with files 'a.txt' and 'b.txt'
// Output: [ 'a.txt', 'b.txt' ]
fs.readdir('example',(err,files)=>{
  if(err)
    console.log(err);
  else{
    // prints out the files inside a directory
    // console.log(files);

    //
    for(let file of files){
      // 1st arg as the file name
      // 2nd arg as the callback function
      fs.unlink('./example/' + file, (err)=>{
        if(err)
          console.log(err);
        else{
          console.log('successfully deleted file.')
        }
      })
    }
  }
})
