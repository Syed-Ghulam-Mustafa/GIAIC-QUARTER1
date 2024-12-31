// complete hai according to ramzan coding night 8th live session by sir okasha tanoli. lekin user_answer mein jo hum ny objects bnaye hain or inquirer chlaya hai us k bad se kuch b samjh nh aya.
// ye dobara krna aur smjhna hai.
// line 32 aur 33 mein jo array brackets se kam liya hai isko dynamic approach bolty hain iski jagah hum if else ka b use kr skty hain.
import inquirer from "inquirer";
const currency = {
    USD: 1, //base currency
    PKR: 278.36,
    TurkishLira: 32.47,
    EURO: 0.94,
};
let user_answer = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: "select your from currency?",
        choices: ["USD", "PKR", "TurkishLira", "EURO"]
    },
    {
        name: "to",
        type: "list",
        message: "select your to currency?",
        choices: ["USD", "PKR", "TurkishLira", "EURO"]
    },
    {
        name: "amount",
        type: "input",
        message: "enter your amount"
    }
]);
let userFromCurrency = user_answer.from;
let userToCurrency = user_answer.to;
let fromAmount = currency[userFromCurrency];
let toAmount = currency[userToCurrency];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // usd base currency
let convertedAmount = user_answer.amount * user_answer.to;
// console.log(fromAmount);
// console.log(toAmount);
console.log(convertedAmount);
/*
switch (fromCurrency.to) {
    case fromCurrency.to == currency.pkr:
        console.log(fromCurrency.amount * currency.pkr);
        break;
        case fromCurrency.to == currency.turkishLira:
        console.log(fromCurrency.amount * currency.turkishLira)
        break;
        case fromCurrency.to == currency.usd:
            console.log(fromCurrency.amount * currency.usd)
        break;
        case fromCurrency.to == currency.euro:
            console.log(fromCurrency.amount * currency.euro)
        break;
    default:
        console.log("invalid currency");
        break;
}
*/
