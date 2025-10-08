
// problem_02

// Problem 2: Reverse a String
// Write a program that reverses a given string.
// Hint: Use a loop to add each character to a new string in reverse order.

// Sample Input: "World"
// Sample Output: "dlroW"


// slove

let str = "Zahidul";
let reverse = "";


for(let char of str){
    reverse = char+ reverse;
}
console.log(reverse);




// for(let i = str.length -1; i >= 0; i-- ){
//        reverse += str[i];
// }
// console.log(reverse);
