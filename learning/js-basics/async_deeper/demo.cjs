const fs = require("fs");

// callback after fetching data from file
function process(err, contents) {
  console.log("done fetching the contents");
}

fs.readFile("a.txt", "utf-8", process);
