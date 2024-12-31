// practising atm project with the help of inquirer. learnt by ramzan coding nights 5th live session by sir hamza and sir ameen alam.
import inquirer from "inquirer";
const myPin = 2001;
let myBalance = 20000; //usd
let mypinAnswer = await inquirer.prompt([{
        name: "mpin",
        message: "please enter your pin code",
        type: "number"
    }]);
if (mypinAnswer.mpin === myPin) {
    console.log("correct mpin!");
    let actions = await inquirer.prompt([{
            name: "action",
            message: "what would you like to do?",
            type: "list",
            choices: ["withdraw", "check balance"]
        }]);
    if (actions.action === "check balance") {
        console.log(myBalance);
    }
    else if (actions.action === "withdraw") {
        let withdrawOption = await inquirer.prompt([{
                name: "withdrawSetting",
                message: "how much would you like to withdraw?",
                type: "list",
                choices: ["1000", "2000", "5000", "other amount"]
            }]);
        if (withdrawOption.withdrawSetting === "other amount") {
            let otherAmount = await inquirer.prompt([{
                    name: "otheramountamount",
                    message: "how much would you like to withdraw?",
                    type: "number"
                }]);
            myBalance -= otherAmount.otheramountamount;
            console.log(myBalance);
        }
        else if (withdrawOption.withdrawSetting === "1000") {
            myBalance -= 1000;
            console.log(myBalance);
        }
        else if (withdrawOption.withdrawSetting === "2000") {
            myBalance -= 2000;
            console.log(myBalance);
        }
        else if (withdrawOption.withdrawSetting === "5000") {
            myBalance -= 5000;
            console.log(myBalance);
        }
    }
}
else {
    console.log("incorrect mpin!!!");
}
