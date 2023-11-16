const user = {
  name: "Prateek",
};

localStorage.setItem("hello", "world");
localStorage.setItem("user", JSON.stringify(user));

const hello = localStorage.getItem("hello");
const newUser = localStorage.getItem("user");
console.log(newUser);

localStorage.removeItem("hello");
const hello2 = localStorage.getItem("hello");
console.log(hello2);
