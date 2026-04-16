/*
* js for dsa doesn't need any imports, everything is available globally
* on leetcode, every solution is a function -> no class wrapping, no imports, no #includes
**/


/*
* popular built-in options
* Array - dynamic array with rich methods (primary ds for all)
* Map - hashmap with any key type - freq counting, fast lookups
* Set - Hashset with any value type - visited tracking, dedupe
* Object - k:v string keys - simple freq maps
* Math - max, min, floor, ceil, abs, sqrt, log2
* JSON - stringify, parse - deep copy, composite keys
* Infinity,-Infinity - min/max initialization
* */

// Missing important ds: Queue, Deque, PriorityQueue, TreeMap

/*
* variable, types, and the number type trap
* dynamically typed, assign value and engine infers it
**/
let count = 0; // number
const ratio = 9.3; // number
const name = "hello"; // string
let found = true; // boolean
const nothing = null; // null
let missing;  // undefined

// ! note: always use const by default. let when we need to reassign. never var
// "var" keyword is function scoped rather than block scoped. all languages behave as block scoped (java, python)

/*
// demo using var
for (var i = 0; i < 5; i++) {

}
console.log(i); // still works, not the regular behavior

// demo using let
for (let j = 0; j < 5; j++) {

}
console.log(j);  // ReferenceError: j is not defined
**/


/*
* important data types
* number, bigint, string, boolean, null, undefined (missing/uninitialized)
* ! note: for JavaScript, everything is a number, we don't have integer type.
* every number is a 64-bit floating-point double.
* number "42" and number "42.0" are the same value, same type.
* */

let intNum = 42
let floatNum = 42.000
console.log("are integer and float the same?", intNum === floatNum)

/*
* 3 critical issues with the above float and integer being stored as number
*
* problem_1: division always ends up as float
*   7/2 gives 3.5 instead of 3 like other languages.
*   so we need to truncate it always
*   we need to do "Math.trunc(7/2), similar to "(int) 7/2" in other lang's
*
* problem_2: integer precision limited to 2^(53-1).
*   we lose integer precision automatically after that MAX_SAFE_INTEGER.
*   for most dsa problems where constraints are upto 10^9, this isn't an issue.
*   but for problems involving large prefix sums (or) multiplication of large values, we should use "bigint"
*
* problem_3: binary search midpoint does not overflow, but needs floor.
*   unlike java where (left + right) can overflow, JavaScript number safely holds sum up to 2^53.
*   but we need to truncate using Math.floor because division ends up as a flot.
* */

console.log("max safe integer", Number.MAX_SAFE_INTEGER)
// using Number(__) helps convert from boolean to number
console.log("testing conversion:", Number(1))

const big = 9007199254740993n; // note the 'n' suffix for bigint
const result = big * 2n // BigInt arithmetic
// can't mix big + 1 throws error, instead the correct is "big + 1n"

// rounding techniques -> floor, ceil, truncate
let roundingNum = -6.300923;
console.log("floor", Math.floor(roundingNum), "for number:", roundingNum)
console.log("ceil", Math.ceil(roundingNum), "for number:", roundingNum)
console.log("truncate", Math.trunc(roundingNum), "for number:", roundingNum)

/*
* ternary operator
*
* Math.max(a,b) is same as (a > b) ? a: b
* (count === 1)? "item" : "items"
* */


products = 1;
// demo using ternary operator
const label = (products === 1) ? "pack in one" : "pack in many";
console.log("label instruction:", label)

/*
* typeof operator
* typeof 42 - number
* typeof "welcome" - string
* typeof true - boolean
* typeof undefined - "undefined"
* ! note => typeof null - "object - null is not an object"
* typeof [] - "object"
* Array.isArray([]) // true - correct way to check if object is array or not
* */

console.log("type of undefined: ", typeof undefined)
console.log("type of array: ", typeof [1, 2])
console.log("type of null: ", typeof null) // but in fact this is not an object.

