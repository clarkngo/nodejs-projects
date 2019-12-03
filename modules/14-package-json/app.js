// package.json holds all meta data in our project
// meta data being the name of project, version, etc.

// run: npm init

// entry point: which file we should start our node application


// run npm install lodash

const _ = require('lodash');

// 1st arg as array
// 2nd arg as value to replace
// 3rd arg index start
// 4th arg index end
let example = _.fill([1,2,3,4,5], "banana", 1, 4);
console.log(example);   // [ 1, 'banana', 'banana', 'banana', 5 ]

// to uninstall lodash
// run: npm uninstall lodash

// Semantic Versioning
// ^4.17.11 major.minor.patch
// patch - bug fixes
// minor - minor update, new functionality, might deprecated old functionality
//      non-breaking update
// major - major update, there's a breaking change.
// ^ - i.e. 4.x.x - don't make major updates, but download if there are minor or patch update
// ~ - i.e. 4.17.x - you only want patch updates
// no ^ or ~ means you want to stick to the version. i.e. 4.17.11


