
// problem_04

// Write a program to convert a string to uppercase manually (without using .toUpperCase() inside loop).
// Hint: Use .toUpperCase() once after reading the string.

// Sample Input: "hello"
// Sample Output: "HELLO"


// slove

let str = "hello";
let result = "";

let upper = str.toUpperCase();

for(let char of upper){
    result += char;
}
console.log(result);