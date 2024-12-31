//switch (expression) {
//case value1:
// code block
// break;
//case value2:
// code block
//break;
// * you can add more cases.
//default:
//  code block
//break;
//}
import chalk from "chalk";
let weather = "winter";
switch (weather) {
    case "summer":
        console.log("It is hot today.");
        break;
    case "winter":
        console.log(chalk.blue("It is"), chalk.bold.white("cold"), chalk.blue("today."));
        break;
    case "spring":
        console.log("The weather is awesome.");
        break;
    default:
        console.log("The weather is not good.");
}
let dayofWeek = "Friday";
switch (dayofWeek) {
    case "Monday":
        console.log("It is monday.");
        break;
    case "Tuesday":
    case "Wednesday":
        console.log("Normal Weekday");
        break;
    case "Thursday":
        console.log("It is Thursday");
        break;
    case "Friday":
        console.log(chalk.bold.green("Blessed Friday!"));
        break;
    default:
        console.log("Happy Weekends.");
}
