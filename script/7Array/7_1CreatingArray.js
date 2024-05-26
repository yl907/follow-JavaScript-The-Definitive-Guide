// 1.1.The Spread Operator 展开运算符
let array = [1, 2, 3];
let b = [0, ...array, 4]; // b == [0, 1, 2, 3, 4]

// 1.2.展开运算符可以作用于任何可迭代对象。（可迭代对象是可以用 for/of 进行循环的对象
let digits = [..."0123456789ABCDEF"];
console.log(digits) // => ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

// 2.Array.from()
let newDigits = Array.from(digits); // totally the same as 'digits'
console.log(newDigits);

// 3.Array.of() & Array()
// 'Array.of()' is almost equal to 'Array()'
// I don't really like these two functions, so I will not use it by now.

// 4.Array Methods
// 4.1.forEach()
// 4.2.map()
// 4.3.filter()
// 4.4.find() & findIndex()
// 4.5.every() & some()
// 4.6.reduce() & reduceRight()
// 4.7.flat()
// 在 ES2019 中，flat() 方法创建并返回一个新的数组，该数组包含与调用的数组相同的元素，只不过作为数组的任何元素都"展平"到返回的数组中。例如：
[1, [2, 3]].flat()    // => [1, 2, 3]
[1, [2, [3]]].flat()  // => [1, 2, [3]]
// 4.8.flatMap()
// a.flatMap(f) 与 a.map(f).flat() 作用相同
// 4.9.concat()
let a = [1,2,3];
a.concat(4, 5)          // => [1,2,3,4,5]
a.concat([4,5],[6,7])   // => [1,2,3,4,5,6,7]; arrays are flattened
a.concat(4, [5,[6,7]])  // => [1,2,3,4,5,[6,7]]; but not nested arrays
a                       // => [1,2,3]; the original array is unmodified

// 5.Stacks and Queues
// 数组可以模仿栈和队列的行为; push(), pop()二者模仿出栈, 进栈; 加入shift()即可与push()一同模仿队列的出队和入队; 最后加入unshift()补全对数组首尾的增删操作。

// 6.Subarrays with slice(), splice(), fill(), and copyWithin()
// 6.1.slice()
let a1 = [1,2,3,4,5];
a1.slice(0,3);    // Returns [1,2,3]
a1.slice(3);      // Returns [4,5]
a1.slice(1,-1);   // Returns [2,3,4]
a1.slice(-3,-2);  // Returns [3]
// 6.2.splice()
let a2 = [1,2,3,4,5,6,7,8];
a2.splice(4)    // => [5,6,7,8]; a is now [1,2,3,4]
a2.splice(1,2)  // => [2,3]; a is now [1,4]
a2.splice(1,1)  // => [4]; a is now [1]

a2 = [1,2,3,4,5];
a2.splice(2,0,"a","b")  // => []; a is now [1,2,"a","b",3,4,5]
a2.splice(2,2,[1,2],3)  // => ["a","b"]; a is now [1,2,[1,2],3,3,4,5]
// 6.3.fill()
let a3 = new Array(5);   // Start with no elements and length 5
a3.fill(0)               // => [0,0,0,0,0]; fill the array with zeros
a3.fill(9, 1)            // => [0,9,9,9,9]; fill with 9 starting at index 1
a3.fill(8, 2, -1)        // => [0,9,8,8,9]; fill with 8 at indexes 2, 3

// 7.Array Searching and Sorting Methods
// 7.1.indexOf()
// 7.2.lastIndexOf()
// 7.3.includes()
// 7.4.sort()
// 7.5.reverse()

// 8.Array to String Conversions
// 8.1.join()
a = [1, 2, 3];
a.join()               // => "1,2,3"
a.join(" ")            // => "1 2 3"
a.join("")             // => "123"
b = new Array(10); // An array of length 10 with no elements
b.join("-")            // => "---------": a string of 9 hyphens
// join() 方法是 String.split() 方法的反向方法，该方法通过将字符串拆分为多个片段来创建数组。

// 9.String.charAt()



