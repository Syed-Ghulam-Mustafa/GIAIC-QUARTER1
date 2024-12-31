// practising making atm project learnt from ramzan coding nights 5th live session by sir hamza and sir ameen alam.

import inquirer from "inquirer";

const mpin: number = 2001;
let myBalance: number = 20000 // usd

let mypinAnswer = await inquirer.prompt([{
    name: "pinCode",
    message: "please enter your pin code",
    type: "number"
}])

if (mypinAnswer.pinCode === mpin) {
    console.log("correct mpin!")

    let actions = await inquirer.prompt([{
name: "action",
message: "what do you want to do?",
type: "list",
choices: ["withdraw","check balance"]
    }])

    if (actions.action === "withdraw") {
        let fastcashChoice = await inquirer.prompt([{
            name: "q3",
            message: "please select one option.",
            type: "list",
            choices: ["1000","2000","3000","5000", "other amount"]
        }])

        if (fastcashChoice.q3 === "other amount"){
let otherAmount = await inquirer.prompt([{
    name: "q4",
    message: "please enter the amount you want to withdraw",
    type: "number"
}])
console.log(myBalance - otherAmount.q4)

else if (fastcashChoice.q3 === fastcashChoice.choices[0]) {
    console.log(myBalance - fastcashChoice.choices[0])
}

}}
}

else {
    console.log("incorrect mpin!")
}