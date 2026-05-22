// Arrays are destructured by position, not by name. The order you write variables corresponds to index 0, 1, 2, and so on.

const coords = [400.30, -50023, 100]

// here the co-ordinates are split into latitude, longitude and altitude
const [lat, long] = coords;
console.log(lat)
console.log(long)

// skipping elements
const [, , alt] = coords;
console.log("-- skipping first 2 and pulling only altitude")
console.log(alt)

// default values in arrays
const [, , , landmark = "not available"] = coords;
console.log("-- accessing a invalid index causes default value access, else would be undefined")
console.log(landmark)

// rest in arrays
const [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log("-- using ... rest operator to capture all remaining values")
console.log(first)
console.log(remaining)