import inquirer from "inquirer";
import chalk from "chalk"

let ans = await inquirer.prompt({
    name: "age",
    type: "number",
    message: "Enter your age"
})

console.log(chalk.blue("InshaALLAH in ", 60 - ans.age, "You will be 60 years old"));