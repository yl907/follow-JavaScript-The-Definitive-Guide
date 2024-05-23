// 1.构造函数模式
function Range(from, to) {
  this.from = from;
  this.to = to;
}

// prototype
Range.prototype = {
  includes: function(x) {
    return this.from <= x && x <= this.to;
  },

  toString: function() {
    return `(${this.from}...${this.to})`; 
  },

  constructor: Range
}

let r = new Range(1, 3);
console.log(r.includes(4));
console.log(r.toString());

// 2.inheritance(让类的原型构成链，比如Span.prototype和Range.prototype要构成链，代码的表现形式是Span.prototype.prototype === Range.prototype, 具体如何构造原型链可以参考下方代码)
// This is the constructor function for our subclass
function Span(start, span) {
  if (span >= 0) {
      this.from = start;
      this.to = start + span;
  } else {
      this.to = start;
      this.from = start + span;
  }
}

// Ensure that the Span prototype inherits from the Range prototype
Span.prototype = Object.create(Range.prototype);

// We don't want to inherit Range.prototype.constructor, so we
// define our own constructor property.
Span.prototype.constructor = Span;

// By defining its own toString() method, Span overrides the
// toString() method that it would otherwise inherit from Range.
Span.prototype.toString = function() {
  return `(${this.from}... +${this.to - this.from})`;
};