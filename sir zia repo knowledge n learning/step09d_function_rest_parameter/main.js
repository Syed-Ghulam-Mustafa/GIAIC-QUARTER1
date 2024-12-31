"use strict";
// step09d_function_rest_parameter
function buildName(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
//rest parameter 1 se zyada arguments ke liye lgaty hain is k ilawa jitni b types hn parameter ki wo sab sigle argument leti hn.
// qk rest parameter multiple arguments leta h isi liye upar array ki example given h rest mein. 
//rest parameter ka syntax ye h k parameter k name se phly ... lgengy lazmi.
//anonymous function type with Rest parameters
var buildNameFun = function (firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
};
var employeeName2 = buildNameFun("Azhar", "uzair", "khajur bazar");
console.log(employeeName2);
//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
