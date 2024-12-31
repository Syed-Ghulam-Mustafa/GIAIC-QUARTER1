import inquirer from "inquirer"
import chalk from "chalk"

let answer = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "How old are you?"
}])



//type input b chal jaygi console.log perfect honi chahye



console.log(chalk.bold.blue("InshaALLAH, in " + (60 - answer.age) + " years you will be 60 years old."))
