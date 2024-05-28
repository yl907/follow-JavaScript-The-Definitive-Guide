// 1.Compound and Empty Statements
// 复合语句允许在 JavaScript 语法要求使用单个语句的情况下使用多个语句。空语句则相反：它允许在期望的位置不包含任何语句。
// 1.1.复合语句
{
  x = Math.PI;
  cx = Math.cos(x);
  console.log("cos(π) = " + cx);
}
// 1.2.空语句
;
// 1.3.一个空语句的使用例子
for(let i = 0; i < a.length; a[i++] = 0) ;
// 在此循环中，所有工作均由表达式 a[i++] = 0 完成，并且不需要循环体。JavaScript 语法需要一个语句作为循环体，因此使用一个空语句（仅一个裸分号）。  

// 2.Conditionals
// 2.1.if
if (expression1)
  statement1
else if(expression2)
  statement2
else 
  statement3
// 2.2.switch
switch(expression) {
  case somecase: 
    statements;
    break;
}

// 3.Loops
// 3.1.while
while (expression)
  statement
// 3.2.do...while
do
  statement
while (expression);
// 3.3.for
for(initialize ; test ; increment)
  statement
// 3.4.for/of
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
for(let element of data) {
    sum += element;
}
sum       // => 45
// 3.5.for/in
// for/in 专门用于遍历对象的属性, for/of则可以用于任意可迭代的东西。
// 3.6.如果在对象上使用for/of
// 对象是不可迭代的（默认情况下）。尝试在常规对象上使用 for/of 会在运行时引发 TypeError
// 如果要遍历对象的属性，则可以使用 for/in 循环（在 §5.4.5 中介绍），或通过 Object.keys() 方法使用 for/of:
let o = { x: 1, y: 2, z: 3 };
let keys = "";
for(let k of Object.keys(o)) {
    keys += k;
}
keys  // => "xyz"
// 3.6.FOR/OF WITH SET AND MAP
// 3.6.1.SET(集合的元素唯一)
let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for(let word of wordSet) {
    unique.push(word);
}
unique // => ["Na", "na", "Batman!"]
// 3.6.2.MAP
let m = new Map([[1, "one"]]);
for(let [key, value] of m) {
    key    // => 1
    value  // => "one"
}

// 4.Jumps
// 4.1.Labeled Statements 任何语句都可以在其前面加上标识符和冒号来标记：
mainloop: while(token !== null) {
  // Code omitted...
  continue mainloop;  // Jump to the next iteration of the named loop
  // More code omitted...
}
// 4.2.break
for(let i = 0; i < a.length; i++) {
  if (a[i] === target) break;
}
// JavaScript 还允许 break 关键字后跟一个语句标签（只是标识符，没有冒号）：
mainloop: while(token !== null) {
  // Code omitted...
  break mainloop;
}
// 4.3.continue
for(let i = 0; i < data.length; i++) {
  if (!data[i]) continue;  // Can't proceed with undefined data
  total += data[i];
}
// 4.4.return
// 只能在函数中使用return
function f() {
  return expression;
}
// 4.5.yield
// yield 语句与 return 语句非常相似，但仅在 ES6 生成器函数（请参阅 §12.3）中使用，以在所生成的值序列中生成下一个值，而无需实际返回
// A generator function that yields a range of integers
function* range(from, to) {
  for(let i = from; i <= to; i++) {
      yield i;
  }
}
// 4.6.throw
function factorial(x) {
  // If the input argument is invalid, throw an exception!
  if (x < 0) throw new Error("x must not be negative");
  // Otherwise, compute a value and return normally
  let f;
  for(f = 1; x > 1; f *= x, x--) /* empty */ ;
  return f;
}
factorial(4)   // => 24
// 4.7.try/catch/finally(deal with 'throw error')
try {
  // a method that throws an exception.
}
catch(e) {
  // exception by doing nothing, or may rethrow the exception with throw.
}
finally {
  // This block contains statements that are always executed, regardless of
  // what happens in the try block. They are executed whether the try block terminates or not
}
// 4.7.1 ES2019新特征
// Like JSON.parse(), but return undefined instead of throwing an error
function parseJSON(s) {
  try {
      return JSON.parse(s);
  } catch {
      // Something went wrong but we don't care what it was
      return undefined;
  }
}

// 5.Miscellaneous Statements
// 5.1.with
with (object)
  // 该语句使用对象的属性作为变量创建一个临时作用域，然后在该作用域内执行语句。
  statement
// 5.1.1. with 的一个例子
document.forms[0].address.value = 'abcd'

with(document.forms[0]) {
  // Access form elements directly here. For example:
  name.value = "";
  address.value = "dcba";
  email.value = "";
  console.log(address.value)
}
// 5.2.debugger
// debugger 语句通常不执行任何操作。但是，如果 debugger 程序可用并且正在运行，则这个实现可以（但不是必需）执行某种调试操作。实际上，该语句就像一个断点：停止执行 JavaScript 代码，并且可以使用调试器打印变量的值，检查调用堆栈等。
// 请注意，仅有 debugger 是不够的：debugger 语句不会为启动调试器。但是，如果您使用的是网络浏览器并打开了开发者工具控制台，则此语句将导致一个断点。
function f(o) {
  if (o === undefined) debugger;  // Temporary line for debugging purposes
  /*...*/                             // The rest of the function goes here.
}

// 6.Declaration
// 6.1.const, let, and var
const TAU = 2*Math.PI;
let radius = 3;
var circumference = TAU * radius;
// 6.2.function
function area(radius) {
  return Math.PI * radius * radius;
}
// 6.3.class
class Circle {
  constructor(radius) { this.r = radius; }
  area() { return Math.PI * this.r * this.r; }
  circumference() { return 2 * Math.PI * this.r; }
}
// 6.4.import and export
// 以下引入只是例子, 我并没有给出真实存在的文件位置, 所以下方代码被注释掉了以防报错
// import Circle from './geometry/circle.js';
// import { PI, TAU } from './geometry/constants.js';
// import { magnitude as hypotenuse } from './vectors/utils.js';

// export const TAU = 2 * Math.PI;
// export function magnitude(x,y) { return Math.sqrt(x*x + y*y); }
// export default class Circle { /* class definition omitted here */ }

