"use strict";
// functions 
// function syntax(parameter: type) {
// return `` ya console.log(``)
// }
function greet(name) {
    return `Hi, ${name} how are you?`;
}
// calling function
console.log(greet("Muhammad"));
greet("Amjad");
console.log(greet);
console.log(greet("Ali"));
function add(numberA, numberB) {
    return numberA + numberB;
}
console.log(add(3, 8));
// in above mentioned two examples of function, we used default parameters.
// there are 2 types of parameters.
// 1. optional parameter. ?
// 2. default parameter.
// giving example of 'optional parameter ?' with the help of 'if' and 'else'.
// if aur else ki help se ye revise bhi ho gye aur optional parameter ki example b samjh agyi.
function optional(name) {
    if (name) {
        return `Hi, ${name}`;
    }
    else {
        return `hello`;
    }
}
console.log(optional());
console.log(optional('"Syed Akber"'));
