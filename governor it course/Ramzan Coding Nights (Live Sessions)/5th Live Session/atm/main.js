import inquirer from "inquirer";
let myBalance = 10000; // usd
let pinCode = 1234;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "enter your pin",
    type: "number"
});
if (pinAnswer.pin === pinCode) {
    console.log("correct mpin.");
    let actions = await inquirer.prompt({
        name: "action",
        message: "what do you want to do?",
        type: "list",
        choices: ["withdraw", "check balance"]
    });
}
else {
    console.log("the mpin you entered is incorrect.");
}
