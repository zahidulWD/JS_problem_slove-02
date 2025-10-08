

// problem_1

// Problem 11: Remove Extra Spaces
// Write a program to remove extra spaces from a sentence.
// Hint: Use .trim() and .replaceAll("  ", " ").

// Sample Input: "   Hello   JS  "
// Sample Output: "Hello JS"


// slove

let sentence = "   Hello   JS  ";

sentence = sentence.trim();
sentence = sentence.replaceAll("  ", " ");

console.log(sentence);