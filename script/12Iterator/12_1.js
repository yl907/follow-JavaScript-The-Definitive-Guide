// 1.iterator
let list = [1,2,3,4,5];
// iter is a iterator, invoked by following funciton.
// list is an array object, and Symbol.iterator is an attribute of that object, list[Symbol.iterator] is a function.
let iter = list[Symbol.iterator]();
// next() is used for iterate through the iterable object, don't forget to use .value to check the value!
let head = iter.next().value;  // head == 1
let tail = [...iter];          // tail == [2,3,4,5]

// 2.customized iterable objects
/*
 * A Range object represents a range of numbers {x: from <= x <= to}
 * Range defines a has() method for testing whether a given number is a member
 * of the range. Range is iterable and iterates all integers within the range.
 */
class Range {
  constructor (from, to) {
      this.from = from;
      this.to = to;
  }

  // Make a Range act like a Set of numbers
  has(x) { return typeof x === "number" && this.from <= x && x <= this.to; }

  // Return string representation of the range using set notation
  toString() { return `{ x | ${this.from} ≤ x ≤ ${this.to} }`; }

  // Make a Range iterable by returning an iterator object.
  // Note that the name of this method is a special symbol, not a string.
  [Symbol.iterator]() {
      // Each iterator instance must iterate the range independently of
      // others. So we need a state variable to track our location in the
      // iteration. We start at the first integer >= from.
      let next = Math.ceil(this.from);  // This is the next value we return
      let last = this.to;               // We won't return anything > this
      return {                          // This is the iterator object
          // This next() method is what makes this an iterator object.
          // It must return an iterator result object.
          next() {
              return (next <= last)   // If we haven't returned last value yet
                  ? { value: next++, done: false } // return next value and increment it
                  : { value: undefined, done: true };   // otherwise indicate that we're done.
          },

          // As a convenience, we make the iterator itself iterable.
          [Symbol.iterator]() { return this; }
      };
  }
}

for(let x of new Range(1,10)) console.log(x); // Logs numbers 1 to 10
[...new Range(-2,2)]                          // => [-2, -1, 0, 1, 2]

// 3.Generators
// A generator function that yields the set of one digit (base-10) primes.
function* oneDigitPrimes() { // Invoking this function does not run the code
  yield 2;                 // but just returns a generator object. Calling
  yield 3;                 // the next() method of that generator runs
  yield 5;                 // the code until a yield statement provides
  yield 7;                 // the return value for the next() method.
}

// When we invoke the generator function, we get a generator
let primes = oneDigitPrimes();

// A generator is an iterator object that iterates the yielded values
primes.next().value          // => 2
primes.next().value          // => 3
primes.next().value          // => 5
primes.next().value          // => 7
primes.next().done           // => true

// Generators have a Symbol.iterator method to make them iterable
primes[Symbol.iterator]()    // => primes

// We can use generators like other iterable types
console.log([...oneDigitPrimes()])        // => [2,3,5,7]
let sum = 0;
for(let prime of oneDigitPrimes()) sum += prime;
console.log(sum)                          // => 17
