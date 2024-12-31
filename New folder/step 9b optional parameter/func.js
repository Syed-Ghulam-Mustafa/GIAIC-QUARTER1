"use strict";
//functions optional parameter
//optional parameter in named function
function myname(a, b) {
    if (b) {
        return a + " " + b;
    }
    else {
        return a;
    }
}
let result1 = myname("syed ghulam ", "mustafa");
let result2 = myname("mustafa shah");
console.log(result1);
console.log(result2);
console.log(myname);
function myAdress(appartment, floor) {
    //return appartment + " " + floor
    return `${appartment} ${floor}`;
}
let result3 = myAdress("Shah Appartment", 1);
console.log(result3);
//optional parameter in anonymous function
let my_city = function (a, b) {
    return a + b;
};
let result4 = my_city("karachi", 2);
let result5 = my_city("karachi");
console.log(result5);
let my_city1 = function (a, b) {
    if (b) {
        return a + " " + b;
    }
    else {
        return a;
    }
};
let result6 = my_city1("hyderabad", 4);
let result7 = my_city1("hyderabad");
console.log(result6);
console.log(result7);
// optional parameter in Anonymous Function with Explicit Type
let Brothers = function (elderBro, youngerBro) {
    return "My name is " + elderBro + " and my younger brother name is " + youngerBro;
};
let result8 = Brothers("syed ghulam mustafa", "syed akber shah");
console.log(result8);
