import inquirer from "inquirer";
let answer = await inquirer.prompt({
    name: "age",
    type: "number",
    message: "What is your age: "
});
console.log("InshaALLAH in " + (60 - answer.age), "years you will be 60 years old.");
