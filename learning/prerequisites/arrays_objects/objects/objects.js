// kind of key value pair = { k:v, k:v ...}
let x = {name: "Venkat", age: 24}
let y = {
    name: "Sai",
    age: 19,
    marks: 19
}

// ! update & access
x["name"] = "karmadata" // when using [] we can pass variable value as property
x.name = "new_name" // "." uses the name as direct literal.

// Note: from key we can access values but not the reverse (due to hashing)
// in an object the keys are unique, but values are non-unique.
console.log("accessing updated values")
console.log(x)
console.log(x.name)
console.log(x["name"]) // same as x.name

// objects are mutable, they can be modified.

// ! how to add a new property to already existing object
x.marks = 100; // if marks key is present, it gets updated, else it gets added.
x["company"] = "google"

console.log(x)


// ! delete a key:value pair (property entry)
delete x.name;

console.log("after deletion of name property: " + x)

// if property of object isn't present and if we try to access it, we get undefined output.
// when undefined in returned, it is auto converted into falsely boolean value.