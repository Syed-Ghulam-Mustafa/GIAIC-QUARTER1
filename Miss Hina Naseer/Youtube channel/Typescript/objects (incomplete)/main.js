"use strict";
// objects
// definition of object: object is very important data type of typescript which is use to manage complex data.
/* let objectName = {
    key1: "value1",
    key2: "value2",
    and so on...
}; */
let student = { name: "Syed Akber Shah",
    fatherName: "Saleem Shah",
    age: 22,
    rollNo: 13,
    grades: [78, 85, 90]
};
console.log(student);
console.log(student.name);
console.log(student.grades);
console.log(student.grades[2]);
let person1 = {
    name: "Syed Ghulam Mustafa",
    age: 24,
    city: "Karachi",
    country: "Pakistan",
};
let person2 = {
    name: "Muhammad Ali",
    age: 18,
    city: "Istanbul",
    country: "Turkey",
};
console.log(person1.city);
console.log(person2.country);
// initial / original object.
let bike = {
    name: "CD 70",
    model: "2022",
    company: "honda",
    color: "red",
};
console.log(bike.color);
// updated property
bike.color = "black";
bike.model = "2024";
console.log(bike.model);
// add new property.
bike[capacity] = "two";
