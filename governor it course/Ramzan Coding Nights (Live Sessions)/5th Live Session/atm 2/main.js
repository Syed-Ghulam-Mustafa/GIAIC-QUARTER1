import inquirer from "inquirer";
let myBalance = 20000; //usd
let pinCode = 2345;
let myPin = await inquirer.prompt([{
        name: "mpin",
        message: "please enter pin.",
        type: "number"
    }]);
if (myPin.mpin === pinCode) {
    console.log("correct mpin!");
    let actions = await inquirer.prompt([{
            name: "action",
            message: "what do you want to do?",
            type: "list",
            choices: ["withdraw", "check balance"]
        }]);
    if (actions.action === "Withdraw") {
        let amountAnswer = await inquirer.prompt([{
                name: "amount",
                message: "please enter amount.",
                type: "number"
            }]);
        myBalance -= amountAnswer.amount;
        console.log(`your remaining balance is ${myBalance}`);
    }
    else if (actions.action === "check balance") {
        console.log(`your remaining balance is ${myBalance}`);
    }
    else {
        "the mpin you entered is incorrect.";
    }
}
