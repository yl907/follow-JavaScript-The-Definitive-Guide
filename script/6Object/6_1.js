// 1.Inheritance
let o = {};               // o inherits object methods from Object.prototype
o.x = 1;                  // and it now has an own property x.
let p = Object.create(o); // p inherits properties from o and Object.prototype
p.y = 2;                  // and has an own property y.
let q = Object.create(p); // q inherits properties from p, o, and...
q.z = 3;                  // ...Object.prototype and has an own property z.
let f = q.toString();     // toString is inherited from Object.prototype
q.x + q.y                 // => 3; x and y are inherited from o and p

// 2.Deleting Properties
delete q.z; // now q has no z property.

// 3.Testing Properties
// 3.1. in
o = { x: 1 };
"x" in o         // => true: o has an own property "x"
"y" in o         // => false: o doesn't have a property "y"
"toString" in o  // => true: o inherits a toString property
// 3.2. hasOwnProperty()
o = { x: 1 };
o.hasOwnProperty("x")        // => true: o has an own property x
o.hasOwnProperty("y")        // => false: o doesn't have a property y
o.hasOwnProperty("toString") // => false: toString is an inherited property

// 4.1. for/in
// 为了防止 for/in 枚举到继承属性，可以在循环中添加显示检查：
for(let p in o) {
  // Skip inherited properties
  if (!o.hasOwnProperty(p)) continue;       
}

for(let p in o) {
  // Skip all methods
  if (typeof o[p] === "function") continue; 
}

// 4.2. Object.keys() 返回对象的可枚举自有属性名称数组集合

// 5.Extending Objects
let target = {x: 1}, source = {y: 2, z: 3};
for(let key of Object.keys(source)) {
    target[key] = source[key];
}
target;  // => {x: 1, y: 2, z: 3}
// 但是因为这个是个常用的操作，各种 JavaScript 框架定义公用函数，经常将其命名为 extend() 来执行这个拷贝操作。最后在 ES6 中，这个功能以 Object.assign() 的形式被添加到 JavaScript 核心语言中。

// 5.1. 扩充对象属性的一种特殊情况
// 看这样一个场景，有一个对象定义许多属性的默认值，希望将这些默认属性中不存在于目标对象中的属性复制到目标对象中，使用 Object.assign() 不会得到想要的结果：
Object.assign(o, defaults);  // overwrites everything in o with defaults
// 想得到这个效果需要创建一个新的对象，将默认值拷贝到其中，然后用 o 的属性重写默认值中的属性：
o = Object.assign({}, defaults, o);

// 6.Serializing Objects
o = {x: 1, y: {z: [false, null, ""]}}; // Define a test object
let s = JSON.stringify(o);   // s == '{"x":1,"y":{"z":[false,null,""]}}'
let p = JSON.parse(s);       // p == {x: 1, y: {z: [false, null, ""]}}

