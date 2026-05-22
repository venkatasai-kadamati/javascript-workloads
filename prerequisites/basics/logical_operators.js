// logical operators in JS don't just return true (or) false
// they return one of the operands when it's not boolean vs boolean

// && (AND) - returns first FALSY value, or the last value if all are truthy
console.log(true && "hello") // "hello"
console.log(false && "hello") // false
console.log(1 && 2 && 3) // 3

// || (OR) - returns first TRUTHY value, or the last value if all are falsy
console.log(null || "default"); // "default"
console.log("hi" || "default"); // "hi"
console.log(0 || false || ""); // "" (last value)

// short-circuiting -> the right side is never evaluated if result is determined early
let db = null;
let result = db && db.query("SELECT *"); // db is falsy, db.query is never called
console.log("result", result)

// real-world example - conditional execution
const isAdmin = true;
// isAdmin && sendAdminAlert(); // only calls functions if isAdmin is truthy

// nullish coalescing - only triggered on null/undefined, not all falsy
const port = 0;
console.log(port || 3000); // outputs 3000, but should be 0.
console.log(port ?? 3000); // defaults to 3000 only for null and undefined