/*
* arrays
* dynamic (variable size), zero indexed
* we also get an "Array()" constructor with lots of methods like fill and so on.
* */

// literal array
const nums = [1, 2, 3, 4]

// fixed size, filled with a value
const n = 4;
const visited = new Array(n).fill(-1)
const dp = new Array(n + 1).fill(0)

// empty array
const emptyArr = []

// arr.length -> gives the current size just like java

/*
* 2D array initialization
*   wrong: all rows share the same inner array reference
*   const matrix = new Array(rows).fill(new Array(cols).fill(0));
*   correct: each row is a separate array
*   const matrix = Arrays.from({length:rows}, ()=> new Array(cols).fill(0));
*   matrix[0][0] = 5; // only affects row 0 now.
* */

/*
* essential array methods
* 1. push(val) - appends the new element to the end of array (stack push)
* 2. pop() - removes the last element of array (stack pop)
* 3. shift() - removes the first element (front), O(n), similar to queue dequeue
* 4. unshift() - adds to the front, O(n)
* 5. splice
* 6. slice(start, end) - O(k), copy a portion, subarray
* 7. concat(arr2) - O(n+m), merge 2 arrays
* 8. reverse() - O(n) - reverse in place
* 9. includes(val) - linear search, O(n)
* 10. indexOf(val) - find the first occurrence
* 11. fill(val, start, end) - O(n), fill range with values
* 12. flat(depth) - O(n), flatten nested arrays
* */