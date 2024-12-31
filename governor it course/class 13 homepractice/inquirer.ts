import inquirer from "inquirer";
import chalk from "chalk";

let answers = await inquirer.prompt ([{
    type: "input",
    name: "age",
    message: "What is your age?"
}])



console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");