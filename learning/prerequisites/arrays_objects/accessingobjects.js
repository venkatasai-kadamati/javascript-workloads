let x = {
    name: "John",
    company: "Microsoft",
    salary: 400000,
    age: 24,
    city: "Koki",
    team: "Azure Storage",
    designation: "Software Engineer"
}

// printing the object
console.log(x)

// printing all keys -> returns a string array of keys
let keysOfX = Object.keys(x);
console.log(keysOfX)

// printing all values
let valuesOfX = Object.values(x);
console.log(valuesOfX)

// printing entries of object (k:v) -> returns an array of pairs
let entriesOfX = Object.entries(x);
console.log(entriesOfX)