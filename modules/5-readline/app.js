// readline is an instance of EventEmitter class
const readline = require('readline');

/*
   createInterface takes in an object with 2 properties
   'process' is a global object from nodejs
   stdin is input stream
   stdout is output stream
*/
const rl = readline.createInterface({input : process.stdin,
                            output : process.stdout});
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

/*
  'question'
  1st arg, 'string', what we would like to ask the user
  2nd arg, 'function'
*/
rl.question(`What is ${num1} + ${num2}?\n`,
(userInput)=>{
  // trim gets rid of the trailing whitespace
  if(userInput.trim() == answer) {
    rl.close();   // close the application and 'emits' the close event
  }
  else{
    // prompts the user
    // takes argument as string
    rl.setPrompt('Incorrect response please try again\n');

    // next is to call the prompt
    rl.prompt();

    // listen to the readline interface
    // this creates a loop
    // as prompt will ask for user input
    // and 'on' keeps listening in the readline interface
    rl.on('line',(userInput)=>{
      if(userInput.trim() == answer)
        rl.close();
      else {
        rl.setPrompt(`Your answer of ${userInput} is incorrect try again\n`);
        rl.prompt();
      }
    });
  }
});

// because readline is an instance of eventEmitter class
// we have access to 'on' method of eventEmitter
// this callback function will get executed because 'close()' emits the close event
rl.on('close',()=>{
  console.log('Correct!!!!');
});
