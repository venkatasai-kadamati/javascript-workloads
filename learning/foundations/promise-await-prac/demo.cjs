// create promisified version of fs.readFile
function readFilePromise(fileName, encoding) {
  return new Promise();
}

readFilePromise("a.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log("something is wrong"));

// promise class constructor has the following constructor
// the constructor expects a function - which again expects 2 functions
// Promise(functionOuter (functionInner(){}, functionInner(){}) {});
