const m = new Map();

m.set("name", "venkat"); // string key
m.set(1, "one"); // number key
m.set(true, "yes"); // boolean key

console.log(m.get("name")); // read back with get (key)
console.log(m.get(1)); // number key
console.log(m.size); // a property, no brackets
