// Note: this file is written in Node.js instead of original JavaScript.

// 1.Node Exports 
const sum = (x, y) => x + y;
const square = x => x * x;

// at first, module.exports = {} is implicitly present.
module.exports.functions = {
  sum: sum,
  square: square
}

// 'exports' is refer to 'module.exports' by default, but you can reassign 'exports' with another value such as 'exports = newValue'.
// exports.function = {
//   sum: sum,
//   square: square
// }

// 2.Node Imports
const fs = require("fs"); 
const myModule = require('./myModule')
console.log(myModule.message);
