"use strict";
//tules ka syntex
let tuples = ["osama", 123, "yaqub"];
const fn = () => { return ["azhar", 3]; };
let [string, number] = fn();
console.log(number);
console.log(string);
const fn2 = () => {
    return {
        name: "ali",
    };
};
console.log(fn2);
