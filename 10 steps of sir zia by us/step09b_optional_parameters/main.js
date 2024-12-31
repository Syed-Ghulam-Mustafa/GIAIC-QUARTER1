"use strict";
//Named function with optional parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
console.log(buildName("Akber", "Shah"));
console.log(buildName("Akber"));
console.log(buildName("Syed", "Akber"));
//anonymous function type with optional parameters
let buildName1 = function (firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
console.log(buildName1("Akber", "Shah"));
//anonymous function ke concepts seekhny hain
