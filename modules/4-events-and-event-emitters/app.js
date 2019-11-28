// Event-driven programming

// events module module is built-in in nodejs
const EventEmitter = require('events');

// create new EventEmitter object
const eventEmitter = new EventEmitter();


/*
  'on' takes 2 arguments:
  1 - the listener that you want to attach in the object
  2 - the function that you want to execute when the 'tutorial' event occured

  eventEmitter.on() method is used to register listeners
  eventEmitter.emit() method is used to trigger events
*/

// code will be executed when a 'tutorial' event occur
// eventEmitter.on('tutorial', ()=>{
//   console.log('tutorial event has occured');
// });

// eventEmitter.emit('tutorial');    // tutorial event has occured

// with parameters
// eventEmitter.on('tutorial', (num1, num2)=>{
//   console.log(num1 + num2);
// });

// eventEmitter.emit('tutorial', 1, 2);    // 3

/*
  extending EventEmitter class
*/
class Person extends EventEmitter {
  constructor(name){
    super();            // calls the parent constructor
    this._name = name;
  }

  get name(){
    return this._name;
  }
}

let clark = new Person('Clark');

// add listener to 'clark' object
clark.on('name', ()=>{
  console.log('my name is ' + clark.name);
});

clark.emit('name');    //my name is clark

/*
  adding a new object
*/
let justine = new Person('Justine');
justine.on('name', ()=>{
  console.log('my name is ' + justine.name);
});

// synchronous
clark.emit('name');
justine.emit('name');
