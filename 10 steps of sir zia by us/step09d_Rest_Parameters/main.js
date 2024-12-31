"use strict";
function buildName(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
//anonymous function type with Rest parameters
let buildNameFun = function (firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
};
let employeeNameFun = buildNameFun("Joe", "Jack", "Diesel");
console.log(employeeNameFun);
