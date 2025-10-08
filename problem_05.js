
// problem_05

// Problem 5: Find a Character Occurrence
// Write a program to count how many times a given character appears in a string.
// Hint: Use a loop and compare each character with the given one.

// Sample Input:
// String: "banana"
// Character: "a"
// Sample Output: "a appears 3 times"


// slove

let str = "banana";
let targetchar = "a";
let count = 0;

str = str.toLowerCase();
targetchar = targetchar.toLowerCase();

for(let char of str){
    if(char === targetchar){
        count ++;
    }
}
console.log(`${targetchar} appears ${count} items`);


//  Output: "a appears 3 times"

