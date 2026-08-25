// given a string, try to print no of occurrences of each unique character of a string
// example input: JavaScript


// solution: first insert the character and simply say value++ if found else create it with 1
str = "javascript";

// freq object to hold frequencies, initially empty
let freq = {}
// ch = j
for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === undefined) {
        // it means that character is seen for the first time, thus freq is 1 now.
        freq[str[i]] = 1;
    } else {
        // already exists, so increment by 1;
        freq[str[i]]++;
    }
}

// printing the
console.log("printing the final frequency mapping:", freq)