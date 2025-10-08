

// problem_03

// Write a program to count how many vowels (a, e, i, o, u) are in a given string.
// Hint: Use a loop and if condition to check each character.

// Sample Input: "Programming"
// Sample Output: Vowels: 3


// slove
let str = "Programming";
let count = 0;

str = str.toLowerCase();

for(let char of str){
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        count++;
    }
}

console.log("Vowels:",count);