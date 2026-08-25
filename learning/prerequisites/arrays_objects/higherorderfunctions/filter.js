// filter function (HOF)
// also loops over the array elements
// there is one special thing about filter. i.e, the argument function f which we have to pass inside filter should always be return a boolean, otherwise output will be converted into a boolean.

function oddOrEven(x) {
    return x % 2 === 0; // returning a boolean
}

let arr = [1, 2, 3, 4, 5, 6, 7];

const output = arr.filter(oddOrEven);
console.log(output)

// filter only uppercase characters
function filterUpper(ch) {
    return ch === ch.toUpperCase();
}

const charArr = ["a", "B", "c", "D"]
const result = charArr.filter(filterUpper);
console.log(result)