"use strict";
let compare = function (choise1, choise2) {
    if (choise1 === choise2) {
        return "tie";
    }
    else if (choise1 === "Rock") {
        if (choise2 === "Paper")
            return "Rock wins";
    }
    else if (choise1 === "Paper") {
        if (choise2 === "Scissor")
            return "Paper wins";
    }
    else if (choise1 === "Scissor") {
        if (choise2 === "Rock")
            return "Scissor wins";
    }
    else {
        return "Game Over!";
    }
};
console.log(compare("Scissor", "Paper"));
