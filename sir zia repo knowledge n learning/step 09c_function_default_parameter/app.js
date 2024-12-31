"use strict";
// step09c_function_default_parameter
//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
function buildName(firstName, lastName = "Khan") {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName("Bob"); //works correctly because last parameter is optional
//let result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
let result3 = buildName("Bob", "Adams"); //correct
let result4 = buildName("Tikka"); // khud se practice
let result5 = buildName("Akber", "Shah"); // khud se practice
console.log(result1);
console.log(result3);
console.log(result5);
console.log(result4);
// Anonymous function type with default parameters
// (Note that the parameter type will be optional when used with default parameters)
let buildName1 = function (firstName, lastName = "Khan") {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
let resultA = buildName1("Danish");
let resultB = buildName1("Danish", "Bhai");
console.log(resultA);
console.log(resultB);
// own practice.
// ye wala function samjh nh aya h. samjhaya nh h is ny bss read krty krty agy nikl gya ye lazmi samjhna h InshaALLAH
// Anonymous function mein 'arrow (=>)' ke bad jo anonymous function bnaty hain us mein "function" keyword ke baad
// "Anotation (:)" nh lgta hai direct round bracket lga ke parameters define krty hain.
// iska syntax ko dekhna h/ practice krni h.
