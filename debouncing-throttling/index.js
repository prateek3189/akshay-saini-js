const expensive = () => {
  console.log("Expensive operation");
};

const throttle = (fn, limit) => {
  let that = this,
    flag = true,
    args = arguments;
  return function () {
    if (flag) {
      fn.apply(that, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterExpensive = throttle(expensive, 1000);

window.addEventListener("resize", betterExpensive);
