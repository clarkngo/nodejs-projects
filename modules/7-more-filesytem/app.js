const fs = require('fs');

// create folder
// 1st arg as filename
// 2nd arg as callback function
fs.mkdir('tutorial', (err)=>{
  if(err)
    console.log(err);
  else{
    // delete folder
    // 1st arg as filename
    // 2nd arg as callback function
    fs.rmdir('tutorial', (err)=>{
      if(err)
        console.log(err);
      else{
        console.log('successfully deleted the folder.');
      }
    })
  }
})
