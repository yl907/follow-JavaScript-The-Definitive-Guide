function range(from, to) {
  let r = Object.create(range.methods);

  r.from = from;
  r.to = to;

  return r;
}

range.methods = {
  include(x) {
    return this.from <= x && x<= this.to;
  },
  toString() {
    return `(${this.from}...${this.to})`; 
  }
}


let r = range(1, 3);
console.log(r.include(2));
console.log(r.toString());