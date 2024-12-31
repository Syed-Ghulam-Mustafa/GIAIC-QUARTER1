"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const first_1 = __importDefault(require("./first"));
const second_1 = __importDefault(require("./second"));
let number3 = first_1.default + second_1.default;
console.log(number3);
const first_2 = require("./first");
const first_3 = require("./first");
console.log(`${first_2.person} and ${first_3.person_2} are two lovely brothers.`);
const first_4 = require("./first");
console.log("My city name is" + " " + first_4.my_city);
console.log(`i love my home thats why i call that ${first_4.myHome}.`);
