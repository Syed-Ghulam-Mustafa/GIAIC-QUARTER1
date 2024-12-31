import inquirer from "inquirer";
import { todo } from "node:test";

// install inquirer  done
// array             done
//function
//operators

// await inquirer.prompt ke andar type "list" denge to wo choices dega  aur agr type "input" denge to simple print krega choice nh dega.

let todos : string[] = [];

async function createTodo(todos : string[]){
    let ans = await inquirer.prompt ({
        type: "list",
        name: "todo",
        message: "select an operation",
        choices: ["Add","Update","view","delete"],
    })
}

if (ans.select == "Add"){
    let addTodo = await inquirer.prompt({
        type: "input",
        name: "adding todo",
        message: "Add items in the list.",
    });
    todos.push(addTodo["adding todo"])
    console.log(todos)
}
if (ans.select == "Update"){
    let updateTodo = await inquirer.prompt({
        type: "list",
        name: "updating todo",
        message: "update items in the list",
        choices: todos.map
    });
    todos.push(updateTodo["updating todo"])
}
// example of choices in above mentioned update blockscope. becase we write "list" in type.
// function
// syed 
// akber
// shah
if (ans.select == "view"){}
if (ans.select == "delete"){}

