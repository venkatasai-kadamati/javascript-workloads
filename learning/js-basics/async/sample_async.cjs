// INTERVIEW QUESTION:
// which runs first -> CALLBACK VS CPU TASK
// ANSWER: CPU TASK, though callback is called for 0 sec's, since we are entering the web api section of the Runtime, we are then pushed into the "callback queue". We keep waiting until the "call stack" is empty before executing the callback queue.
// REASONING: since setTimeout isn't part of the standard JS ecosystem, any code having setTimeout goes into the web api section including famous ones like fetch, http and so. Once the task is ready in webapi - they get pushed into the callback queue.
function callback() {
  console.log("callback is called");
}

setTimeout(callback, 0);

// CPU Task
let x = 0;
for (let i = 0; i < 1000; i++) {
  x = x + 1;
}
console.log("printing x after looping:" + x);
