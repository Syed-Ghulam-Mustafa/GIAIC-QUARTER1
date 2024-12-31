"use strict";
//step 09c
// default parameters...!
// default parameter in named funcion.
function func1(firstName, lastName = "Shah") {
    return `Hi everyone, this is ${firstName} ${lastName}...!!`;
}
console.log(func1("Syed Akber", "Bukhari"));
console.log(func1("Syed Ghulam Mustafa"));
// default param in anonymous function...
let func2 = function (a, b = "Shah") {
    return "Hello World!, " + " I am " + a + b;
};
console.log(func2("Syed Akber"));
console.log(func2("Uzair", "Bro"));
// default param in anonymous function with type explicit.
let func3 = function (city, province = "Sindh") {
    return `I live in ${city}, ${province}.`;
};
let result = func3("karachi", "sindh");
console.log(result);
// let result2 = func3("Karachi")
