const fs = require("fs");
const path = require("path");

const correctPath = path.join(__dirname, "a.txt");

// PROBLEM:
// => how does JS thread know how to skip the following log statement when we yet to have the contents fetched from file???
// const contents = fs.readFile(correctPath, "utf-8");
// console.log(contents);

// SOLUTION:
// => we simply need to hold yet fetching happens and once done, we then trigger a function to continue wtih the rest of the work
// callback: once done call me -> anonymous
// literally, readFile is an async function and this based on fetching outputs 2 things -> either an error (or) contents.
// we can now use these either of these to further work
// (order is err > contents => because based on famous golang standards, callbacks in async are error first) "ERROR FIRST CALLBACK PATTERN"
fs.readFile(correctPath, "utf-8", function (err, contents) {
  console.log("done with the fetching");
  console.log(contents);
});

let s = 0;
// task 2 -> looping million nums
for (let i = 0; i < 100; i++) {
  s += i;
}

console.log(s);

// QUESTION: which get's printed first -> s (or) contents?
// ANSWER: s -> this is due to the JS ASYNC RUNTIME Architecture
// callbacks can't interrupt any CPU Task. Since we are looping actively, so even if the OS is ready to fire the callback, IT CAN'T. Thus first s gets printed and then callback activity.
