
// problem_15

// Problem 15: Combine Loop and Slice
// Write a program that prints every substring of a given string using loop and .slice().
// Hint: Use for loop and slice from 0 to i.

// Sample Input: "JS"
// Sample Output:
                  // J
                  // JS



//slove

let text = "JS";

for(let i = 0 ; i <= text.length ; i++){
    console.log(text.slice(0,i));

}

