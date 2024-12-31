// if else statement ka program bnana hai using inquirer.
// ye humara homework hai next class mein miss check krengi.

// 2nd homeworl
// if else with functions

let compare = function(choice1:string,choice2:string) {
    if (choice1 === choice2) {
        return "tie";}

        else if (choice1 === "rock")
            (choice2 === "scissors") {
            return "rock wins";
        } else {
            return("paper wins");
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            console.log("paper wins");
        } else {
            console.log("scissors wins");
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            console.log("scissors wins");
        } else {
            console.log("rock wins");
        }
    } else {
        console.log("Invalid choice");
    }
}