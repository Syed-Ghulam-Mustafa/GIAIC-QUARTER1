import inquirer from "inquirer"

const answer = await inquirer.prompt([
    {message: "Enter your first number", type: "number", name: "firstNumber"},
    {message: "Enter your second number", type: "number", name: "secondNumber"},
    {message: "Please select one of operators", type:"list", name:"operators", choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"]},
])

// Conditional Statement
if (answer.operators == "ADDITION"){
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators == "SUBTRACTION"){
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators == "MULTIPLICATION"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators == "DIVISION"){
    console.log(answer.firstNumber / answer.secondNumber);
}
else {"Please select correct operator"};
