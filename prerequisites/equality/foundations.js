/*
* 3 ways to check equality
* 1. "==" loose equals
* 2. "===" strict equals
* 3. "Object.is(_,_)" are objects equal?
* */

/*
* 1. loose equals
* - does type coercion and converts using abstract operations
*   standard operations
* */
console.log(`examples of loose equals "=="`)
console.log(false == null) // returns false, check coercion notes.md on why it's coerce to a number
console.log(null == undefined)

/*
* 2. strict equals
* - does no coercion/casting, most used for accurate/expected results
* */
console.log(`examples of strict equals "==="`)
console.log("false === null:", false === null) // returns false
console.log("null === undefined: ", null === undefined) // returns false

/*
* 3. Object.is()
* - compares NaN and other adhoc variations properly like +0 vs -0
* */
console.log(`examples of Object.is()`)
// console.log(NaN === NaN) // should be true, but returns false.
console.log(Object.is(NaN, NaN)) // returns true.
// console.log(+0 === -0) // returns true, but should be false.
console.log(Object.is(+0, -0)) // return false (correct one)