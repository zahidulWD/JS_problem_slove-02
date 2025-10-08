
// problem_09

// Problem 9: Replace All Spaces
// Write a program to replace all spaces in a string with a hyphen (-).
// Hint: Use .replaceAll(" ", "-").

// Sample Input: "I love JS"
// Sample Output: "I-love-JS"


// slove

let str = "I love JS";

let newStr = str.replaceAll(" ","-");

console.log(newStr);