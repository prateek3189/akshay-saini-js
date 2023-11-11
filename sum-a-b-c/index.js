function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
}

const result = sum(1)(2)(3)(4)(5)();
console.log(result);
