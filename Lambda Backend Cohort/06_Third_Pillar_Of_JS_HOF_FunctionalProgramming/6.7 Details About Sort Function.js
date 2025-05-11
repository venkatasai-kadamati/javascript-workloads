const numbers = [1, 2, 11, 1390, 390, 70000];

// Default sort (lexicographical)
const lexicallySorted = numbers.sort();
console.log('Lexicographical sort:', lexicallySorted)

/**
 * Array.sort() as a Higher Order Function
 *
 * The sort() method is a HOF that takes a comparator function as its argument.
 * This comparator function determines how elements are ordered.
 *
 * Comparator Function Mechanics:
 *
 * 1. The comparator receives two elements (a, b) from array
 * 2. It returns:
 *    - Negative value: if a should come BEFORE b
 *    - Positive value: if a should come AFTER b
 *    - Zero: if order doesn't matter (considered equal)
 *
 * Common Comparator Patterns:
 *
 * 1. Ascending numerical sort:
 *    numbers.sort((a, b) => a - b);
 *    // Returns negative when a < b (correct order), a is placed before b since a is less than b. (place it on left side)
 *    // Returns positive when a > b (needs swapping), a is placed after b since a is greater than b. (place it on right side)
 *
 * 2. Descending numerical sort:
 *    numbers.sort((a, b) => b - a);
 *    // Returns negative when b < a (correct for descending)
 *    // Returns positive when b > a (needs swapping)
 *
 * 3. String sort (case-sensitive):
 *    strings.sort((a, b) => a.localeCompare(b));
 *
 * 4. Custom object sorting:
 *    people.sort((a, b) => a.age - b.age);  // Sort by age
 *
 * Without a comparator, sort() defaults to lexicographical (string) ordering.
 */

// Numerical sort (Ascending)
const ascNumericallySorted = numbers.sort(function (a, b) {
    return a - b
});
console.log('Numerical sort - Asc:', ascNumericallySorted)

// Numerical sort (Descending)
const descNumericallySorted = numbers.sort(function (a, b) {
    return b - a
});
console.log('Numerical sort - Desc:', descNumericallySorted)
