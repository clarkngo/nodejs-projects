// 1.	Which option will print “true” in the console if you add it to the end of the following code without adding anything else? (a, console.log(greaterThan(10)(11));)

function greaterThan(n: number) {
  return m => m > n;
}

console.log(greaterThan(10)(11));  // true
console.log(greaterThan(11)(10));  // false
// console.log(greaterThan(11, 10)); Expected 1 arguments, but got 2.
// console.log(greaterThan10(11)); Cannot find name greaterThan10


// 2.	What is the output of the following code?  (d, [ 1, 2, 3, 4, 5,  ])

const arr: number[] = [1, 2, 3, 4, 5];
let str = '[ ';
arr.forEach(i => str += i + ', ');
str += ' ]';
console.log(str);
