import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter your first number", type: "number", name: "firstNumber" },
    { message: "enter your second number", type: "number", name: "secondNumber" },
    { message: "please select one of operator", type: "list", name: "operator", choices: ["addition", "multiplication", "substraction", "division", "exponential"]}

]);

// conditional statements:

if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber)
};

else if(answer.operator === "substraction") {
    console.log(answer.firstNumber - answer.secondNumber)
};

else if(answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber)
};

else if(answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber)
};



else {
    console.log("please select correct operator")
};


