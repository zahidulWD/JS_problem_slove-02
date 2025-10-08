
// problem_06

// Problem 6: Check Palindrome
// Write a program to check whether a string is a palindrome (same forward and backward).
// Hint: Compare the string with its reversed version.

// Sample Input: "madam"
// Sample Output: "Palindrome"


// slove

let str = "madam";
let reversed = "";

str = str.toLowerCase();


for(let i = str.length -1; i >= 0; i --){
    reversed += str[i];
}
if(str === reversed){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");
}