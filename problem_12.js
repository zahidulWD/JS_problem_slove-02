
// problem_12

// Problem 12: Find Longest Word
// Write a program to find the longest word in a sentence.
// Hint: Use .split(" ") and compare lengths using a loop.

// Sample Input: "I love programming"
// Sample Output: "programming"


// slove
let sentence = "I love programming";

let words = sentence.split(" ");
let longest = "";

for(let word of words){
    if(word.length > longest.length){
        longest = word
    }
}
console.log(longest);
