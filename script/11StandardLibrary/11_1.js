// 1.Set类 (无重复元素)
let s = new Set();       // A new, empty set
let t1 = new Set([1, s]); // A new set with two members
// Set() 构造函数的实参不必是数组：允许任何可迭代的对象（包括其他 Set 对象）
let t2 = new Set(s);                  // A new set that copies the elements of s.
let unique = new Set("Mississippi"); // 4 elements: "M", "i", "s", and "p"
unique.size        // => 4
// 创建 set 时无需初始化。可以随时使用add()、delete() 和 clear() 添加和删除元素。
s = new Set();
s.size              // => 0
s.add(1);           // Add a number
s.size              // => 1; now the set has one member
s.add(1);           // Add the same number again
s.size              // => 1; the size does not change
s.add(true);        // Add another value; note that it is fine to mix types
s.size              // => 2
s.add([1,2,3]);     // Add an array value
s.size              // => 3; the array was added, not its elements
s.delete(1)         // => true: successfully deleted element 1
s.size              // => 2: the size is back down to 2
s.delete("test")    // => false: "test" was not a member, deletion failed
s.delete(true)      // => true: delete succeeded
  // 解释下一行代码为什么没有作用: 当您添加一个数组到 Set 时，Set 存储的是该数组的引用，而不是其内容的一个副本。因此，当您尝试删除一个数组时，它必须与 Set 中存储的引用完全相同。
s.delete([1,2,3])   // => false: the array in the set is different
s.size              // => 1: there is still that one array in the set
s.clear();          // Remove everything from the set
s.size              // => 0
// 除了可迭代之外，Set 类还实现了一个 forEach() 方法，该方法类似于同名的 array 方法：
let t = new Array();
s.forEach(n => { t.push(n); });

// 2.Map类
let m = new Map();  // Create a new, empty map
let n = new Map([   // A new map initialized with string keys mapped to numbers
    ["one", 1],
    ["two", 2]
]);
// Map()参数是一个可迭代对象, 其中每一个元素是一个键值对, 比如上方的["one", 1]和["two", 2]

// 创建 Map 对象后，可以用 get() 查询给定键的值，并可以用 set() 添加新的键值对。但是请记住，map 是一组键，每个键映射一个值。
// 除了 get() 和 set()，Map 类也定义了类似于 Set 的方法：使用 has() 判断 map 是否包含指定键；使用 delete() 删除 map 中的一个键（和它映射的值）；使用 clear() 来移除 map 中所有的键值对；使用 size 属性知道 map 中包含多少个键。
m = new Map();      // Start with an empty map
m.size               // => 0: empty maps have no keys
m.set("one", 1);     // Map the key "one" to the value 1
m.set("two", 2);     // And the key "two" to the value 2.
m.size               // => 2: the map now has two keys
m.get("two")         // => 2: return the value associated with key "two"
m.get("three")       // => undefined: this key is not in the set
m.set("one", true);  // Change the value associated with an existing key
m.size               // => 2: the size doesn't change
m.has("one")         // => true: the map has a key "one"
m.has(true)          // => false: the map does not have a key true
m.delete("one")      // => true: the key existed and deletion succeeded
m.size               // => 1
m.delete("three")    // => false: failed to delete a nonexistent key
m.clear();           // Remove all keys and values from the map
// Map 是可迭代对象，每一个迭代值是两个元素数组，第一个元素是键，第二个元素是键映射的值。如果对 Map 对象使用展开运算符，会得到一个数组的数组，就像传递给 Map() 构造函数的实参。当使用 for/of 循环遍历一个 map 时，常使用解构赋值将键和值赋值给展开变量：
m = new Map([["x", 1], ["y", 2]]);
[...m]    // => [["x", 1], ["y", 2]]
for(let [key, value] of m) {
    // On the first iteration, key will be "x" and value will be 1
    // On the second iteration, key will be "y" and value will be 2
}
// 如果只想遍历 map 中的键或者映射的值，使用 keys() 和 values() 方法
[...m.keys()];     // => ["x", "y"]: just the keys
[...m.values()];   // => [1, 2]: just the values
[...m.entries()];  // => [["x", 1], ["y", 2]]: same as [...m]
// Map 对象也可以使用 forEach() 方法进行遍历。
m.forEach((value, key) => {  // note value, key NOT key, value
  // On the first invocation, value will be 1 and key will be "x"
  // On the second invocation, value will be 2 and key will be "y"
});

// 3.WeakMap 类.  WeakMap 类是 Map 类的变体（但不是真正的子类），它不会阻止其键值被垃圾回收。垃圾回收是 JavaScript 解释器回收不再“可访问”并且无法由程序使用的对象的内存的过程。常规 map 保留对其键值的“强”引用，即使对它们的所有其他引用都已消失，它们仍然可以通过映射访问。相比之下，WeakMap 保留对其键值的“弱”引用，以使它们无法通过 WeakMap 获得，并且它们在 map 中的存在也不会阻止对其内存的回收。
// WeakMap 的预期用途是允许将值与对象相关联而不会引起内存泄漏。例如，假设正在编写一个带有对象实参的函数，并且需要对该对象执行一些耗时的计算。为了提高效率，希望将计算出的值进行缓存以备后用。如果使用 Map 对象实现缓存，则将防止回收任何对象，但是通过使用 WeakMap，可以避免此问题。

// 4.WeakSet 实现了一组对象，这些对象不会阻止垃圾回收这些对象。 

// 5.Typed Arrays and Binary Data

// 6.Pattern Matching with Regular Expressions

// 7.let url = new URL("https://example.com:8000/path/name?q=term#fragment");
url.href        // => "https://example.com:8000/path/name?q=term#fragment"
url.origin      // => "https://example.com:8000"
url.protocol    // => "https:"
url.host        // => "example.com:8000"
url.hostname    // => "example.com"
url.port        // => "8000"
url.pathname    // => "/path/name"
url.search      // => "?q=term"
url.hash        // => "#fragment"

// and much more info, refer to https://js.okten.cn/posts/ch11/