// 1.class
class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  includes(x) {
    return this.from <= x && x<= this.to;
  }

  toString() {
    return `(${this.from}...${this.to})`;
  }
}

let r = new Range(1, 3);
console.log(r.includes(4));
console.log(r.toString());

// 2.inheritance
class Span extends Range {
  constructor(start, length) {
    if (length >= 0) {
      super(start, start + length);
    } else {
      super(start + length, start);
    }
  }
}
