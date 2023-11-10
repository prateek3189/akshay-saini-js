let counter = 1;
const getData = () => {
  // call an API and get the data
  console.log("Fetching Data " + counter++);
};

const debounce = function (getData, duration) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      getData.apply(context, arguments);
    }, duration);
  };

  //
};

const betterFunctions = debounce(getData, 300);
