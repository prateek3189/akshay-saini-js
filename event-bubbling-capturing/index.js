document.querySelector("#grand-parent").addEventListener(
  "click",
  function () {
    console.log("grand-parent clicked");
  },
  false
);

document.querySelector("#parent").addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    console.log("parent clicked");
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  function (e) {
    // Stop bubbling and capturing at this point
    e.stopPropagation();
    console.log("child clicked");
  },
  false
);

// Event bubbling
document.querySelector("#categories").addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() === "li") {
    console.log(e.target.id);
  }
});
