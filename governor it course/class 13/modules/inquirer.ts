// normaly prompt se kisi website mein swal puchy jata h phr apna data input krta h answer krta h

import inquirer from "inquirer";
import chalk from  "chalk"
let answers = await inquirer.prompt([{
    type: "number",
    name: "age",
    message: "Enter Your Age:"
}])

console.log(chalk.blueBright,"Your current age is: ", answers.age)