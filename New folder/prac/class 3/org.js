"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const first_1 = __importDefault(require("./first"));
const second_1 = require("./second");
let sum = first_1.default + second_1.num2;
console.log(sum);
const second_2 = __importDefault(require("./second"));
const first_2 = require("./first");
let multiply = first_2.num3 * second_2.default;
console.log(multiply);
