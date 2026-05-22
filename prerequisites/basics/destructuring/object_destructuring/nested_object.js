// // Drill into nested object directly
// const {address: {city, company}} = employee;
// console.log(city);    // "Seattle"
// console.log(company); // "Amazon"
// Note: `address` itself is NOT a declared variable here


const employee = {
    name: "Venkat",
    address: {
        city: "Seattle",
        company: "Microsoft"
    }
};


// simply, we are asking to first pull address as a property and then again pull city within it.
const {address: {city}} = employee;
console.log(city)

// ...rest -> this is popular for collecting all the other properties that we didn't explicitly mention
// here we are specifically asking for just the company and the rest will be collected into "other"
const {address: {company}, ...other} = employee;
console.log(company)
console.log(other) // since we asked about address, the only other property left is "name".