// 7.Object Methods
// 7.1.The toString() Method
// toString() 方法没有实参，它将返回一个表示调用这个方法的对象值的字符串。在需要将对象转换为字符串的时候，JavaScript 都会调用这个方法。比如，当使用 + 运算符连接一个字符串和一个对象时或者在希望使用字符串的方法中使用了对象时都会调用 toString()。
let point = {
  x: 1,
  y: 2,
  toString: function() { return `(${this.x}, ${this.y})`; }
};
String(point)    // => "(1, 2)": toString() is used for string conversions
// 7.2.The toLocaleString() Method
// 除了基本的 toString() 方法之外，对象都包含 toLocaleString() 方法，这个方法返回一个表示这个对象的本地化字符串。Object 中默认的 toLocaleString() 方法并不做任何本地化自身的操作，它仅调用 toString() 方法并返回对应值。
// Date 和 Number 类对 toLocaleString() 方法做了定制，可以用它对数字、日期和时间做本地化的转换。 Array 类的 toLocaleString() 方法和 toString() 方法很像，唯一的不同是每个数组元素会调用 toLocaleString() 方法转换为字符串，而不是调用各自的 toString() 方法。
point = {
  x: 1000,
  y: 2000,
  toString: function() { return `(${this.x}, ${this.y})`; },
  toLocaleString: function() {
      return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`;
  }
};
point.toString()        // => "(1000, 2000)"
point.toLocaleString()  // => "(1,000, 2,000)": note thousands separators
// 7.3.The valueOf() Method
// valueOf() 方法和 toString() 方法非常类似，但往往当 JavaScript 需要将对象转换为某种原始值而非字符串的时候才会调用它，尤其是转换为数字的时候。如果在需要使用原始值的上下文中使用了对象，JavaScript 就会自动调用这个方法。
// 默认的 valueOf() 方法不足为奇，但有些内置类自定义了 valueOf() 方法. Date 类定义 valueOf() 将日期转化成数值型，并且这允许 Date 对象使用 < 和 > 按时间先手顺序比较。可以对 point 对象做同样的事，定义一个 valueOf() 方法返回原点到点的距离：
point = {
  x: 3,
  y: 4,
  valueOf: function() { return Math.hypot(this.x, this.y); }
};
Number(point)  // => 5: valueOf() is used for conversions to numbers
point > 4      // => true
point > 5      // => false
point < 6      // => true
// 7.4.The toJSON() Method
// Object.prototype 实际上没有定义 toJSON() 方法，但对于需要执行序列化的对象来说，JSON.stringify() 方法（见 §6.8）会调用 toJSON() 方法。如果在待序列化的对象中存在这 个方法，则调用它，返回值即是序列化的结果，而不是原始的对象。Date 类（§11.4）定义了 toJSON() 方法返回日期的序列化字符串。我们可以这样对 point 对象做同样的事：
point = {
  x: 1,
  y: 2,
  toString: function() { return `(${this.x}, ${this.y})`; },
  toJSON: function() { return this.toString(); }
};
JSON.stringify([point])   // => '["(1, 2)"]'

// 8.Shorthand Properties
// 对象简写
// version1(普通版本):
let x = 1, y = 2;
let o = {
    x: x,
    y: y
};
// version2(简写版本): 
x = 1, y = 2;
let o = { x, y };
o.x + o.y  // => 3

// 9.Computed Property Names
// 有时需要创建具有特定属性的对象，但该属性的名称不是可以在源代码中键入的编译时常量。相反，需要的属性名称存储在变量中，或者是调用的函数的返回值。不能对此类属性使用基本对象字面量。而必须创建一个对象，通过额外的步骤，添加所需的属性：
// 9.1.version1(普通版本)
let PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }

let o = {};
o[PROPERTY_NAME] = 1;
o[computePropertyName()] = 2;

// 9.2.version2(计算属性名版本) -- 个人理解就是使:左边的值也变为变量, 而非字符串。比如[PROPERTY_NAME]就是指PROPERTY_NAME这个变量, 而非字符串'PROPERTY_NAME'. 
PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }

let p = {
    [PROPERTY_NAME]: 1,
    [computePropertyName()]: 2
};

p.p1 + p.p2 // => 3

// 10.Symbols as Property Names
const extension = Symbol("my extension symbol");
let o = {
    [extension]: { /* extension data stored in this object */ }
};
o[extension].x = 0; // This won't conflict with other properties of o

// 11.Spread Operator in Object
// 11.1.一个普通例子
let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };
rect.x + rect.y + rect.width + rect.height // => 175
// 11.2.一个特殊情况。如果展开的目标对象和源对象中具有相同的名称，则该属性的值将是位置处于后面的值：
let o = { x: 1 };
let p = { x: 0, ...o };
p.x   // => 1: the value from object o overrides the initial value
let q = { ...o, x: 2 };
q.x   // => 2: the value 2 overrides the previous value from o.

// 12.Shorthand Methods
// 12.1.普通版本
let square = {
  area: function() { return this.side * this.side; },
  side: 10
};
square.area() // => 100
// 12.2.简写版本
square = {
  area() { return this.side * this.side; },
  side: 10
};
square.area() // => 100

// 13.Property Getters and Setters
let o = {
  // An ordinary data property
  dataProp: value,

  // An accessor property defined as a pair of functions.
  get accessorProp() { return this.dataProp; },
  set accessorProp(value) { this.dataProp = value; }
};


