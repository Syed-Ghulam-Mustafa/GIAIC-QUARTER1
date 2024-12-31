"use strict";
// 2nd homeworl
// if else with functions
/* let compare = function (choice1: string, choice2: string) {

    if (choice1 ===choice2){
            return "tie";
    }
    else if(choice1 === "rock") {
        if (choice2 === "scissors"){
            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
    else if (choice1 === "paper"){
        if (choice2 === "rock"){
            return "paper wins";
        }
    }
    else {
        return "scissor wins";
    }
    }
    
    console.log(compare("paper","scissors")); */
let nameofPerson = function (firstName, LastName) {
    if (firstName == "Syed")
        if (LastName == "Akber Shah")
            return "younger brother";
        else {
            return "younger sister";
        }
    else if (firstName == "Ghulam Mustafa")
        if (LastName == "Shah")
            return "older brother";
        else {
            return "older sister";
        }
    else {
        return "i dont know";
    }
};
console.log(nameofPerson("Shah", "Shah"));
