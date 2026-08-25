// working with arrays (heterogeneous)
let emptyArr = [] // empty array
let arr = [1,2,3] // of same type
let arr2 = [1,2, false, NaN, null, "value"] // of different types
const fixedArr = ["firstItem", "secondItem"] // fixed immutable array

console.log("printing arrays ")
console.log(emptyArr)
console.log(arr)
console.log(arr2)
console.log(fixedArr)

// ! accessing individual elements of array -> using indexing starting from "0"
let nums = [1,2,3]

console.log("printing individual items")
console.log(nums[0])  // first elem
console.log(nums[2]) // last elem

// updating values using indexing
nums[0] = 999 // setting first elem from 0 to 999
console.log("updated value: " + nums[0])

// note: major difference b/w indexing of string vs array is; we can update data using indexing in string (immutable). Wherein, in arrays we can set new values using indexing.
// one more difference: array = object | string = primitive,
// wrong: inputString[0] = "newChar"
// right: inputArray[0] = "newValue"

// for-of loop (similar to for each loop in java)
console.log("printing using for-of loop")
for(const num of nums){
    console.log(num)
}