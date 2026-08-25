// we can extend our logging with basics methods like the following:
// log, error, warn, time timeEnd, table

// basic usage
console.log("Hello, world !!")
console.log(42, true, null) // multiple args separated by space

// labeled logging - better debugging
const port = 9000;
console.log("printing postgres port: ", port)

// pitfall -> object state logging is misleading
// solution -> always create a shallow copy for object state using {...obj} (or) deep copy for nested objects using JSON.parse(JSON.stringfy(obj))
const config = {host: "localhost", port: 3000}
console.log(config) // shows live reference, not the state at log time.
config.port = 5000
console.log(config)
console.log({...config}) // snapshot using spread - safer for debugging state

// using other console methods
console.error("db connection failed") // shows in red, stderr
console.warn("deprecated api call") // yellow warning
console.table([1, 2, 3]) // great for array of objects

// using console.time method for performance execution time
console.time("loop")
for (let i = 0; i < 1e6; i++) {
}
console.timeEnd("loop")