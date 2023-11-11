console.log(
  "In normal scenario the HTML PArsing is happening and then the js file downloaded and then the code executes and then the parsing will continue"
);
console.log(
  "In case of Async - the file downloaded asynchronously and then excecutes and then html parsing will continue"
);
console.log(
  "In case of defer the html parsing will completes, meanwhile the file gets downloaded and executes only after HTML parsing completes"
);
