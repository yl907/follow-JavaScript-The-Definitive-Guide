// 1.Primitive types
// 1.1.numbers
// 在 JavaScript 中除以 0 不是错误：它只是返回无穷大或负无穷大(Infinity/-Infinity)。然而，有一个例外：0 除以 0 没有一个定义良好的值，这个操作的结果是一个特殊的非数字值 NaN。
// 1.1.1.NaN
// not-a-number 在 JavaScript 中有一个不同寻常的特性：它不等于任何其他值，包括它自己。这意味着您不能编写x === NaN。相反，你必须写x != x或Number.isNaN(x)。
let n = 0 / 0;
n !== n
Number.isNaN(n)
// isFinite()
// 相关函数 Number.isFinite() 如果实参不是 NaN、Infinity 或 -Infinity，则返回 true。
Number.isFinite(n)
// 1.1.2.BigInt
// 你可以使用 BigInt() 作为函数，将普通的 JavaScript 数字或字符串转换为 BigInt 值
BigInt(Number.MAX_SAFE_INTEGER) 
// 1.2.strings
// 多行字符串( \ ), 最初的 JavaScript 版本要求将字符串文字写在单行上，通常会看到 JavaScript 代码通过使用 + 运算符连接单行字符串来创建长字符串。但是，在 ES5 中，您可以通过在每行末尾使用反斜杠（\）来将字符串分隔成多行。
let s1 = "one\
long\
line"
let s2 = "two\nlines"
// methods: String.length, String.slice(), ...
  let s = "Hello, world"; // Start with some text.
  // Obtaining portions of a string
  s.substring(1,4)        // => "ell": the 2nd, 3rd, and 4th characters.
  s.slice(1,4)            // => "ell": same thing
  s.slice(-3)             // => "rld": last 3 characters
  s.split(", ")           // => ["Hello", "world"]: split at delimiter string
  // Searching a string
  s.indexOf("l")          // => 2: position of first letter l
  s.indexOf("l", 3)       // => 3: position of first "l" at or after 3
  s.indexOf("zz")         // => -1: s does not include the substring "zz"
  s.lastIndexOf("l")      // => 10: position of last letter l
  // Boolean searching functions in ES6 and later
  s.startsWith("Hell")    // => true: the string starts with these
  s.endsWith("!")         // => false: s does not end with that
  s.includes("or")        // => true: s includes substring "or"
  // Creating modified versions of a string
  s.replace("llo", "ya")  // => "Heya, world"
  s.toLowerCase()         // => "hello, world"
  s.toUpperCase()         // => "HELLO, WORLD"
  s.normalize()           // Unicode NFC normalization: ES6
  s.normalize("NFD")      // NFD normalization. Also "NFKC", "NFKD"
  // Inspecting individual (16-bit) characters of a string
  s.charAt(0)             // => "H": the first character
  s.charAt(s.length-1)    // => "d": the last character
  s.charCodeAt(0)         // => 72: 16-bit number at the specified position
  s.codePointAt(0)        // => 72: ES6, works for codepoints > 16 bits
  // String padding functions in ES2017
  "x".padStart(3)         // => "  x": add spaces on the left to a length of 3
  "x".padEnd(3)           // => "x  ": add spaces on the right to a length of 3
  "x".padStart(3, "*")    // => "**x": add stars on the left to a length of 3
  "x".padEnd(3, "-")      // => "x--": add dashes on the right to a length of 3
  // Space trimming functions. trim() is ES5; others ES2019
  " test ".trim()         // => "test": remove spaces at start and end
  " test ".trimStart()    // => "test ": remove spaces on left. Also trimLeft
  " test ".trimEnd()      // => " test": remove spaces at right. Also trimRight
  // Miscellaneous string methods
  s.concat("!")           // => "Hello, world!": just use + operator instead
  "<>".repeat(5)          // => "<><><><><>": concatenate n copies. ES6

// 模版字符串`${}`
let name = "Bill";
let greeting = `Hello ${ name }.`;  // greeting == "Hello Bill."

// 正则表达式
// 参考mdn文档https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#writing_a_regular_expression_pattern

// 1.3.Booleans

// 2.Object types
// 2.1.Array Object
// 2.2.Set Object
// 2.3.Map Object
// 2.4.Dates: JavaScript 的日期是对象，但它们也有一个数字表示形式的时间戳，指定了自1970年1月1日以来经过的毫秒数
let timestamp = Date.now();  // The current time as a timestamp (a number).
let now = new Date();        // The current time as a Date object.
let ms = now.getTime();      // Convert to a millisecond timestamp.
let iso = now.toISOString(); // Convert to a string in standard format.

// 2.5.Times

// 3.special JavaScript values
// 3.1.null
typeof null // object
// 3.2.undefined
typeof undefined // undefined
// 3.3.Symbols
let strname = "string name";      // A string to use as a property name
let symname = Symbol("propname"); // A Symbol to use as a property name
typeof strname                    // => "string": strname is a string
typeof symname                    // => "symbol": symname is a symbol
let o = {};                       // Create a new object
o[strname] = 1;                   // Define a property with a string name
o[symname] = 2;                   // Define a property with a Symbol name
o[strname]                        // => 1: access the string-named property
o[symname]                        // => 2: access the symbol-named property

// 4.Destructuring Assignment
// 4.1.Destructuring with another name
// Same as const cosine = Math.cos, tangent = Math.tan;
const { cos: cosine, tan: tangent } = Math;

