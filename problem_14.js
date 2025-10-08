

// problem_14

// Write a program to remove all vowels from a string.
// Hint: Use .replaceAll() or a loop to skip vowels.

// Sample Input: "Hello"
// Sample Output: "Hll"


// slove

let text = "Hello";
let result = text.replaceAll(/[aeiouAEIOU]/g, "");

console.log(result);