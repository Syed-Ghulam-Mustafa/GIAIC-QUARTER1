"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const first_1 = __importDefault(require("./first"));
const second_1 = __importDefault(require("./second"));
console.log(first_1.default + second_1.default);
let sum = first_1.default + second_1.default;
console.log(sum);
// jab bhi ek cheez export kryngy to export default kr k kryngy.
// hmesha phly jis file ka data hoga wahan se export kryngy then dusri file mein import ho skega.
// import krte waqt inverted coma ke andar . likh k phir / likh phir file name likhenge without uski file type for example "./first"
let a = 4 > 2 && 1 > 2;
console.log(a);
let b = 11 / 0;
console.log(b);