/*
* operators and control flow
* Strict Equality
*   always use "===" instead of "==" to avoid type coercion
*   key rule: == always ends up coercing into number.
* */
console.log("----- demo for type coercion using == & === -----");
console.log("using ==")
console.log(0 == "") // true (empty string coerces to 0 (number)
console.log(0 == false) // true ( boolean false coerces to 0 (number)
console.log(null == undefined) // true (special rule)
console.log("5" == 5) // true (string coerces to number
console.log([] == false) // true (array coerces to 0)

console.log("using ===")
console.log(0 === "") // false
console.log(0 === false) // false
console.log(null === undefined) // false
console.log("5" === 5) // false

/*
* ! note: "==" is useful for checking for both "null" and "undefined" in a single comparison
* we can write in 2 ways
  1. val == null is true when either val is null/undefined
  2. alternative: val === null || val === undefined
**/

// ! note: JavaScript uses smart notation with underscore to make numbers readable
// "value = 300000" is same as "value = 3_00_000"

/*
* control flow
*
* 1. index based for loop
*   for(let i = 0; i < num.length; i++) {}
*
* 2. for...of iteration
*   for(const num of nums){}
*
* 3. while loop
*   while(left < right) {}
*
* ! note: never use for...in on arrays. it iterates over string keys, not values
*   which means only keys (index) are returned as strings.
* */

let testArr = [100, 200, 300, 400, 500]

// using for in to test looping on arrays
let forInResult = [];
for (let num in testArr) {
    forInResult.push(num)
}
console.log("values printed using for in loop: ", forInResult)

/*
* short-circuit evaluation and modern operators
* JavaScript has 2 operators that are super helpful
* 1. Nullish Coalescing (??)
*   returns the right side only if the left is null or undefined.
*   const count = map.get(key) ?? 0 // 0 if only "get" returns null/undefined
*
* 2. optional chaining (?.)
*   short-circuits to undefined if any part is null or undefined.
*   const val = node?.left?.val // undefined if node or node.left is null/undefined.
*
* ! note - it is recommended to use ?? over || for default values. map.get(key) || 0 would incorrectly replace a stored value of 0 with 0. The ?? operator only replaces null and undefined, preserving legitimate falsy values like 0, "", and false.
* */

/*
* function, scope and closure
* we have 2 major ways to define functions -> regular and arrow
*
* 1. regular functions
*   these are hoisted - usable before definition.
*   function dfs(node, visited){
*        print(some_work)
*   }
*
* 2. arrow function
*   not hoisted, concise for callbacks
*   const compare = (a,b) => a -b;
*
*   // arrow function with body
*   const isValid = (s) => {
*       ... body
*   }
*
* ! note -> use regular function for main solution and arrow functions for comparators, callbacks and short helper functions.
* ! major difference -> arrows functions can't be used before definition as they are not hoisted.
* */

const isValid = (input) => {
    if (input > 30) {
        return true;
    }
    return false;
};
outcome = isValid(3)
console.log("isValid function outcome: ", outcome)

/*
* pass by value & pass by reference
* 1. JavaScript passes primitives (numbers, strings, booleans) by value
* 2. passes objects (arrays, map, sets, plain objects) by reference
*
* ! note: for solving backtracking based problems, we need to copy the array using spread operator to ensure results are stacked rather than getting overridden.
*   [...path] spread creates a shallow copy of the array. Same as java's "new ArrayList<>(path)"
*   correct: results.push([...path])
*   wrong: results.push(path)
*
* ! note: if we reassign the array, then its considered as a new object with different memory
* */

function addToArray(arr, val) {
    arr.push(val); // since we are working on the existing array, the original array is affected.
}

function tryToReassign(arr) {
    arr = [99, 100] // doesn't affect the original array because reassignment creates a new object with different memory altogether.
}

const newArr = [1, 2, 3];
addToArray(newArr, 4);
console.log("printing array after update to the original array itself: ", newArr)
tryToReassign(newArr);
console.log("printing array after re-assignment: ", newArr)

/*
* closures
* unique to JS and are useful for memoization patterns
* mostly commonly used in design patterns like LRU Cache.*/