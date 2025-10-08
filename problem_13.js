

// problem_13

// Problem 13: Count Digits in a String
// Write a program to count how many digits (0–9) are in a given string.
// Hint: Use a loop and if to check if a character is between '0' and '9'.

// Sample Input: "abc123xyz45"
// Sample Output: Digits: 5


// slove

let text = "abc123xyz45";
let count = "";

for(let char of text){
    if(char >= '0' && char <= '9'){
        count++
    }
}
console.log(count);

// Output: Digits: 5