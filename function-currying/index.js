const multiply = function (x, y) {
  console.log(x * y);
};

function multiplyNew(x) {
  return function (y) {
    console.log(x * y);
  };
}

// const myltiplyByTwo = multiply.bind(this, 2);

// myltiplyByTwo(10);

// const myltiplyByThree = multiply.bind(this, 3);

// myltiplyByThree(10);

const myltiplyByThree = multiplyNew(2);
myltiplyByThree(3);
