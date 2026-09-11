// 1. JS basics - done
// 2. Promises, callbacks, CPU VS IO
// 3. Filter & Arrow functions
// 4. Promises
// 5. Async Await
// 6. DOM

// functional arguments
// simple explanation -> just passing functions in arguments
// idea: functions are simply first class citizens in JS. So like how we pass/interact with variables, we can essentially do the same.

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// function doArthimetic(a, b, whatToDo) {
//     if (whatToDo == "sum") {
//         return sum(a, b);
//     } else {
//         return sub(a, b);
//     }
// }

function doArthimetic(a, b, fn) {
  return fn(a, b);
}

const addOpResult = doArthimetic(1, 2, sum);
const subOpResult = doArthimetic(1, 2, sub);

console.log(addOpResult);
console.log(subOpResult);
