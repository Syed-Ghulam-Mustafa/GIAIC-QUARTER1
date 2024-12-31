"use strict";
let teacher = {
    name: "miss hina",
    grade: 17,
    age: 34
};
console.log(teacher);
let studdent1 = {
    name: "syed uzair",
    age: 25
};
console.log(studdent1.age);
console.log(studdent1["name"]);
let storemanager = {
    name: "syed Uzair"
};
let ball = {
    diameter: 10
};
let sphere = {
    diameter: 25
};
ball = sphere;
sphere = ball;
let tube = {
    diameter: 25,
    length: 3
};
sphere = tube;
ball = tube;
const mybook = {
    auther: {
        fname: "ghulam",
        lname: "mustafa",
    },
    name: "way sunnah"
};
console.log(mybook);
