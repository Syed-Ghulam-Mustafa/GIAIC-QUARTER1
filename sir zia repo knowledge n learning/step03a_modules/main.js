"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const first_1 = __importDefault(require("./first"));
const second_1 = require("./second");
console.log(first_1.default + second_1.b + second_1.c);
// import {b} from "./second"
// single value ko export default krengy to simple way mein import krengy.
// jb export keyword waly ko import krengy to curly bracket{} k andar likhengy us varible ko chahy single import ho ya multiple.
//"./first"
//"./second"
