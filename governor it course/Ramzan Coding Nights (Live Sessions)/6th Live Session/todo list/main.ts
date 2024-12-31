
import inquirer from "inquirer";

let todos = [];
let condition = true;

// types we can use in inquirer objects.
// 1. input 2. number 3. confirm 4. list 5. rawlist 6. expand 7. checkbox 8. password 9. editor
while(condition)
{ let addTask = await inquirer.prompt([{
    name: "todo",
    message: "What you want to do?",
    type: "input",
},

{
name: "addMore",
message: "Do you want to add more?",
type: "confirm",
default: "false"
}
]);

todos.push(addTask.todo);
condition = addTask.addMore
console.log(todos);
}


