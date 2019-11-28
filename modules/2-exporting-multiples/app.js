const tutorial = require('./tutorial');

// console.log(tutorial);
// Output:
// { sum: [Function: sum],
//   PI: 3.14,
//   SomeMathObject: [Function: SomeMathObject] }

console.log(tutorial.sum(1,1));               // 2
console.log(tutorial.PI);                     // 3.14
console.log(new tutorial.SomeMathObject());   // SomeMathObject {}
