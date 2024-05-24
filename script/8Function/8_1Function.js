// 1.Arrow Function
let filtered = [1,null,2,3].filter(x => x !== null);

// 2.Nested Function
function hypotenuse(a, b) {
  function square(x) { 
    return x * x; 
  }
  return Math.sqrt(square(a) + square(b));
}

// 3.1.Function Invocation and 'this'
// 下面的例子中，function f()是一个函数声明, 这导致 f 作为普通函数被调用, 因此它的 this 不是 o.函数声明内部的this将指向global或者undefine

// 个人的一些观点: 
// 第一个this === o处于第一次代码执行跳转后所在的位置, 于是this指向调用者(o);
// f()是在o.m()中再次进行跳转后执行的代码块, 此时 f 作为一个普通函数被调用(换句话说, 不是类似于o.f()形式进行的调用, 这种函数调用没有主动调用者), 所以this失去了追踪的对象。

let o = {                 // An object o.
  m: function() {       // Method m of the object.
      let self = this;  // Save the "this" value in a variable.
      console.log(`1.m: ${this === o}`)        // => true: "this" is the object o.
      f();              // Now call the helper function f().

      function f() {    // A nested function f
          console.log(`2.f: ${this === o}`)    // => false: "this" is global or undefined
          console.log(`3.self: ${self === o}`)    // => true: self is the outer "this" value.
      }

      // 箭头函数不绑定自己的 this，而是捕获其所在上下文的 this 值。
      // ES6标准的箭头函数就是故意这样设计的, 所以此处外部的this就是内部的this, 在下方代码中的outerThis === innerThis。
      const outerThis = this;
      const f1 = () => {
        console.log(`4.arrow function: ${this === o}`);
        const innerThis = this;
        console.log(`5.outerThis === innerThis: ${outerThis === innerThis}`)
      }
      f1();
  }
};
o.m();                    // Invoke the method m on the object o.

// 3.2.Arrow function and 'this'
const outerThis1 = this; // Window
let obj = {
  // 请问下方innerThis1的值是什么？我最初认为可能是obj, 但实际上它是Window, 解释如下:
  // 在对象字面量中，this 的值是在对象创建之前就已经确定的，它不是指向当前正在创建的对象。this 的值取决于当前的执行上下文，而不是对象的定义位置。
  innerThis1: this,
  arrowFunction: () => {
      console.log(`6.${this}`); // this 指向 obj 上下文中的 this
      console.log(`7.outerThis1 === innerThis1: ${outerThis1 === obj.innerThis1}`)
  }
};
obj.arrowFunction(); // 箭头函数没有自己的 this，它继承自定义时的上下文

// 4.bind(), 指定函数的this值为括号内的第一个参数。
let o1 = {
  m: function() {
      console.log(`8.${this === o1}`); // => true: "this" is the object o1.
      function f() {
          console.log(`9.${this === o1}`); // => true: "this" is the object o1.
      }
      f = f.bind(this); //创建一个新函数, 这个新函数内部的this值等于bind的参数this(该this的值是o1),
      f();
  }
};
o1.m(); // Invoke the method m on the object o1.