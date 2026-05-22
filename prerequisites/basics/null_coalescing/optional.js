let numInput = 0

// using simple or to set to default
// numInput = numInput || "default" -> this is bad as we potentially make it harder to work with numeric values down the line
// using null coalescing to handle only null/undefined
numInput = numInput ?? "default"
console.log(numInput)