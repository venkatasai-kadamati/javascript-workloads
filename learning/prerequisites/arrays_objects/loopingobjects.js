let x = {
    name: "John",
    company: "Microsoft",
    salary: 400000,
    age: 24,
    city: "Koki",
    team: "Azure Storage",
    designation: "Software Engineer"
}

// iteration using for-of loop
for (const entry of Object.entries(x)) {
    console.log(entry)
}

// iteration using for-in loop
// helpful for extracting the keys of an object
for (const keys in x) {
    console.log(keys, x[keys])
}