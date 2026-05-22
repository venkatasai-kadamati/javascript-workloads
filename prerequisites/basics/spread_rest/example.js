// spread: expand iterables
// helps convert a string into character array
let str = "sanket"
let splitCh = [...str]
console.log(splitCh)

// helps merge 2 arrays/iterables
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let merge = [...array1, ...array2]
console.log(merge)