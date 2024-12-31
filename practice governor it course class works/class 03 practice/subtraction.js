"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let a = 8;
let b = 2;
console.log(a - b);
let c = a - b;
console.log(c);
const first_1 = __importDefault(require("./first"));
const second_1 = __importDefault(require("./second"));
console.log(first_1.default - second_1.default);
