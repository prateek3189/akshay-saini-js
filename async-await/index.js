const p = new Promise((resolve, rejectß) => {
  setTimeout(() => resolve("Success"), 5000);
});

function getData() {
  p.then((res) => console.log(res));
}

async function handlePromise() {
  // console.log("Start");
  const val = await p;
  // console.log("End");
  // console.log(val);
}

handlePromise();

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success 1"), 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success 2"), 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success 3"), 2000);
});

Promise.all([p1, p2, p3]).then((res) => {
  console.log(res);
});

Promise.allSettled([p1, p2, p3]).then((res) => {
  console.log(res);
});

Promise.race([p1, p2, p3]).then((res) => {
  console.log(res);
});

Promise.any([p1, p2, p3]).then((res) => {
  console.log(res);
});
