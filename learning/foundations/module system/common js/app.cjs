// lets now import all functions exports from math.cjs file
// literally, we are saying: "get me all the functions exported from the file"

const { add } = require("./math.cjs");

// try sample call
const result = add(1, 2);
console.log(result);
