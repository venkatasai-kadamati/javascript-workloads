/**
 * IMPORTANT: By default, Array.sort() converts elements to strings
 * and sorts them lexicographically (dictionary order), NOT numerically.
 */

const numbers = [1, 2, 11, 1390, 390, 70000];

// Default sort (lexicographical)
const lexicallySorted = numbers.sort();
console.log('Lexicographical sort:', lexicallySorted);
// Output: [1, 11, 1390, 2, 390, 70000]

/**
 * Lexicographical Sort Explanation:
 *
 * Think of lexicographical sorting like alphabetical ordering,
 * where each digit is treated as a letter:
 *
 * Digit to Letter Analogy:
 * 0 → A    5 → F
 * 1 → B    6 → G
 * 2 → C    7 → H
 * 3 → D    8 → I
 * 4 → E    9 → J
 *
 * Our original array: [1, 2, 11, 1390, 390, 70000]
 *
 * Using our letter analogy:
 * 1    → B
 * 2    → C
 * 11   → BB
 * 1390 → BDJA
 * 390  → DJA
 * 70000 → HAAAAA
 *
 * Sorting alphabetically:
 * B, BB, BDJA, C, DJA, HAAAAA
 *
 * Back to numbers:
 * [1, 11, 1390, 2, 390, 70000]
 *
 * This is why "11" comes before "2" in lexicographical sorting:
 * Just like "BB" comes before "C" in alphabetical ordering.
 */

// For numerical sorting, use a compare function:
const numericallyAscending = numbers.sort((a, b) => a - b);
console.log('Numerical ascending:', numericallyAscending);
// Output: [1, 2, 11, 390, 1390, 70000]

// For descending numerical order:
const numericallyDescending = numbers.sort((a, b) => b - a);
console.log('Numerical descending:', numericallyDescending);
// Output: [70000, 1390, 390, 11, 2, 1]
