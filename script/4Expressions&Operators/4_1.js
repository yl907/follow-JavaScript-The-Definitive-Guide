// 1.Expressions
// JavaScript的运算符语法大致与c风格的语法相同
// 1.1.Primary Expressions
1.23         // A number literal
"hello"      // A string literal
let regExp = /pattern/    // A regular expression literal
true       // Evalutes to the boolean true value
false      // Evaluates to the boolean false value
null       // Evaluates to the null value
this       // Evaluates to the "current" object
// 1.2.Object and Array Initializers
// 只需在逗号之间省略一个值，就可以将未定义的元素包含在数组字面量中。例如，下面的数组包含5个元素，其中3个是未定义的元素:
let sparseArray = [1,,,,5];
// 对象字面量可以嵌套。例如:
let rectangle = {
  upperLeft: { x: 2, y: 2 },
  lowerRight: { x: 4, y: 5 }
};
// 1.3.Function Definition Expressions
let square = function(x) { return x * x; };
// 1.4.Property Access Expressions
// 使用任一类型的属性访问表达式时,  . 或 [ 前面的表达式首先被求值。如果值为null或undefined，则表达式抛出TypeError，因为这两个JavaScript值不能具有属性
expression . identifier
expression [ expression ]
// 1.5.Conditional Property Access
// 对于普通的属性访问表达式, 如果 . 或 [ 左边的表达式计算为null或未定义，则会得到一个TypeError。你可以用?.和?.[]语法防止此类错误。
expression ?. identifier
expression ?.[ expression ]
// below a is an object, so a.b is a valid property access expression. But the value of a.b is null, so a.b.c would throw a TypeError. By using ?. instead of . we avoid the TypeError, and a.b?.c evaluates to undefined. This means that (a.b?.c).d will throw a TypeError, because that expression attempts to access a property of the value undefined. But—and this is a very important part of “optional chaining”—a.b?.c.d (without the parentheses) simply evaluates to undefined and does not throw an error. This is because property access with ?. is “short-circuiting”: if the subexpression to the left of ?. evaluates to null or undefined, then the entire expression immediately evaluates to undefined without any further property access attempts.
let a = { b: null };
a.b?.c.d   // => undefined
// 1.6.Invocation Expressions
f(0)            // f is the function expression; 0 is the argument expression.
Math.max(x,y,z) // Math.max is the function; x, y, and z are the arguments.
a.sort()        // a.sort is the function; there are no arguments.
// 1.7.Conditional Invocation
expression ?. (expression)
// In ES2020, you can also invoke a function using ?.() instead of ().
function square(x, log) { // The second argument is an optional function
  log?.(x);             // Call the function if there is one(about why use ?. instead of ?, because ? is the ternary operator) 
  return x * x;         // Return the square of the argument
}

// 2.Operators
// 2.1.operators总览, 参考https://js.okten.cn/posts/ch4/#47-operator-overview
// 2.2.赋值运算, 参考https://js.okten.cn/posts/ch4/#4111-assignment-with-operation
// 2.3.eval()
// eval() expects one argument. If you pass any value other than a string, it simply returns that value. If you pass a string, it attempts to parse the string as JavaScript code, throwing a SyntaxError if it fails. If it successfully parses the string, then it evaluates the code and returns the value of the last expression or statement in the string or undefined if the last expression or statement had no value. If the evaluated string throws an exception, that exception propogates from the call to eval().
eval("function f() { return x+1; }");
// 2.4.First-Defined (??)
// ?? is a useful alternative to || (§4.10.2) when you want to select the first defined operand rather than the first truthy operand. 
// 2.4.1. an example of ??
// If maxWidth is defined, use that. Otherwise, look for a value in
// the preferences object. If that is not defined, use a hardcoded constant.
let max = maxWidth ?? preferences.maxWidth ?? 500;
// 2.5.typeof运算符, 参考https://js.okten.cn/posts/ch4/#4133-the-typeof-operator

