"use strict";
// if else with functions
let compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "tie";
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        }
    }
    else {
        return "scissor wins";
    }
};
console.log(compare("paper", "scissors"));
