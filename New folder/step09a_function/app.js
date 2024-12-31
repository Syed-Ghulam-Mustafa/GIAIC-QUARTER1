"use strict";
//step09a_Functions
// my practice (azhar for uzair exam)
//named functions
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Uzair");
function numbers(a, z) {
    return a + z;
}
console.log(numbers(7, 4));
//anonymous functions
// anonymous function ko as a argument use kr skty hain.
let myAnonymous = function (a, b) {
    return `This men is ${a + b} months old.`;
};
console.log(myAnonymous("20 years", 6));
//lambda function
// type names doesnt matter
let spl_function = function (a, b) {
    return a * b;
};
console.log(spl_function(3, 5));
let lambFunction = function (y, z) {
    return y + z;
};
console.log(lambFunction("azhar", "uzair"));
